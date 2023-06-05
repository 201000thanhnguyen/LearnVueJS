package com.example.demo3.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class NoteDTO {
    private int noteId;
    private String title;
    private String content;
    private LocalDate createdDate;
    private String tag;
}
