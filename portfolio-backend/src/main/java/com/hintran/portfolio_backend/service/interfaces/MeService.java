package com.hintran.portfolio_backend.service.interfaces;

import com.hintran.portfolio_backend.dto.request.MeRequest;
import com.hintran.portfolio_backend.dto.response.MeResponse;
import com.hintran.portfolio_backend.model.Me;

import java.util.List;

public interface MeService {
    List<MeResponse> getAll();

    MeResponse getById(Integer meId);

    MeResponse create(MeRequest request);

    MeResponse getMe();

    MeResponse updateMe(MeRequest meRequest);
}
