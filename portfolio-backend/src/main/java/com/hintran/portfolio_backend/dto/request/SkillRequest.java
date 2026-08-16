package com.hintran.portfolio_backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SkillRequest {

    @NotBlank(message = "Skill name is required")
    private String skillName;

    private String description;

    private Integer skillTypeId;

    private Integer meId;
}
