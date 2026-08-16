package com.hintran.portfolio_backend.service.interfaces;

import com.hintran.portfolio_backend.dto.request.EducationRequest;
import com.hintran.portfolio_backend.dto.response.EducationResponse;

import java.util.List;

public interface EducationService {

    List<EducationResponse> getAll();

    EducationResponse getById(Integer id);

    EducationResponse create(EducationRequest request);

    EducationResponse update(Integer id, EducationRequest request);

    Boolean delete(Integer id);
}
