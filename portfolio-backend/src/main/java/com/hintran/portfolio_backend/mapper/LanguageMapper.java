package com.hintran.portfolio_backend.mapper;

import com.hintran.portfolio_backend.dto.request.LanguageRequest;
import com.hintran.portfolio_backend.dto.response.LanguageResponse;
import com.hintran.portfolio_backend.model.Language;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class LanguageMapper {

    public LanguageResponse toResponse(Language entity) {
        return new LanguageResponse(
                entity.getLanguageId(),
                entity.getLanguageName()
        );
    }

    public Language toEntity(LanguageRequest request) {
        Language entity = new Language();
        entity.setLanguageName(request.getLanguageName());
        return entity;
    }

    public void update(Language entity, String languageName) {
        entity.setLanguageName(languageName);
    }
}
