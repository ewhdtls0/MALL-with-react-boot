package com.horkov.mall.Controller;

import com.horkov.mall.Mapper.ItemMapper;
import com.horkov.mall.Model.Item;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    
    private ItemMapper mapper;

    public ItemController(ItemMapper mapper){
        this.mapper = mapper;
    }

    @GetMapping("/item/{id}")
    public Item getItem(@PathVariable("id") String id){
        return mapper.getItem(id);
    }

    @PostMapping("/user/{id}")
    public void postItem(@PathVariable("id") String id, @RequestParam("title") String title, @RequestParam("content") String content){
        mapper.insertItem(id, title, content);
    }

    @DeleteMapping("/user/{id}")
    public void deleteItem(@PathVariable("id") String id){
        mapper.deleteItem(id);
    }
}
