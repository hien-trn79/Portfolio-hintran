package com.hintran.portfolio_backend.mapper;

import com.hintran.portfolio_backend.dto.request.MeRequest;
import com.hintran.portfolio_backend.dto.response.MeResponse;
import com.hintran.portfolio_backend.model.Me;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.security.PublicKey;

@Component
public class MeMapper {

    public MeResponse toResponse(Me entity) {

        return new MeResponse(
                entity.getMeId(),
                entity.getFullName(),
                entity.getBirthDate().toString(),
                entity.getEmail(),
                entity.getAddress(),
                entity.getPhoneNumber(),
                entity.getLinkedin(),
                entity.getDescription(),
                entity.getPosition()
        );
    }

    public MeResponse update(Me entity, MeRequest request) {
        entity.setFullName(request.getFullName());
        entity.setBirthDate(request.getBirthDate());
        entity.setEmail(request.getEmail());
        entity.setAddress(request.getAddress());
        entity.setPhoneNumber(request.getPhoneNumber());
        entity.setLinkedin(request.getLinkedin());
        entity.setDescription(request.getDescription());
        entity.setPosition(request.getPosition());

        return toResponse(entity);
    }

    public Me toEntity(MeRequest request) {
        Me entity = new Me();
        entity.setFullName(request.getFullName());
        entity.setBirthDate(request.getBirthDate());
        entity.setEmail(request.getEmail());
        entity.setAddress(request.getAddress());
        entity.setPhoneNumber(request.getPhoneNumber());
        entity.setLinkedin(request.getLinkedin());
        entity.setDescription(request.getDescription());
        entity.setPosition(request.getPosition());

        return entity;
    }
}
