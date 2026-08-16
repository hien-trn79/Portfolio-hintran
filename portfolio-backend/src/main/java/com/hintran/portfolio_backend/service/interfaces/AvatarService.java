package com.hintran.portfolio_backend.service.interfaces;


import com.hintran.portfolio_backend.dto.response.AvatarResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface AvatarService {

    List<AvatarResponse> getAll();

    AvatarResponse getById(Integer avatarId);

    AvatarResponse uploadAvatar(String avatarName, MultipartFile file);
}
