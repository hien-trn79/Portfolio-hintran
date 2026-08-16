package com.hintran.portfolio_backend.repository;

import com.hintran.portfolio_backend.model.Cv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CvRepository extends JpaRepository<Cv, Integer> {
}
