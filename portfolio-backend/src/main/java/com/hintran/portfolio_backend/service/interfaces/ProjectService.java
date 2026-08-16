package com.hintran.portfolio_backend.service.interfaces;

import com.hintran.portfolio_backend.dto.request.ProjectRequest;
import com.hintran.portfolio_backend.dto.response.ProjectResponse;

import java.util.List;

public interface ProjectService {

    ProjectResponse create(ProjectRequest request);

    ProjectResponse getById(Integer projectId);

    ProjectResponse update(Integer projectId, ProjectRequest request);

    List<ProjectResponse> getAll();

    Boolean delete(Integer projectId);
}
