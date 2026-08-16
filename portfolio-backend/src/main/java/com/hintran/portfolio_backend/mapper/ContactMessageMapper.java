package com.hintran.portfolio_backend.mapper;

import com.hintran.portfolio_backend.dto.request.ContactMessageRequest;
import com.hintran.portfolio_backend.dto.response.ContactMessageResponse;
import com.hintran.portfolio_backend.model.ContactMessage;
import com.hintran.portfolio_backend.model.Me;
import io.swagger.v3.oas.models.info.Contact;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class ContactMessageMapper {

    public ContactMessageResponse toResponse(ContactMessage entity) {
        return new ContactMessageResponse(
                entity.getContactMessageId(),
                entity.getSenderName(),
                entity.getSenderEmail(),
                entity.getSubject(),
                entity.getMessage(),
                entity.getCreatedAt().toString(),
                entity.getIsRead()
        );
    }

    public ContactMessage toEntity(ContactMessageRequest request, Me me) {
        LocalDate currentDate = LocalDate.now();

        ContactMessage entity = new ContactMessage();
        entity.setSenderName(request.getSenderName());
        entity.setSenderEmail(request.getSenderEmail());
        entity.setSubject(request.getSubject());
        entity.setMessage(request.getMessage());
        entity.setCreatedAt(currentDate);
        entity.setIsRead(request.getIsRead());
        entity.setMe(me);

        return entity;
    }

    public ContactMessageResponse update(ContactMessage entity, ContactMessageRequest request) {
        entity.setSenderName(request.getSenderName());
        entity.setSenderEmail(request.getSenderEmail());
        entity.setSubject(request.getSubject());
        entity.setMessage(request.getMessage());
        return new ContactMessageResponse(
                entity.getContactMessageId(),
                entity.getSenderName(),
                entity.getSenderEmail(),
                entity.getSubject(),
                entity.getMessage(),
                entity.getCreatedAt().toString(),
                entity.getIsRead()
        );
    }
}
