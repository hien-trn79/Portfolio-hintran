package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.dto.request.SkillTypeRequest;
import com.hintran.portfolio_backend.dto.response.SkillTypeResponse;
import com.hintran.portfolio_backend.mapper.SkillTypeMapper;
import com.hintran.portfolio_backend.model.SkillType;
import com.hintran.portfolio_backend.repository.SkillTypeRepository;
import com.hintran.portfolio_backend.service.interfaces.SkillTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillTypeServiceImpl implements SkillTypeService {

    private final SkillTypeRepository repository;
    private final SkillTypeMapper mapper;

    public SkillTypeResponse create(String skillTypeName) {
        SkillType entity = mapper.toEntity(skillTypeName);

        return mapper.toResponse(repository.save(entity));
    }

    public SkillTypeResponse getById(Integer skillTypeId) {
        SkillType entity = repository.findById(skillTypeId)
                .orElseThrow(() -> new RuntimeException("SkillType not found with id: " + skillTypeId));
        return mapper.toResponse(entity);
    }

    public SkillTypeResponse update(Integer skillTypeId, String skillTypeName) {
        SkillType entity = repository.findById(skillTypeId)
                .orElseThrow(() -> new RuntimeException("SkillType not found with id: " + skillTypeId));
        return mapper.update(entity, skillTypeName);
    }

    public Boolean delete(Integer skillTypeId) {
        SkillType entity = repository.findById(skillTypeId)
                .orElseThrow(() -> new RuntimeException("SkillType not found with id: " + skillTypeId));
        repository.delete(entity);
        return true;
    }

    public List<SkillTypeResponse> getAll() {
        List<SkillType> entities = repository.findAll();
        return entities.stream()
                .map(mapper::toResponse)
                .toList();
    }
}
