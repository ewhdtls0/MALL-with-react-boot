package com.horkov.mall.Model;

import java.util.Date;

public class User {
    
    private String userID;
    private String userPW;
    private String userName;
    private String userSex;
    private String userEmail;
    private String userPH;
    private Date created;
    private Date modified;

    public String getuserID(){
        return userID;
    }

    public void setuserID(String userID){
        this.userID = userID;
    }

    public String getuserPW(){
        return userPW;
    }

    public void setuserPW(String userPW){
        this.userPW = userPW;
    }

    public String getuserName(){
        return userName;
    }

    public void setuserName(String userName){
        this.userName = userName;
    }

    public String getuserSex(){
        return userSex;
    }

    public void setuserSex(String userSex){
        this.userSex = userSex;
    }

    public String getuserEmail(){
        return userEmail;
    }

    public void setuserEmail(String userEmail){
        this.userEmail = userEmail;
    }

    public String getuserPH(){
        return userPH;
    }

    public void setuserPH(String userPH){
        this.userPH = userPH;
    }

    public Date getCreated(){
        return created;
    }

    public void setCreated(Date created){
        this.created = created;
    }

    public Date getModified(){
        return modified;
    }

    public void setModified(Date modified){
        this.modified = modified;
    }

    public int getDeleted(){
        return is_deleted;
    }

    public void setDeleted(int is_deleted){
        this.is_deleted = is_deleted;
    }

}
