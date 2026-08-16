package com.hintran.portfolio_backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Portfolio Website API")
                        .version("1.0.0")
                        .description("RESTful API documentation for Personal Portfolio Backend")
                        .contact(new Contact()
                                .name("hinTran")
                                .email("thuyhien2005lv@gmail.com")
                                .url("https://github.com/hien-trn79"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://springdoc.org")));
    }
}