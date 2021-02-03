package com.horkov.mall.Mapper;

import org.apache.ibatis.annotations.Mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface FileMapper {
    
    @Select("SELECT src FROM image WHERE item_id=#{item_id}")
    String getItem_id(@Param("item_id") int item_id);

    @Insert("INSERT INTO image(item_id, src) VALUES((select max(id) from items), #{src})")
    int insertFile(@Param("src") String src);


}