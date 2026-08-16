package com.hintran.portfolio_backend.service.interfaces;

import org.springframework.web.multipart.MultipartFile;

public interface SupabaseService {

    String uploadFile(MultipartFile file, String folder);
}
