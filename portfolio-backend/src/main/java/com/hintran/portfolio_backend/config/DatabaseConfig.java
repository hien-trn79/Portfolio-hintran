package com.hintran.portfolio_backend.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;

import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class DatabaseConfig implements CommandLineRunner {

    private final DataSource dataSource;

    @Value("${server.port}")
    private String port;

    @Value("${server.servlet.context-path:}")
    private String contextPath;

    @Override
    public void run(String... args) {
        try (Connection connection = dataSource.getConnection()) {

            log.info("Kết nối CSDL PostgreSQL thành công!");
            log.info("--> Swagger UI: http://localhost:{}{}/swagger-ui.html", port, contextPath);
            log.info("Database: {}", connection.getMetaData().getDatabaseProductName());

        } catch (Exception e) {
            log.error("Có lỗi khi kết nối CSDL!", e);
        }

        log.info("Link: http://localhost:{}/api", port);
    }
}