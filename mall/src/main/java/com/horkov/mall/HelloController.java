package com.horkov.mall;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Date;
@RestController
public class HelloController {
    @GetMapping("/api/test")
    public String hello(){
        return "하이요";
    }
}