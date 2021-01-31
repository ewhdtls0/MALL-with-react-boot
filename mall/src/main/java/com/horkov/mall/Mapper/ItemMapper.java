package com.horkov.mall.Mapper;

import org.apache.ibatis.annotations.Mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

import com.horkov.mall.Model.Item;

@Mapper
public interface ItemMapper {

    @Select("SELECT * FROM items WHERE id=#{id}")
    Item getItem(@Param("id") int id);

    @Select("SELECT * FROM items")
    List<Item> getItemList();

    @Insert("INSERT INTO items(title, content, writer, category) VALUES(#{title}, #{content}, #{writer}, #{category})")
    int insertItem(@Param("title") String title, @Param("content") String content, @Param("writer") String writer, @Param("category") String category);

    @Update("UPDATE items SET lookup=#{lookup}, todaylookup=#{todaylookup} WHERE id=#{id}")
    int updateItem(@Param("id") int id, @Param("lookup") int lookup, @Param("todaylookup") int todaylookup);

    @Delete("DELETE FROM items WHERE id=#{id}")
    int deleteItem(@Param("id") int id);


}