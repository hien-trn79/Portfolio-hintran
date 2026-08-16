package com.hintran.portfolio_backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SkillTypeResponse {
    private Integer skillTypeId;
    private String skillTypeName;
}
