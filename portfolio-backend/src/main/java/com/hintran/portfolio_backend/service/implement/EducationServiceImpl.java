package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.dto.request.EducationRequest;
import com.hintran.portfolio_backend.dto.response.EducationResponse;
import com.hintran.portfolio_backend.mapper.EducationMapper;
import com.hintran.portfolio_backend.model.Education;
import com.hintran.portfolio_backend.model.Me;
import com.hintran.portfolio_backend.repository.EducationRepository;
import com.hintran.portfolio_backend.repository.MeRepository;
import com.hintran.portfolio_backend.service.interfaces.EducationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EducationServiceImpl implements EducationService {
    private final EducationRepository repository;
    private final EducationMapper mapper;

    private final MeRepository meRepository;

    public List<EducationResponse> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

    public EducationResponse getById(Integer id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("Education not found"));
    }

    public EducationResponse create(EducationRequest request) {
        Me me = meRepository.findById(request.getMeId())
                .orElseThrow(() -> new RuntimeException("Me not found"));

        Education education = mapper.toEntity(request, me);
        education.setMe(me);

        return mapper.toResponse(repository.save(education));
    }

    public EducationResponse update(Integer id, EducationRequest request) {
        Education education = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Education not found"));

        return mapper.update(education, request);
    }

    public Boolean delete(Integer id) {
        Education education = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Education not found"));

        education.setIsDeleted(true);

        repository.save(education);

        return true;
    }
}
