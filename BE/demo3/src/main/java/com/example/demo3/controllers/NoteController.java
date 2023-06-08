package com.example.demo3.controllers;

import com.example.demo3.DTO.NoteDTO;
import com.example.demo3.models.Note;
import com.example.demo3.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/note")
public class NoteController {
    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping(value = {"", "/", "/list"})
    public ResponseEntity<List<NoteDTO>> getListNote() {
        List<Note> notes = this.noteService.listNote();
        if (notes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            List<NoteDTO> noteDTOS = notes.stream().map(note -> new NoteDTO(
                    note.getNoteId(),
                    note.getTitle(),
                    note.getContent(),
                    note.getCreatedDate(),
                    note.getTag()
            )).collect(Collectors.toList());
            return new ResponseEntity<>(noteDTOS, HttpStatus.OK);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<NoteDTO> addNote(@Validated @RequestBody Note note, BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            this.noteService.addOrUpdateNote(note);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @GetMapping("/get-note/{id}")
    public ResponseEntity<NoteDTO> getNote(@PathVariable int id) {
        Note note = this.noteService.findByIdInt(id);
        if (note == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            NoteDTO noteDTO = new NoteDTO(note.getNoteId(), note.getTitle(), note.getContent(), note.getCreatedDate(), note.getTag());
            return new ResponseEntity<>(noteDTO, HttpStatus.OK);
        }
    }

    @PutMapping("/update-note")
    public ResponseEntity<NoteDTO> updateNote(@Validated @RequestBody Note note, BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else {
            this.noteService.addOrUpdateNote(note);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
