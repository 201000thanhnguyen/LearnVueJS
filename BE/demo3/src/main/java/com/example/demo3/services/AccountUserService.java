package com.example.demo3.services;

import com.example.demo3.models.AccountUser;

import java.util.List;

public interface AccountUserService {

    List<AccountUser> listAccountUser();

    void addOrUpdateAccountUser(AccountUser accountUser);

    void removeAccountUser(AccountUser accountUser);

    AccountUser findByIdInt(int id);

    AccountUser findByAccEmailAndAccPass(String accEmail, String accPass);
}
