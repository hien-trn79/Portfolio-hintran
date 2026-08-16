package com.hintran.portfolio_backend.dto.request;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

import java.time.LocalDate;

@Data
public class MeRequest {
    @NotBlank(message = "Họ và tên không được để trống")
    @Column(name = "full_name")
    private String fullName;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @NotBlank(message = "Email không được để trống")
    @Pattern(
            regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$",
            message = "Email không đúng định dạng chuẩn (ví dụ: example@domain.com)"
    )
    @Column(name = "email", nullable = false)
    private String email;

    @NotBlank(message = "Địa chỉ không được để trống")
    @Column(name = "address")
    private String address;

    @NotBlank(message = "Số điện thoại không được để trống")
    @Pattern(
            regexp = "^(0|\\+84)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$",
            message = "Số điện thoại không đúng định dạng đầu số Việt Nam (10 chữ số)"
    )
    @Column(name = "phone_number")
    private String phoneNumber;

    @NotBlank(message = "LinkedIn không được để trống")
    @Column(name = "linkedin")
    private String linkedin;

    @NotBlank(message = "Mô tả không được để trống")
    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @NotBlank(message = "Vị trí không được để trống")
    @Column(name = "position")
    private String position;
}
