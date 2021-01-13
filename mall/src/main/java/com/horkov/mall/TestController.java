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

    @RequestMapping("/users")
    public List<UserDTO> users() throws Exception{
        final List<UserDTO> userList = userDAO.selectUsers();
        return userList;
    }

    @GetMapping("/abc")
    public void testabc() throws Exception {
        String title2 = "제목3";
        String content2 = "내용3";
        String writer2 = "글쓴이3";
        UserDTO aaa = new UserDTO(title2, content2, writer2);
        userDAO.insertUsers(aaa);
    }

    @GetMapping("/api/test")
    public String test(){
        return "8080포트로 접속하였으면 연동이 된 것";
    }

}