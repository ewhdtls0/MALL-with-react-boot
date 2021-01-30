package com.horkov.mall.Mapper;

import org.apache.ibatis.annotations.Mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> 786cf40c55f27783bf1c5891898e8d12e66b4ed7
import com.horkov.mall.Model.Item;

@Mapper
public interface ItemMapper {

    @Select("SELECT * FROM items WHERE id=#{id}")
<<<<<<< HEAD
    Item getItem(@Param("id") String id);

    @Insert("INSERT INTO items VALUES(#{id}, #{title}, #{content}")
    int insertItem(@Param("id") String id, @Param("title") String title, @Param("content") String content);

    @Update("UPDATE items SET title=#{title} content=#{content} WHERE id=#{id}")
    int updateItem(@Param("id") String id, @Param("title") String title, @Param("content") String content);

    @Delete("DELETE FROM items WHERE id=#{id}")
    int deleteItem(@Param("id") String id);
=======
    Item getItem(@Param("id") int id);

    @Select("SELECT * FROM items")
    List<Item> getItemList();

    @Insert("INSERT INTO items(title, content, writer, category) VALUES(#{title}, #{content}, #{writer}, #{category})")
    int insertItem(@Param("title") String title, @Param("content") String content, @Param("writer") String writer, @Param("category") String category);

    @Update("UPDATE items SET title=#{title} content=#{content} WHERE id=#{id}")
    int updateItem(@Param("id") int id, @Param("title") String title, @Param("content") String content);

    @Delete("DELETE FROM items WHERE id=#{id}")
    int deleteItem(@Param("id") int id);

>>>>>>> 786cf40c55f27783bf1c5891898e8d12e66b4ed7

}