package com.horkov.mall.Controller;

import java.util.List;

import com.horkov.mall.Mapper.UserMapper;
import com.horkov.mall.Model.User;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    private UserMapper mapper;

    public UserController(UserMapper mapper){
        this.mapper = mapper;
    }

    @GetMapping("/user/{userID}")
    public User getUser(@PathVariable("userID") String userID){
        return mapper.getUser(userID);
    }

    @GetMapping("/user/all")
    public List<User> getUserList(){
        return mapper.getUserList();
    }

    @PostMapping("/user/{userID}")
    public void putUser(@PathVariable("userID") String userID, @RequestParam("userPW") String userPW, @RequestParam("userName") String userName, @RequestParam("userSex") String userSex, @RequestParam("userEmail") String userEmail, @RequestParam("userPH") String userPH){
        mapper.insertUser(userID, userPW, userName, userSex, userEmail, userPH);
    }

    @PutMapping("/user/{userID}")
    public void changeUserPW(@PathVariable("userID") String userID, @RequestParam("userPW") String userPW){
        mapper.updateUserPW(userID, userPW);
    }

    @PostMapping("/user/hi/{userID}")
    public void postUser(@PathVariable("userID") String userID, @RequestParam("userName") String userName, @RequestParam("userSex") String userSex, @RequestParam("userEmail") String userEmail, @RequestParam("userPH") String userPH){
        mapper.updateUserInfo(userID, userName, userSex, userEmail, userPH);
    }

    @DeleteMapping("/user/{userID}")
    public void deleteUser(@PathVariable("userID") String userID){
        mapper.deleteUser(userID);
    }

}
