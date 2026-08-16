package com.hintran.portfolio_backend.repository;

import com.hintran.portfolio_backend.model.SkillType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillTypeRepository extends JpaRepository<SkillType, Integer> {
}
