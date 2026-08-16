package com.hintran.portfolio_backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SkillTypeRequest {

    @NotBlank(message = "Skill type name is required")
    private String skillTypeName;
}
