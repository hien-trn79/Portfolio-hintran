package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.dto.request.LanguageRequest;
import com.hintran.portfolio_backend.dto.response.LanguageResponse;
import com.hintran.portfolio_backend.mapper.LanguageMapper;
import com.hintran.portfolio_backend.model.Language;
import com.hintran.portfolio_backend.repository.LanguageRepository;
import com.hintran.portfolio_backend.service.interfaces.LanguageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LanguageServiceImpl implements LanguageService {

    private final LanguageRepository repository;
    private final LanguageMapper mapper;

    public List<LanguageResponse> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

    public LanguageResponse getLanguageById(Integer languageId) {
        return repository.findById(languageId)
                .map(mapper::toResponse)
                .orElse(null);
    }

    public LanguageResponse create(LanguageRequest request) {
        return mapper.toResponse(repository.save(mapper.toEntity(request)));
    }

    public LanguageResponse update(Integer languageId, String languageName) {
        Language entity = repository.findById(languageId)
                .orElse(null);
        if(entity != null) {
            mapper.update(entity, languageName);
            return mapper.toResponse(repository.save(entity));
        }
        return null;
    }

    public Boolean delete(Integer languageId) {
        return repository.findById(languageId)
                .map(entity -> {
                    repository.delete(entity);
                    return true;
                })
                .orElse(false);
    }
}
