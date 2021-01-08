package com.horkov.mall;

import org.springframework.web.bind.annotation.*;

@RestController
public class TestController {

    @GetMapping("/api/test")
    public String test(){
        return "8080포트로 접속하였으면 연동이 된 것";
    }

}
