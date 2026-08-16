package com.hintran.portfolio_backend.dto.request;

import lombok.Data;

@Data
public class RepoRequest {

    private String repoUrl;

    private Integer projectId;
}
