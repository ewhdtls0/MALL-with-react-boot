package com.horkov.mall;

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

    @RequestMapping("/users") // select * from user 확인
    public List<UserDTO> users() throws Exception{
        final List<UserDTO> userList = userDAO.selectUsers();
        return userList;
    }

    @PostMapping("/check")
    @ResponseBody // 별도의 페이지를 보여주지 않음
    public void check(@ModelAttribute UserDTO q) throws Exception {
        UserDTO aaa = new UserDTO(q.getTitle(), q.getContent(), q.getWriter());
        userDAO.insertUsers(aaa);
    }

    @GetMapping("/api/test")
    public String test(){
        return "8080포트로 접속하였으면 연동이 된 것";
    }

}