package com.hintran.portfolio_backend.mapper;

import com.hintran.portfolio_backend.dto.request.SkillRequest;
import com.hintran.portfolio_backend.dto.response.SkillResponse;
import com.hintran.portfolio_backend.model.Me;
import com.hintran.portfolio_backend.model.Skill;
import com.hintran.portfolio_backend.model.SkillType;
import org.springframework.stereotype.Component;

@Component
public class SkillMapper {

    public SkillResponse toResponse(Skill entity) {
        return new SkillResponse(
                entity.getSkillId(),
                entity.getSkillName(),
                entity.getDescription(),
                entity.getType().getSkillTypeId(),
                entity.getMe().getMeId()
        );
    }

    public Skill toEntity(SkillRequest request, SkillType type, Me me) {
        Skill entity = new Skill();
        entity.setSkillName(request.getSkillName());
        entity.setDescription(request.getDescription());
        entity.setType(type);
        entity.setMe(me);
        return entity;
    }

    public SkillResponse update(Skill entity, SkillRequest request) {
        entity.setSkillName(request.getSkillName());
        entity.setDescription(request.getDescription());
        return new SkillResponse(
                entity.getSkillId(),
                entity.getSkillName(),
                entity.getDescription(),
                entity.getType().getSkillTypeId(),
                entity.getMe().getMeId()
        );
    }
}
