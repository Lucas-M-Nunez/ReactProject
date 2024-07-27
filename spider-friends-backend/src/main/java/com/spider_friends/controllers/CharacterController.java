/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.spider_friends.controllers;

import com.spider_friends.exception.MyException;
import com.spider_friends.repository.CharacterRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author lucas
 */

@Controller
@RequestMapping("/api/v1")
public class CharacterController {
    
    @Autowired
    private CharacterRepository characterRepository;
    
    @GetMapping("/characters")
    public List<Character> listCharacter() {
        return characterRepository.findAll();
    }
    
    @GetMapping("/characters/{id}")
    public ResponseEntity<Optional<Character>> oneCharacterbyId( @PathVariable Long id) {
        Optional<Character> character = characterRepository.findById(id);
        return ResponseEntity.ok(character);
    }
    
}
