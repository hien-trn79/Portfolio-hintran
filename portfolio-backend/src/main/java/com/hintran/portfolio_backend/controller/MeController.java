package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.request.MeRequest;
import com.hintran.portfolio_backend.dto.response.MeResponse;
import com.hintran.portfolio_backend.service.interfaces.MeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hintran/api/me")
@CrossOrigin
@RequiredArgsConstructor
public class MeController {

    private final MeService service;

    // [GET] /api/me
    @GetMapping
    public List<MeResponse> getMe() {
        return service.getAll();
    }

    // [GET] /api/me/{meId}
    @GetMapping("/{meId}")
    public MeResponse getMeById(@PathVariable Integer meId) {
        return service.getById(meId);
    }
    // [POST] /api/me
    @PostMapping
    public MeResponse createMe(@RequestBody MeRequest meRequest) {
        return service.create(meRequest);
    }
    // [PUT] /api/me
    @PutMapping
    public MeResponse updateMe(@RequestBody MeRequest meRequest) {
        return service.updateMe(meRequest);
    }
}
