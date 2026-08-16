package com.hintran.portfolio_backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class RepoResponse {
    private Integer repoId;

    private String repoUrl;

    private Integer projectId;

    private String projectName;
}
