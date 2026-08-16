package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.request.SkillRequest;
import com.hintran.portfolio_backend.dto.response.SkillResponse;
import com.hintran.portfolio_backend.service.interfaces.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hintran/api/skills")
@CrossOrigin
@RequiredArgsConstructor
public class SkillController {

    private final SkillService service;

    // [GET] /api/skills
    @GetMapping
    public List<SkillResponse> getAll() {
        return service.getAll();
    }

    // [GET] /api/skills/{skillId}
    @GetMapping("/{skillId}")
    public SkillResponse getById(@PathVariable Integer skillId) {
        return service.getById(skillId);
    }

    // [POST] /api/skills
    @PostMapping
    public SkillResponse create(@RequestBody SkillRequest request) {
        return service.create(request);
    }

    // [PUT] /api/skills/{skillId}
    @PutMapping("/{skillId}")
    public SkillResponse update(@PathVariable Integer skillId,
                                @RequestBody SkillRequest request) {
        return service.update(skillId, request);
    }

    // [DELETE] /api/skills/{skillId}
    @DeleteMapping("/{skillId}")
    public Boolean delete(@PathVariable Integer skillId) {
        return service.delete(skillId);
    }
}
