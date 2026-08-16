package com.hintran.portfolio_backend.repository;

import com.hintran.portfolio_backend.model.Me;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeRepository extends JpaRepository<Me, Integer> {
}
