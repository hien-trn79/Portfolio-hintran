package com.hintran.portfolio_backend.repository;

import com.hintran.portfolio_backend.model.Repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RepoRepository extends JpaRepository<Repo, Integer> {

    Optional<Repo> findByProjectProjectId(Integer projectId);
}
