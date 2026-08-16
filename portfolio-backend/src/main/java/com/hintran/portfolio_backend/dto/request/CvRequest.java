package com.hintran.portfolio_backend.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CvRequest {
    private MultipartFile file;
    private String cvName;
}
