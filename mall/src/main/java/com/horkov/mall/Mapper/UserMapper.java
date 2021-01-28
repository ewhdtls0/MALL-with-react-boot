package com.horkov.mall.Mapper;

import org.apache.ibatis.annotations.Mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

import com.horkov.mall.Model.User;

@Mapper
public interface UserMapper {
    @Select("SELECT * FROM user WHERE userID=#{userID}")
    User getUser(@Param("userID") String userID);

    @Select("SELECT * FROM user")
    List<User> getUserList();

    @Insert("INSERT INTO user(userID, userPW, userName, userSex, userEmail, userPH) VALUES(#{userID}, MD5(#{userPW}), #{userName}, #{userSex}, #{userEmail}, #{userPH})")
    int insertUser(@Param("userID") String userID, @Param("userPW") String userPW, @Param("userName") String userName, @Param("userSex") String userSex, @Param("userEmail") String userEmail, @Param("userPH") String userPH);

    @Update("UPDATE user SET userPW=#{userPW} WHERE userID=#{userID}")
    int updateUserPW(@Param("userID") String userID, @Param("userPW") String userPW);

    @Update("UPDATE user SET userName=#{userName}, userSex=#{userSex}, userEmail=#{userEmail}, userPH=#{userPH} WHERE userID=#{userID}")
    int updateUserInfo(@Param("userID") String userID, @Param("userName") String userName, @Param("userSex") String userSex, @Param("userEmail") String userEmail, @Param("userPH") String userPH);

    @Delete("DELETE FROM user WHERE userID=#{userID}")
    int deleteUser(@Param("userID") String userID);

}
