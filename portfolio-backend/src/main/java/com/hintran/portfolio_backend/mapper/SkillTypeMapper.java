package com.hintran.portfolio_backend.mapper;

import com.hintran.portfolio_backend.dto.request.SkillTypeRequest;
import com.hintran.portfolio_backend.dto.response.SkillTypeResponse;
import com.hintran.portfolio_backend.model.SkillType;
import org.springframework.stereotype.Component;

@Component
public class SkillTypeMapper {

    public SkillTypeResponse toResponse(SkillType entity) {
        return new SkillTypeResponse(
                entity.getSkillTypeId(),
                entity.getSkillTypeName()
        );
    }

    public SkillType toEntity(String skillTypeName) {
        SkillType entity = new SkillType();
        entity.setSkillTypeName(skillTypeName);

        return entity;
    }

    public SkillTypeResponse update(SkillType entity, String skillTypeName) {
        entity.setSkillTypeName(skillTypeName);
        return toResponse(entity);
    }
}
