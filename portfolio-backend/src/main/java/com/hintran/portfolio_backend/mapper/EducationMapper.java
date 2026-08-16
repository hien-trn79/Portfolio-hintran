package com.hintran.portfolio_backend.mapper;

import com.hintran.portfolio_backend.dto.request.EducationRequest;
import com.hintran.portfolio_backend.dto.response.EducationResponse;
import com.hintran.portfolio_backend.model.Education;
import com.hintran.portfolio_backend.model.Me;
import org.springframework.stereotype.Component;

@Component
public class EducationMapper {

    public EducationResponse toResponse(Education entity) {
        return new EducationResponse(
                entity.getEducationId(),
                entity.getSchoolName(),
                entity.getMajor(),
                entity.getCurrentGPA(),
                entity.getMaxGPA(),
                entity.getBeginDate().toString(),
                entity.getEndDate().toString(),
                entity.getIsDeleted()
        );
    }

    public Education toEntity(EducationRequest request, Me me) {

        Education entity = new Education();
        entity.setSchoolName(request.getSchoolName());
        entity.setMajor(request.getMajor());
        entity.setCurrentGPA(request.getCurrentGPA());
        entity.setMaxGPA(request.getMaxGPA());
        entity.setBeginDate(java.time.LocalDate.parse(request.getBeginDate()));
        entity.setEndDate(java.time.LocalDate.parse(request.getEndDate()));
        entity.setMe(me);

        return entity;
    }

    public EducationResponse update(Education entity, EducationRequest request) {
        entity.setSchoolName(request.getSchoolName());
        entity.setMajor(request.getMajor());
        entity.setCurrentGPA(request.getCurrentGPA());
        entity.setMaxGPA(request.getMaxGPA());
        entity.setBeginDate(java.time.LocalDate.parse(request.getBeginDate()));
        entity.setEndDate(java.time.LocalDate.parse(request.getEndDate()));
        entity.setIsDeleted(request.getIsDeleted());

        return new EducationResponse(
                entity.getEducationId(),
                entity.getSchoolName(),
                entity.getMajor(),
                entity.getCurrentGPA(),
                entity.getMaxGPA(),
                entity.getBeginDate().toString(),
                entity.getEndDate().toString(),
                entity.getIsDeleted()
        );
    }
}
