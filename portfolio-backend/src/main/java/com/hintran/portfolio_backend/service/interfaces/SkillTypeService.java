package com.hintran.portfolio_backend.service.interfaces;

import com.hintran.portfolio_backend.dto.request.SkillTypeRequest;
import com.hintran.portfolio_backend.dto.response.SkillTypeResponse;

import java.util.List;

public interface SkillTypeService {
    SkillTypeResponse create(String skillTypeName);

    SkillTypeResponse getById(Integer skillTypeId);

    SkillTypeResponse update(Integer skillTypeId, String skillTypeName);

    List<SkillTypeResponse> getAll();

    Boolean delete(Integer skillTypeId);
}
