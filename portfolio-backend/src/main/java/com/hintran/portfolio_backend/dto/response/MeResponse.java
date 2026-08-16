package com.hintran.portfolio_backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MeResponse {

    private Integer id;

    private String fullName;

    private String birthDate;

    private String email;

    private String address;

    private String phoneNumber;

    private String linkedin;

    private String description;

    private String position;
}
