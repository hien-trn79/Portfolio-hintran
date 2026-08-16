package com.hintran.portfolio_backend.mapper;

import com.hintran.portfolio_backend.dto.request.ProjectRequest;
import com.hintran.portfolio_backend.dto.response.ProjectResponse;
import com.hintran.portfolio_backend.model.Me;
import com.hintran.portfolio_backend.model.Project;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class ProjectMapper {

    public ProjectResponse toResponse(Project entity) {
        return new ProjectResponse(
                entity.getProjectId(),
                entity.getProjectName(),
                entity.getDescription(),
                entity.getTechStack(),
                entity.getKeyOutstandingFeatures().stream().toList(),
                entity.getOutstandingFeatures().stream().toList(),
                entity.getPosition(),
                entity.getTotalMember(),
                entity.getBeginDate().toString(),
                entity.getEndDate().toString(),
                entity.getCreatedAt().toString(),
                entity.getUpdatedAt().toString(),
                entity.getIsFeatured(),
                entity.getMe().getMeId()
        );
    }

    public Project toEntity(ProjectRequest request) {
        Project entity = new Project();

        LocalDate createdAt = LocalDate.now();
        entity.setCreatedAt(createdAt);

        entity.setProjectName(request.getProjectName());
        entity.setDescription(request.getDescription());
        entity.setTechStack(request.getTechStack());
        entity.setOutstandingFeatures(request.getOutstandingFeatures() != null ? request.getOutstandingFeatures() : new java.util.ArrayList<>());
        entity.setKeyOutstandingFeatures(request.getKeyOutstandingFeatures() != null ? request.getKeyOutstandingFeatures() : new java.util.ArrayList<>());
        entity.setPosition(request.getPosition());
        entity.setTotalMember(request.getTotalMember());
        entity.setBeginDate(request.getBeginDate() != null
                ? java.time.LocalDate.parse(request.getBeginDate())
                : null);
        entity.setEndDate(request.getEndDate() != null
                ? java.time.LocalDate.parse(request.getEndDate())
                : null);
        entity.setIsFeatured(request.getIsFeatured());

        return entity;
    }

    public void update(Project entity, ProjectRequest request) {

        LocalDate updatedAt = LocalDate.now();
        entity.setUpdatedAt(updatedAt);

        entity.setProjectName(request.getProjectName());
        entity.setDescription(request.getDescription());
        entity.setTechStack(request.getTechStack());
        entity.setOutstandingFeatures(request.getOutstandingFeatures() != null ? request.getOutstandingFeatures() : new java.util.ArrayList<>());
        entity.setKeyOutstandingFeatures(request.getKeyOutstandingFeatures() != null ? request.getKeyOutstandingFeatures() : new java.util.ArrayList<>());
        entity.setPosition(request.getPosition());
        entity.setTotalMember(request.getTotalMember());
        entity.setBeginDate(request.getBeginDate() != null ? java.time.LocalDate.parse(request.getBeginDate()) : null);
        entity.setEndDate(request.getEndDate() != null ? java.time.LocalDate.parse(request.getEndDate()) : null);
        entity.setIsFeatured(request.getIsFeatured());
    }
}
