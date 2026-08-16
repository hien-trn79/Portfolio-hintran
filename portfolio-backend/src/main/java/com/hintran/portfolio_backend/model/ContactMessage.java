package com.hintran.portfolio_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "contact_messages")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContactMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_message_id", nullable = false)
    private Integer contactMessageId;

    @Column(name = "sender_name", nullable = false)
    private String senderName;

    @Column(name = "sender_email", nullable = false)
    private String senderEmail;

    @NotBlank(message = "Subject is required")
    @Column(name = "subject", nullable = false)
    private String subject;

    @NotBlank(message = "Message is required")
    @Column(name = "message", nullable = false)
    private String message;

    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;

    @Column(name = "is_read", nullable = false)
    private Boolean isRead;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "me_id", nullable = false)
    private Me me;
}
