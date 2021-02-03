package com.horkov.mall.Controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import com.horkov.mall.Mapper.FileMapper;

import org.apache.commons.io.FileUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileController {

    private FileMapper mapper;

    public FileController(FileMapper mapper){
        this.mapper = mapper;
    }

    @GetMapping("/showimage/{item_id}")
    public String viewImage(@PathVariable("item_id") int item_id){
        return mapper.getItem_id(item_id);
    }

    @CrossOrigin("*")
    @PostMapping("/upload")
    public void upload(@RequestParam("file") MultipartFile[] multipartFile) {

        for(int i=0;i<multipartFile.length;i++)
        {
            File targetFile = new File("src/main/resources/static/imgs/" + multipartFile[i].getOriginalFilename());
            try {
                InputStream fileStream = multipartFile[i].getInputStream();
                FileUtils.copyInputStreamToFile(fileStream, targetFile);
                mapper.insertFile("src/main/resources/static/imgs/" + multipartFile[i].getOriginalFilename());
            } catch (IOException e) {
                FileUtils.deleteQuietly(targetFile);
                e.printStackTrace();
            }
        }

    }
}