package com.hintran.portfolio_backend.service.implement;

import com.hintran.portfolio_backend.dto.request.MeRequest;
import com.hintran.portfolio_backend.dto.response.MeResponse;
import com.hintran.portfolio_backend.mapper.MeMapper;
import com.hintran.portfolio_backend.model.Me;
import com.hintran.portfolio_backend.repository.MeRepository;
import com.hintran.portfolio_backend.service.interfaces.MeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MeServiceImpl implements MeService {

    private final MeRepository repository;
    private final MeMapper mapper;

    public List<MeResponse> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

    public MeResponse getById(Integer meId) {
        Me me = repository.findById(meId).orElseThrow(() -> new RuntimeException("Me not found"));
        return mapper.toResponse(me);
    }

    @Override
    public MeResponse getMe() {
        Me me = repository.findById(1).orElseThrow(() -> new RuntimeException("Me not found"));
        return mapper.toResponse(me);
    }

    @Override
    public MeResponse updateMe(MeRequest meRequest) {
        Me me = repository.findById(1).orElseThrow(() -> new RuntimeException("Me not found"));
        mapper.update(me, meRequest);

        return mapper.toResponse(repository.save(me));
    }

    public MeResponse create(MeRequest request) {
        Me me = mapper.toEntity(request);
        return mapper.toResponse(repository.save(me));
    }

}
