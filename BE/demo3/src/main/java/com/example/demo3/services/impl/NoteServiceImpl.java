package com.example.demo3.services.impl;

import com.example.demo3.models.Note;
import com.example.demo3.repositories.NoteRepository;
import com.example.demo3.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public List<Note> listNote() {
        return this.noteRepository.findAll();
    }

    @Override
    public void addOrUpdateNote(Note note) {
        this.noteRepository.save(note);
    }

    @Override
    public void removeNote(Note note) {
        this.noteRepository.delete(note);
    }

    @Override
    public Note findByIdInt(int id) {
        return this.noteRepository.findById(id).orElse(null);
    }
}
