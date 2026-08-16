package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.response.SkillTypeResponse;
import com.hintran.portfolio_backend.service.interfaces.SkillTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("hintran/api/skill-types")
@RestController
@RequiredArgsConstructor
@CrossOrigin
public class SkillTypeController {

    private final SkillTypeService service;

    // [GET] /api/skill-types
    @GetMapping
    public List<SkillTypeResponse> getAll() {
        return service.getAll();
    }

    // [GET] /api/skill-types/{id}
    @GetMapping("/{id}")
    public SkillTypeResponse getById(@PathVariable Integer id) {
        return service.getById(id);
    }

    // [POST] /api/skill-types
    @PostMapping
    public SkillTypeResponse create(@RequestBody String skillTypeName) {
        return service.create(skillTypeName);
    }

    // [PUT] /api/skill-types/{id}
    @PutMapping("/{id}")
    public SkillTypeResponse update(
            @PathVariable Integer id,
            @RequestBody String skillTypeName) {
        return service.update(id, skillTypeName);
    }

    // [DELETE] /api/skill-types/{id}
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}
