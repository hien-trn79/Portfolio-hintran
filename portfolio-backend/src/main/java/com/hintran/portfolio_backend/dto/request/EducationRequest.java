package com.hintran.portfolio_backend.dto.request;

import lombok.Data;

@Data
public class EducationRequest {
    private String schoolName;
    private String major;
    private Float currentGPA;
    private Float maxGPA;
    private String beginDate;
    private String endDate;

    private Boolean isDeleted;

    private Integer meId;
}
