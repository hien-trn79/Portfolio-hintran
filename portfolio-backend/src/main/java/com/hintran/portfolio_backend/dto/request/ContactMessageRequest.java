package com.hintran.portfolio_backend.dto.request;

import lombok.Data;

@Data
public class ContactMessageRequest {
    private String senderName;
    private String senderEmail;
    private String subject;
    private String message;
    private Boolean isRead;

    private Integer meId;
}
