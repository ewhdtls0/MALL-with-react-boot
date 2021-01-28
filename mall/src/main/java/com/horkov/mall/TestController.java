package com.horkov.mall;

import java.util.List;
import java.util.Map;

import com.horkov.mall.dao.UserDAO;
import com.horkov.mall.dto.UserDTO;
import com.horkov.mall.dao.BoardDAO;
import com.horkov.mall.dto.BoardDTO;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@MapperScan(basePackages = "com.horkov.mall.dao")
public class TestController {

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private BoardDAO boardDAO;
    
    @GetMapping("/users") // select * from user 확인
    public List<UserDTO> users() throws Exception{
        final List<UserDTO> userList = userDAO.selectUsers();
        return userList;
    }

    @GetMapping("/boards") // select * from board
    public List<BoardDTO> boards() throws Exception{
        final List<BoardDTO> boardList = boardDAO.selectBoards();
        return boardList;
    }

    @GetMapping("/boardOne") // select * from board where title=param
    public List<BoardDTO> boardOne(@RequestParam String title) throws Exception{
        final List<BoardDTO> boardList = boardDAO.selectBoardOne(title);
        return boardList;
    }

    @PostMapping("/check")
    public void check(@ModelAttribute BoardDTO q) throws Exception{
        BoardDTO aaa = new BoardDTO(q.getTitle(), q.getContent(), q.getWriter());
        boardDAO.insertBoards(aaa);
    }
    
}