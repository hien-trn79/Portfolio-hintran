package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.request.ProjectRequest;
import com.hintran.portfolio_backend.dto.response.ProjectResponse;
import com.hintran.portfolio_backend.service.interfaces.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hintran/api/projects")
@CrossOrigin
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService service;

    @GetMapping
    public List<ProjectResponse> getAll() {
        return service.getAll();
    }

    @GetMapping("/{projectId}")
    public ProjectResponse getById(@PathVariable Integer projectId) {
            return service.getById(projectId);
    }

    @PostMapping
    public ProjectResponse create(@RequestBody ProjectRequest request) {
        return service.create(request);
    }

    @PutMapping("/{projectId}")
    public ProjectResponse update(@PathVariable Integer projectId, @RequestBody ProjectRequest request) {
        return service.update(projectId, request);
    }

    @DeleteMapping("/{projectId}")
    public Boolean delete(@PathVariable Integer projectId) {
        return service.delete(projectId);
    }
}
