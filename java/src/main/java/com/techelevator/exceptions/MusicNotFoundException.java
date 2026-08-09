package com.techelevator.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus( value = HttpStatus.NOT_FOUND, reason = "Music Suggestion Not Found!")
public class MusicNotFoundException extends Exception {

    //Parameterized constructor
    public MusicNotFoundException (String message) {
        super(message);
    }

}
