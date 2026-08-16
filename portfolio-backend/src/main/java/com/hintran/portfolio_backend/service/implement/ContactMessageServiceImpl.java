package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.dto.request.ContactMessageRequest;
import com.hintran.portfolio_backend.dto.response.ContactMessageResponse;
import com.hintran.portfolio_backend.mapper.ContactMessageMapper;
import com.hintran.portfolio_backend.model.ContactMessage;
import com.hintran.portfolio_backend.model.Me;
import com.hintran.portfolio_backend.repository.ContactMessageRepository;
import com.hintran.portfolio_backend.repository.MeRepository;
import com.hintran.portfolio_backend.service.interfaces.ContactMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactMessageServiceImpl implements ContactMessageService {

    private final ContactMessageRepository repository;
    private final ContactMessageMapper mapper;

    private final MeRepository meRepository;

    public List<ContactMessageResponse> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

    public ContactMessageResponse getById(Integer contactMessageId) {
        return repository.findById(contactMessageId)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("Contact message not found"));
    }

    public ContactMessageResponse create(ContactMessageRequest request) {
        Me me = meRepository.findById(request.getMeId())
                .orElseThrow(() -> new RuntimeException("Me not found"));

        ContactMessage entity = mapper.toEntity(request, me);

        return mapper.toResponse(repository.save(entity));
    }

    public Boolean delete(Integer contactMessageId) {
        ContactMessage entity = repository.findById(contactMessageId)
                .orElseThrow(() -> new RuntimeException("Contact message not found"));

        repository.delete(entity);
        return true;
    }
}
