package com.hintran.portfolio_backend.service.interfaces;

import com.hintran.portfolio_backend.dto.request.SkillRequest;
import com.hintran.portfolio_backend.dto.response.SkillResponse;

import java.util.List;

public interface SkillService {
    SkillResponse create(SkillRequest request);

    SkillResponse update(Integer skillId, SkillRequest request);

    List<SkillResponse> getAll();

    SkillResponse getById(Integer skillId);

    Boolean delete(Integer skillId);
}
