package com.horkov.mall.dao;

import com.horkov.mall.dto.UserDTO;

import java.util.List;

public interface UserDAO {
    List<UserDTO> selectUsers() throws Exception;
    public void insertUsers(UserDTO abc) throws Exception;
}