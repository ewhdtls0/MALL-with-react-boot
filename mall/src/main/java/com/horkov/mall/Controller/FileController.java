package com.horkov.mall.Controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import com.horkov.mall.Mapper.FileMapper;

import org.apache.commons.io.FileUtils;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @GetMapping(value = "/showimage/{item_id}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> viewImage(@PathVariable("item_id") int item_id) throws IOException{
        final ByteArrayResource inputStream = new ByteArrayResource(Files.readAllBytes(Paths.get(mapper.getItem_id(item_id))));
        return ResponseEntity
                .status(HttpStatus.OK)
                .contentLength(inputStream.contentLength())
                .body(inputStream);

    }

    @CrossOrigin("*")
    @PostMapping("/upload")
    public void upload(@RequestParam("file") MultipartFile[] multipartFile) throws NoSuchAlgorithmException {

        for(int i=0;i<multipartFile.length;i++)
        {   
            MessageDigest m = MessageDigest.getInstance("MD5");
            m.reset();
            m.update(multipartFile[i].getOriginalFilename().getBytes());
            byte[] digest = m.digest();
            BigInteger bigInt = new BigInteger(1, digest);
            String hashtext = bigInt.toString(16);
            File targetFile = new File("src/main/resources/static/imgs/" + hashtext + ".jpg");
            try {
                InputStream fileStream = multipartFile[i].getInputStream();
                FileUtils.copyInputStreamToFile(fileStream, targetFile);
                mapper.insertFile("src/main/resources/static/imgs/" + hashtext + ".jpg");
            } catch (IOException e) {
                FileUtils.deleteQuietly(targetFile);
                e.printStackTrace();
            }
        }

    }
}