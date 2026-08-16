package com.hintran.portfolio_backend.service.interfaces;

import com.hintran.portfolio_backend.model.Cv;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CvService {
    List<Cv> getAll();

    Cv getById(Integer id);

    Cv uploadCv(MultipartFile file, String cvName);
}
