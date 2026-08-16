package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.request.ContactMessageRequest;
import com.hintran.portfolio_backend.dto.response.ContactMessageResponse;
import com.hintran.portfolio_backend.service.interfaces.ContactMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hintran/api/contact-messages")
@CrossOrigin
@RequiredArgsConstructor
public class ContactMessageController {

    private final ContactMessageService service;

    // [GET] /hintran/api/contact-messages
    @GetMapping
    public List<ContactMessageResponse> getAll() {
        return service.getAll();
    }

    // [GET] /hintran/api/contact-messages/{contactMessageId}
    @GetMapping("/{contactMessageId}")
    public ContactMessageResponse getById(@PathVariable Integer contactMessageId) {
        return service.getById(contactMessageId);
    }

    // [POST] /hintran/api/contact-messages
    @PostMapping
    public ContactMessageResponse create(@RequestBody ContactMessageRequest request) {
        return service.create(request);
    }

    // [DELETE] /hintran/api/contact-messages/{contactMessageId}
    @DeleteMapping("/{contactMessageId}")
    public Boolean delete(@PathVariable Integer contactMessageId) {
        return service.delete(contactMessageId);
    }
}
