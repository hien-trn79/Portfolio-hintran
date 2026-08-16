package com.hintran.portfolio_backend.service.interfaces;

import com.hintran.portfolio_backend.dto.request.ContactMessageRequest;
import com.hintran.portfolio_backend.dto.response.ContactMessageResponse;

import java.util.List;

public interface ContactMessageService {

    ContactMessageResponse getById(Integer contactMessageId);

    List<ContactMessageResponse> getAll();

    ContactMessageResponse create(ContactMessageRequest request);


    Boolean delete(Integer contactMessageId);
}
