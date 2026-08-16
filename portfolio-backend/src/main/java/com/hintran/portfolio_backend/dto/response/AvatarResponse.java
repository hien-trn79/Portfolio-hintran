package com.hintran.portfolio_backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class AvatarResponse {
    private Integer avatarId;

    private String avatarName;

    private String avatarUrl;
}
