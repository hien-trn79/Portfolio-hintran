package com.hintran.portfolio_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "skill_types")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SkillType {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    @Column(name = "skill_type_id")
    private Integer skillTypeId;

    @NotBlank(message = "Skill type name is required")
    @Column(name = "skill_type_name", nullable = false)
    private String skillTypeName;
}
