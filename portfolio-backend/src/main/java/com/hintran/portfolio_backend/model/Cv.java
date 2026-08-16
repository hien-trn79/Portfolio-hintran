package com.hintran.portfolio_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "cv")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Cv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cv_id", nullable = false)
    private Integer cvId;

    @NotBlank(message = "CV name is required")
    @Column(name = "cv_name", nullable = false)
    private String cvName;

    @NotBlank(message = "CV URL is required")
    @Column(name = "cv_url", nullable = false)
    private String cvUrl;

    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDate updatedAt;
}
