package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.dto.request.ProjectRequest;
import com.hintran.portfolio_backend.dto.response.MeResponse;
import com.hintran.portfolio_backend.dto.response.ProjectResponse;
import com.hintran.portfolio_backend.mapper.ProjectMapper;
import com.hintran.portfolio_backend.model.Me;
import com.hintran.portfolio_backend.model.Project;
import com.hintran.portfolio_backend.repository.MeRepository;
import com.hintran.portfolio_backend.repository.ProjectRepository;
import com.hintran.portfolio_backend.service.interfaces.MeService;
import com.hintran.portfolio_backend.service.interfaces.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository repository;
    private final ProjectMapper mapper;

    private final MeRepository meRepository;

    public List<ProjectResponse> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

    public ProjectResponse getById(Integer projectId) {
        return repository.findById(projectId)
                .map(mapper::toResponse)
                .orElse(null);
    }

    public ProjectResponse create(ProjectRequest request) {
        Project entity = mapper.toEntity(request);

        Me me = meRepository.findById(request.getMeId()).orElseThrow(() -> new RuntimeException("Me not found"));
        entity.setMe(me);
        return mapper.toResponse(repository.save(entity));
    }

    public ProjectResponse update(Integer projectId, ProjectRequest request) {
        Project entity = repository.findById(projectId).orElse(null);
        if(entity == null) {
            return null;
        }
        mapper.update(entity, request);
        Me me = meRepository.findById(request.getMeId())
                .orElseThrow(() -> new RuntimeException("Me not found"));

        entity.setMe(me);
        return mapper.toResponse(repository.save(entity));
    }

    public Boolean delete(Integer projectId) {
        Project entity = repository.findById(projectId).orElse(null);
        if (entity == null) {
            return false;
        }
        repository.delete(entity);
        return true;
    }
}
