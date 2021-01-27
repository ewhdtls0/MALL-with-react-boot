package com.horkov.mall.Model;

import java.util.Date;

public class Item {
    
    private String id;
    private String title;
    private String content;
    private Date created;
    private int is_deleted;

    public Item(String id, String title, String content)
    {
        super();
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public String getId(){
        return id;
    }

    public void setId(String id){
        this.id = id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getContent(){
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }

    public Date getCreated(){
        return created;
    }

    public void setCreated(Date created){
        this.created = created;
    }

    public int getDeleted(){
        return is_deleted;
    }

    public void setDeleted(int is_deleted){
        this.is_deleted = is_deleted;
    }




}
