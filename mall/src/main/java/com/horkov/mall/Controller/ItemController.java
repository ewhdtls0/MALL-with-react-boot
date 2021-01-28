package com.horkov.mall.Controller;

import com.horkov.mall.Mapper.ItemMapper;
import com.horkov.mall.Model.Item;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    
    private ItemMapper mapper;

    public ItemController(ItemMapper mapper){
        this.mapper = mapper;
    }

    @GetMapping("/item/{id}")
    public Item getItem(@PathVariable("id") int id){
        return mapper.getItem(id);
    }

    @CrossOrigin("*")
    @PostMapping("/item")
    public void postItem(@RequestParam("title") String title, @RequestParam("content") String content, @RequestParam("writer") String writer){
        mapper.insertItem(title, content, writer);
    }

    @DeleteMapping("/item/{id}")
    public void deleteItem(@PathVariable("id") int id){
        mapper.deleteItem(id);
    }
}
