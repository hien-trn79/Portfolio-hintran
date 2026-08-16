package com.hintran.portfolio_backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SkillResponse {

    private Integer skillId;

    private String skillName;

    private String description;

    private Integer skillTypeId;

    private Integer meId;
}
