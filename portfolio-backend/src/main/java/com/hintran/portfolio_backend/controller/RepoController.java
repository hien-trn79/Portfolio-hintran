package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.request.RepoRequest;
import com.hintran.portfolio_backend.dto.response.RepoResponse;
import com.hintran.portfolio_backend.service.interfaces.RepoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hintran/api/repos")
@CrossOrigin
@RequiredArgsConstructor
public class RepoController {

    private final RepoService service;

    // [GET] /api/repos
    @GetMapping
    public List<RepoResponse> getAll() {
        return service.getAll();
    }

    // [GET] /api/repos/{repoId}
    @GetMapping("/{repoId}")
    public RepoResponse getById(@PathVariable Integer repoId) {
        return service.getById(repoId);
    }

    // [POST] /api/repos
    @PostMapping
    public RepoResponse create(@RequestBody RepoRequest repoRequest) {
        return service.create(repoRequest);
    }

    // [PUT] /api/repos/{repoId}
    @PutMapping("/{repoId}")
    public RepoResponse update(@PathVariable Integer repoId, @RequestBody RepoRequest repoRequest) {
        return service.update(repoId, repoRequest);
    }

    // [DELETE] /api/repos/{repoId}
    @DeleteMapping("/{repoId}")
    public Boolean delete(@PathVariable Integer repoId) {
        return service.delete(repoId);
    }
}
