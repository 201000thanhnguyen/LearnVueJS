package com.example.demo3.controllers;

import com.example.demo3.models.AccountUser;
import com.example.demo3.services.AccountUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/acc-user")
public class AccountUserController {

    private final AccountUserService accountUserService;

    @Autowired
    public AccountUserController(AccountUserService accountUserService) {
        this.accountUserService = accountUserService;
    }

    @PostMapping("/login")
    public ResponseEntity<AccountUser> getUser(@RequestBody AccountUser accountUser) {
        if (accountUser != null && !accountUser.getAccEmail().isEmpty() && !accountUser.getAccPass().isEmpty()) {
            AccountUser accountUser1 = this.accountUserService.findByAccEmailAndAccPass(accountUser.getAccEmail(), accountUser.getAccPass());
            if (accountUser1 != null) {
                return new ResponseEntity<>(accountUser1, HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
