package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.dto.request.RepoRequest;
import com.hintran.portfolio_backend.dto.response.RepoResponse;
import com.hintran.portfolio_backend.mapper.RepoMapper;
import com.hintran.portfolio_backend.model.Project;
import com.hintran.portfolio_backend.model.Repo;
import com.hintran.portfolio_backend.repository.ProjectRepository;
import com.hintran.portfolio_backend.repository.RepoRepository;
import com.hintran.portfolio_backend.service.interfaces.RepoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RepoServiceImpl implements RepoService {

    private final RepoRepository repository;
    private final RepoMapper mapper;

    private final ProjectRepository projectRepository;

    @Override
    public RepoResponse create(RepoRequest request) {
        Project project = projectRepository.findById(request.getProjectId())
                .orElseThrow(() -> new RuntimeException("Project not found"));

        Repo repo = mapper.toEntity(request, project);

        return mapper.toResponse(repository.save(repo));
    }

    public List<RepoResponse> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

    public RepoResponse getById(Integer repoId) {
        Repo repo = repository.findById(repoId)
                .orElseThrow(() -> new RuntimeException("Repo not found"));

        return mapper.toResponse(repo);
    }

    public RepoResponse getByProjectId(Integer projectId) {
        Repo repo = repository.findByProjectProjectId(projectId)
                .orElseThrow(() -> new RuntimeException("Repo not found"));

        return mapper.toResponse(repo);
    }

    public RepoResponse update(Integer repoId, RepoRequest request) {
        Repo repo = repository.findById(repoId)
                .orElseThrow(() -> new RuntimeException("Repo not found"));

        Project project = projectRepository.findById(request.getProjectId())
                .orElseThrow(() -> new RuntimeException("Project not found"));

        mapper.update(repo, request, project);

        return mapper.toResponse(repository.save(repo));
    }

    public Boolean delete(Integer repoId) {
        Repo repo = repository.findById(repoId)
                .orElseThrow(() -> new RuntimeException("Repo not found"));

        repository.delete(repo);

        return true;
    }
}
