package com.hintran.portfolio_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

@Entity
@Table(name = "educations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "education_id", nullable = false)
    private Integer educationId;

    @NotBlank(message = "School name is required")
    @Column(name = "school_name", nullable = false)
    private String schoolName;

    @Column(name = "major", nullable = false)
    private String major;

    @Column(name = "current_gpa", nullable = false)
    @Min(value = 0, message = "Current GPA must be greater than or equal to 0")
    @Max(value = 4, message = "Current GPA must be less than or equal to 4")
    private Float currentGPA;

    @Column(name = "max_gpa", nullable = false)
    @Min(value = 0, message = "Max GPA must be greater than or equal to 0")
    @Max(value = 4, message = "Max GPA must be less than or equal to 4")
    private Float maxGPA;

    @Column(name = "begin_date", nullable = false)
    private LocalDate beginDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    private Boolean isDeleted = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "me_id", nullable = false)
    private Me me;
}
