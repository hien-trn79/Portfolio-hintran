package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.service.interfaces.SupabaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SupabaseServiceImpl implements SupabaseService {
    @Value("${supabase.url}")
    private String supabaseUrl;

    @Value("${supabase.key}")
    private String supabaseKey;

    @Value("${supabase.bucket}")
    private String bucketName;

    private final RestClient restClient = RestClient.create();

    public String uploadFile(MultipartFile file, String folder) {
        try {
            String originalFilename = file.getOriginalFilename();
            String extension = "";

            if (originalFilename != null && originalFilename.contains(".")) {
                extension = originalFilename.substring(originalFilename.lastIndexOf("."));
            }

            String filename = folder + "/" + UUID.randomUUID() + extension;

            String uploadUrl = String.format("%s/storage/v1/object/%s/%s",
                    supabaseUrl.replaceAll("/+$", ""), // Xóa dấu / ở cuối URL nếu lỡ config thừa
                    bucketName,
                    filename
            );
            // 3. Gửi Request POST tải file lên Supabase Storage
            restClient.post()
                    .uri(uploadUrl)
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + supabaseKey)
                    .header("apiKey", supabaseKey)
                    .contentType(MediaType.parseMediaType(
                            file.getContentType() != null ? file.getContentType() : MediaType.APPLICATION_OCTET_STREAM_VALUE
                    ))
                    .body(file.getBytes())
                    .retrieve()
                    .toBodilessEntity();

            // 4. Trả về Public URL xem file trực tiếp
            return String.format("%s/storage/v1/object/public/%s/%s", supabaseUrl, bucketName, filename);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
