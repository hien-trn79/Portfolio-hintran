package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.dto.request.SkillRequest;
import com.hintran.portfolio_backend.dto.response.SkillResponse;
import com.hintran.portfolio_backend.mapper.SkillMapper;
import com.hintran.portfolio_backend.model.Me;
import com.hintran.portfolio_backend.model.Skill;
import com.hintran.portfolio_backend.model.SkillType;
import com.hintran.portfolio_backend.repository.MeRepository;
import com.hintran.portfolio_backend.repository.SkillRepository;
import com.hintran.portfolio_backend.repository.SkillTypeRepository;
import com.hintran.portfolio_backend.service.interfaces.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {

    private final SkillRepository repository;
    private final SkillMapper mapper;

    private final SkillTypeRepository skillTypeRepository;
    private final MeRepository meRepository;

    @Override
    public List<SkillResponse> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

    @Override
    public SkillResponse create(SkillRequest request) {
        SkillType skillType = skillTypeRepository.findById(request.getSkillTypeId()).orElse(null);

        Me me = meRepository.findById(request.getMeId()).orElse(null);
        Skill entity = mapper.toEntity(request, skillType, me);

        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public SkillResponse update(Integer skillId, SkillRequest request) {
        Skill entity = repository.findById(skillId).orElse(null);
        if (entity == null) {
            return null;
        }

        return mapper.update(entity, request);
    }

    public SkillResponse getById(Integer skillId) {
        Skill entity = repository.findById(skillId).orElse(null);
        if (entity == null) {
            return null;
        }
        return mapper.toResponse(entity);
    }

    @Override
    public Boolean delete(Integer skillId) {
        Skill entity = repository.findById(skillId).orElse(null);
        if (entity == null) {
            return false;
        }
        repository.delete(entity);
        return true;
    }
}
