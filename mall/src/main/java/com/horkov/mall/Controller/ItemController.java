package com.horkov.mall.Controller;

import java.util.List;

import com.horkov.mall.Mapper.ItemMapper;
import com.horkov.mall.Model.Item;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("/item/all")
    public List<Item> getItemList(){
        return mapper.getItemList();
    }

    @PutMapping("/item/{id}")
    public void updateItem(@RequestBody Item item){
        mapper.updateItem(item.getId(), item.getLookup(), item.getTodaylookup());
    }

    @CrossOrigin("*")
    @PostMapping("/item")
    public void postItem(@RequestBody Item item){
        mapper.insertItem(item.getTitle(), item.getContent(), item.getWriter(), item.getCategory());
    }

    @DeleteMapping("/item/{id}")
    public void deleteItem(@PathVariable("id") int id){
        mapper.deleteItem(id);
    }
}