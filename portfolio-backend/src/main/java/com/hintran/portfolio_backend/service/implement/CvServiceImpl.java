package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.model.Cv;
import com.hintran.portfolio_backend.repository.CvRepository;
import com.hintran.portfolio_backend.service.interfaces.CvService;
import com.hintran.portfolio_backend.service.interfaces.SupabaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CvServiceImpl implements CvService {

    private final CvRepository repository;
    private final SupabaseService supabaseService;

    @Override
    public Cv uploadCv(MultipartFile file, String cvName) {
        try {
            String fileUrl = supabaseService.uploadFile(file, "cvs");

            Cv cv = new Cv();

            cv.setCvName(cvName);
            cv.setCvUrl(fileUrl);
            cv.setCreatedAt(java.time.LocalDate.now());
            cv.setUpdatedAt(java.time.LocalDate.now());

            return repository.save(cv);

        } catch(Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<Cv> getAll() {
        return repository.findAll();
    }

    public Cv getById(Integer id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("CV not found with id: " + id));
    }
}
