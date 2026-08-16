package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.request.CvRequest;
import com.hintran.portfolio_backend.model.Cv;
import com.hintran.portfolio_backend.service.interfaces.CvService;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/hintran/api/cvs")
@CrossOrigin
@RequiredArgsConstructor
public class CvController {
    private final CvService service;

    // [GET] /hintran/api/cvs
    @GetMapping
    public List<Cv> getAll() {
        return service.getAll();
    }

    // [GET] /hintran/api/cvs/{id}
    @GetMapping("/{id}")
    public Cv getById(Integer id) {
        return service.getById(id);
    }

    // [POST] /hintran/api/cvs/upload
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Cv uploadCv(
            @RequestParam MultipartFile file,
            @RequestParam String cvName
            ) {
        return service.uploadCv(file, cvName);
    }
}
