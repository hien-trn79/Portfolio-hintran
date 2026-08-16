package com.hintran.portfolio_backend.service.interfaces;

import com.hintran.portfolio_backend.dto.request.RepoRequest;
import com.hintran.portfolio_backend.dto.response.RepoResponse;

import java.util.List;

public interface RepoService {

    RepoResponse create(RepoRequest request);

    List<RepoResponse> getAll();

    RepoResponse getById(Integer repoId);

    RepoResponse getByProjectId(Integer projectId);

    RepoResponse update(Integer repoId, RepoRequest request);

    Boolean delete(Integer repoId);
}
