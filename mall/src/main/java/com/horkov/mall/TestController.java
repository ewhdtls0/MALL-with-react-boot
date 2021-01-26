package com.horkov.mall;

import java.util.HashMap;
import java.util.List;

import com.horkov.mall.dao.UserDAO;
import com.horkov.mall.dto.UserDTO;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@MapperScan(basePackages = "com.horkov.mall.dao")
public class TestController {

    @Autowired
    private UserDAO userDAO;

    @GetMapping("/api/test")
    public String test(){
        return "하이용";
    }

    @RequestMapping("/users")
    public List<UserDTO> users() throws Exception{
        final List<UserDTO> userList = userDAO.selectUsers();
        return userList;
    }


}
