package com.example.demo3.services;

import com.example.demo3.models.Note;

import java.util.List;

public interface NoteService {
    List<Note> listNote();

    void addOrUpdateNote(Note note);

    void removeNote(Note note);

    Note findByIdInt(int id);

}
