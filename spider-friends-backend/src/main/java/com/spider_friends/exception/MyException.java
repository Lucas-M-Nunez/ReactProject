/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.spider_friends.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author lucas
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MyException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public MyException(String message) {
        super(message);
    }

}
