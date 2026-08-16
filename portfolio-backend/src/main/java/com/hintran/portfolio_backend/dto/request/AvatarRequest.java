package com.hintran.portfolio_backend.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class AvatarRequest {
    private String avatarName;
    private MultipartFile file;
}
