package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.request.LanguageRequest;
import com.hintran.portfolio_backend.dto.response.LanguageResponse;
import com.hintran.portfolio_backend.service.interfaces.LanguageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("hintran/api/languages")
@RestController
@CrossOrigin
@RequiredArgsConstructor
public class LanguageController {

    private final LanguageService service;

    // [GET] /hintran/api/languages
    @GetMapping
    public List<LanguageResponse> getAll() {
        return service.getAll();
    }

    // [GET] /hintran/api/languages/{languageId}
    @GetMapping("/{languageId}")
    public LanguageResponse getLanguageById(@PathVariable Integer languageId) {
        return service.getLanguageById(languageId);
    }

    // [POST] /hintran/api/languages
    @PostMapping
    public LanguageResponse create(@RequestBody LanguageRequest request) {
        return service.create(request);
    }

    // [PUT] /hintran/api/languages/{languageId}
    @PutMapping("/{languageId}")
    public LanguageResponse update(@PathVariable Integer languageId, String languageName) {
        return service.update(languageId, languageName);
    }

    // [DELETE] /hintran/api/languages/{languageId}
    @DeleteMapping("/{languageId}")
    public Boolean delete(@PathVariable Integer languageId) {
        return service.delete(languageId);
    }
}
