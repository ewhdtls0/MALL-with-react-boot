package com.horkov.mall;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.web.bind.annotation.*;

@RestController
@MapperScan(basePackages = "com.horkov.mall.dao")
public class TestController {

    @GetMapping("/api/test")
    public String test(){
        return "하이용";
    }

}
