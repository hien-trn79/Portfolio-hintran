package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.request.EducationRequest;
import com.hintran.portfolio_backend.dto.response.EducationResponse;
import com.hintran.portfolio_backend.service.interfaces.EducationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hintran/api/educations")
@CrossOrigin
@RequiredArgsConstructor
public class EducationController {

    private final EducationService service;

    // [GET] /hintran/api/educations
    @GetMapping
    public List<EducationResponse> getAll() {
        return service.getAll();
    }

    // [GET] /hintran/api/educations/{id}
    @GetMapping("/{id}")
    public EducationResponse getById(@PathVariable Integer id) {
        return service.getById(id);
    }

    // [POST] /hintran/api/educations
    @PostMapping
    public EducationResponse create(@RequestBody EducationRequest request) {
        return service.create(request);
    }

    // [PUT] /hintran/api/educations/{id}
    @PutMapping("/{id}")
    public EducationResponse update(@PathVariable Integer id, @RequestBody EducationRequest request) {
        return service.update(id, request);
    }

    // [DELETE] /hintran/api/educations/{id}
    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable Integer id) {
        return service.delete(id);
    }
}
