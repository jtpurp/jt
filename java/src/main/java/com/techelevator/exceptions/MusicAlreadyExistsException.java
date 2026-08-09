package com.techelevator.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus( value = HttpStatus.BAD_REQUEST, reason = "Music Suggestion Already Exists!")
public class MusicAlreadyExistsException extends Exception {

    //Parameterized constructor
    public MusicAlreadyExistsException (String message) {
        super(message);
    }

}
