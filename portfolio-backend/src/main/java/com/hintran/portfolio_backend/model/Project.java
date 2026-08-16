package com.hintran.portfolio_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id", nullable = false)
    private Integer projectId;

    @NotBlank(message = "Project name is required")
    @Column(name = "project_name", nullable = false)
    private String projectName;

    @NotBlank(message = "Description is required")
    @Column(name = "description", nullable = false)
    private String description;

    @NotBlank(message = "Tech stack is required")
    @Column(name = "tech_stack", nullable = false)
    private String techStack;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "key_outstanding_features", columnDefinition = "jsonb")
    private List<String> keyOutstandingFeatures;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "outstanding_features", columnDefinition = "jsonb")
    private List<String> outstandingFeatures;

    @NotBlank(message = "Position is required")
    @Column(name = "position", nullable = false)
    private String position;

    @Column(name = "total_member")
    private Integer totalMember;

    @Column(name = "begin_date")
    private LocalDate beginDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "updated_at")
    private LocalDate updatedAt;

    @Column(name = "is_featured")
    private Boolean isFeatured;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "me_id", referencedColumnName = "me_id")
    private Me me;
}
