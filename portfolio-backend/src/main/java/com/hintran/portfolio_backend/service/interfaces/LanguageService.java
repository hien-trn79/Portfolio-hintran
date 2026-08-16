package com.hintran.portfolio_backend.service.interfaces;

import com.hintran.portfolio_backend.dto.request.LanguageRequest;
import com.hintran.portfolio_backend.dto.response.LanguageResponse;

import java.util.List;

public interface LanguageService {

    List<LanguageResponse> getAll();

    LanguageResponse getLanguageById(Integer languageId);

    LanguageResponse create(LanguageRequest request);

    LanguageResponse update(Integer languageId, String languageName);

    Boolean delete(Integer languageId);
}
