package com.horkov.mall.Mapper;

import org.apache.ibatis.annotations.Mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import java.util.*;

@Mapper
public interface FileMapper {
    // 게시글에 이미지가 몇개 있는가?
    @Select("SELECT count(*) FROM image WHERE item_id=#{item_id}")
    int getCountImage_id(@Param("item_id") int item_id);

    @Insert("INSERT INTO image(item_id, src) VALUES((select max(id) from items), #{src})")
    int insertFile(@Param("src") String src);

    @Select("SELECT src FROM image WHERE item_id=#{item_id}")
    List<String> getItemList_id(@Param("item_id") int item_id);
}