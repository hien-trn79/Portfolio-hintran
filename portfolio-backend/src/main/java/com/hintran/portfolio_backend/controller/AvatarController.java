package com.hintran.portfolio_backend.controller;

import com.hintran.portfolio_backend.dto.response.AvatarResponse;
import com.hintran.portfolio_backend.service.interfaces.AvatarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/hintran/api/avatar")
@CrossOrigin
@RequiredArgsConstructor
public class AvatarController {

    private final AvatarService service;

    // [GET] /hintran/api/avatar
    @GetMapping
    public List<AvatarResponse> getAll() {
        return service.getAll();
    }

    // [POST] /hintran/api/avatar/upload
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public AvatarResponse upload(
            @RequestParam("avatarName") String avatarName,
            @RequestParam("file") MultipartFile file
    ) {
        return service.uploadAvatar(avatarName, file);
    }
}
