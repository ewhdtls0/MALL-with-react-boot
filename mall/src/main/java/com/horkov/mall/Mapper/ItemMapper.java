package com.horkov.mall.Mapper;

import org.apache.ibatis.annotations.Mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.horkov.mall.Model.Item;

@Mapper
public interface ItemMapper {

    @Select("SELECT * FROM items WHERE id=#{id}")
    Item getItem(@Param("id") String id);

    @Insert("INSERT INTO items VALUES(#{id}, #{title}, #{content}, #{writer}, #{categoty}, #{lookup}, #{todaylookup}")
    int insertItem(@Param("id") String id, @Param("title") String title, @Param("content") String content, @Param("writer") String writer, @Param("category") String category,
    @Param("lookup") int lookup, @Param("todaylookup") int todaylookup);

    @Update("UPDATE items SET title=#{title} content=#{content} WHERE id=#{id}")
    int updateItem(@Param("id") String id, @Param("title") String title, @Param("content") String content);

    @Delete("DELETE FROM items WHERE id=#{id}")
    int deleteItem(@Param("id") String id);


}