package com.hintran.portfolio_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "repo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Repo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "repo_id", nullable = false)
    private Integer repoId;

    @NotBlank(message = "Repo name is required")
    @Column(name = "repo_name", nullable = false)
    private String repoUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;
}
