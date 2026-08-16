package com.hintran.portfolio_backend.mapper;

import com.hintran.portfolio_backend.dto.request.RepoRequest;
import com.hintran.portfolio_backend.dto.response.RepoResponse;
import com.hintran.portfolio_backend.model.Project;
import com.hintran.portfolio_backend.model.Repo;
import org.springframework.stereotype.Component;

@Component
public class RepoMapper {
    public RepoResponse toResponse(Repo entity) {
        return new RepoResponse(
                entity.getRepoId(),
                entity.getRepoUrl(),
                entity.getProject().getProjectId(),
                entity.getProject().getProjectName()
        );
    }

    public Repo toEntity(RepoRequest request, Project project) {
        Repo entity = new Repo();

        entity.setRepoUrl(request.getRepoUrl());
        entity.setProject(project);

        return entity;
    }

    public void update(Repo entity, RepoRequest request, Project project) {

        entity.setProject(project);
        entity.setRepoUrl(request.getRepoUrl());

    }
}
