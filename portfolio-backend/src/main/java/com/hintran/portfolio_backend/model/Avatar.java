package com.hintran.portfolio_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "avatar")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Avatar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "avatar_id", nullable = false)
    private Integer avatarId;

    @Column(name = "avatar_name", nullable = false)
    private String avatarName;

    @NotBlank(message = "Avatar URL is required")
    @Column(name = "avatar_url", nullable = false)
    private String avatarUrl;
}
