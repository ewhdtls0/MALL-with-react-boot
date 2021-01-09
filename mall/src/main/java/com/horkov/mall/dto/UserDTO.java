package com.horkov.mall.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class UserDTO {
    private String userID;
    private String userPW;
    private String userName;
    private int userSex;
    private String userEmail;
    private String userPH;
    private String created;
    private String modified;
}
