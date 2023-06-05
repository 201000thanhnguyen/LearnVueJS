package com.example.demo3.models;

import lombok.Data;
import org.springframework.web.bind.annotation.Mapping;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Data
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int noteId;
    private String title;
    @NotNull
    private String content;
    private LocalDate createdDate;
    private String tag;
}
