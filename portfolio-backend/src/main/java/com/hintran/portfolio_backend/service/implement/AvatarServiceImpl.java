package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.dto.response.AvatarResponse;
import com.hintran.portfolio_backend.mapper.AvatarMapper;
import com.hintran.portfolio_backend.model.Avatar;
import com.hintran.portfolio_backend.model.Me;
import com.hintran.portfolio_backend.repository.AvatarRepository;
import com.hintran.portfolio_backend.repository.MeRepository;
import com.hintran.portfolio_backend.service.interfaces.AvatarService;
import com.hintran.portfolio_backend.service.interfaces.SupabaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AvatarServiceImpl implements AvatarService {

    private final AvatarRepository repository;
    private final AvatarMapper mapper;

    private final MeRepository meRepository;

    private final SupabaseService supabaseService;

    public AvatarResponse uploadAvatar(String avatarName, MultipartFile file) {
        try {
            Me me = meRepository.findById(1).orElseThrow(() -> new RuntimeException("Me not found"));

            String originalFilename = file.getOriginalFilename();
            String fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));

            if(!fileExtension.equalsIgnoreCase(".jpg") && !fileExtension.equalsIgnoreCase(".jpeg") && !fileExtension.equalsIgnoreCase(".png")) {
                throw new RuntimeException("Invalid file type. Only JPG, JPEG, and PNG are allowed.");
            }

            String filePath = "avatars/" + avatarName + fileExtension;

            String avatarUrl = supabaseService.uploadFile(file, originalFilename);

            Avatar avatar = new Avatar();
            avatar.setAvatarName(avatarName);
            avatar.setAvatarUrl(avatarUrl);

            repository.save(avatar);

            return new AvatarResponse(
                    avatar.getAvatarId(),
                    avatar.getAvatarName(),
                    avatar.getAvatarUrl()
            );

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<AvatarResponse> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());

    }

    public AvatarResponse getById(Integer avatarId) {
        Avatar avatar = repository.findById(avatarId)
                .orElseThrow(() -> new RuntimeException("Avatar not found with id: " + avatarId));
        return mapper.toResponse(avatar);
    }
}
