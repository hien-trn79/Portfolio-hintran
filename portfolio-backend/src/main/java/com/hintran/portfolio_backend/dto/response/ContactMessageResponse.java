package com.hintran.portfolio_backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ContactMessageResponse {
    private Integer contactMessageId;
    private String senderName;
    private String senderEmail;
    private String subject;
    private String message;
    private String createdAt;
    private Boolean isRead;
}
