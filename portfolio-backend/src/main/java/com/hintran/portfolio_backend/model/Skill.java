package com.hintran.portfolio_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "skills")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Skill {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    @Column(name = "skill_id")
    private Integer skillId;

    @NotBlank(message = "Skill name is required")
    @Column(name = "skill_name", nullable = false)
    private String skillName;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "skill_type_id", referencedColumnName = "skill_type_id")
    private SkillType type;

    @ManyToOne
    @JoinColumn(name = "me_id", referencedColumnName = "me_id")
    private Me me;
}
