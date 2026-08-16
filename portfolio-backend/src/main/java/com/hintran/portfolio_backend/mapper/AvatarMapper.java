package com.hintran.portfolio_backend.mapper;

import com.hintran.portfolio_backend.dto.response.AvatarResponse;
import com.hintran.portfolio_backend.model.Avatar;
import org.springframework.stereotype.Component;

@Component
public class AvatarMapper {

    public AvatarResponse toResponse(Avatar entity) {
        if (entity == null) {
            return null;
        }
        return AvatarResponse.builder()
                .avatarId(entity.getAvatarId())
                .avatarName(entity.getAvatarName())
                .avatarUrl(entity.getAvatarUrl())
                .build();
    }
}
