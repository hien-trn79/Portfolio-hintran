package com.hintran.portfolio_backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ProjectResponse {
    private Integer projectId;

    private String projectName;

    private String description;

    private String techStack;

    private List<String> keyOutstandingFeatures;

    private List<String> outstandingFeatures;

    private String position;

    private Integer totalMember;

    private String beginDate;

    private String endDate;

    private String createdAt;

    private String updatedAt;

    private Boolean isFeatured;

    private Integer meId;
}
