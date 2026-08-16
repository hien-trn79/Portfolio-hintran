package com.hintran.portfolio_backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EducationResponse {
    private Integer educationId;
    private String schoolName;
    private String major;
    private Float currentGPA;
    private Float maxGPA;
    private String beginDate;
    private String endDate;
    private Boolean isDeleted;
}
