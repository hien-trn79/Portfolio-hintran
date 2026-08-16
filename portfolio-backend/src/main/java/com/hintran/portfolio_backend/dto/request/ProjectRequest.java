package com.hintran.portfolio_backend.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class ProjectRequest {

    private String projectName;

    private String description;

    private String position;

    private String techStack;

    private List<String> keyOutstandingFeatures;

    private List<String> outstandingFeatures;

    private Integer totalMember;

    private String beginDate;

    private String endDate;

    private Boolean isFeatured;

    private Integer meId;
}
