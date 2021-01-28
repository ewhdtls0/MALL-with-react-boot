package com.horkov.mall.dao;

import com.horkov.mall.dto.BoardDTO;

import java.util.List;

public interface BoardDAO {
    List<BoardDTO> selectBoards() throws Exception;
    List<BoardDTO> selectBoardOne(String title) throws Exception;
    public void insertBoards(BoardDTO abc) throws Exception;
}