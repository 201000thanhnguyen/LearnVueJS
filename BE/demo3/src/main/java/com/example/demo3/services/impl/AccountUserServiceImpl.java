package com.example.demo3.services.impl;

import com.example.demo3.models.AccountUser;
import com.example.demo3.repositories.AccountUserRepository;
import com.example.demo3.services.AccountUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountUserServiceImpl implements AccountUserService {

    private final AccountUserRepository accountUserRepository;

    @Autowired
    public AccountUserServiceImpl(AccountUserRepository accountUserRepository) {
        this.accountUserRepository = accountUserRepository;
    }

    @Override
    public List<AccountUser> listAccountUser() {
        return this.accountUserRepository.findAll();
    }

    @Override
    public void addOrUpdateAccountUser(AccountUser accountUser) {
        this.accountUserRepository.save(accountUser);
    }

    @Override
    public void removeAccountUser(AccountUser accountUser) {
        this.accountUserRepository.delete(accountUser);
    }

    @Override
    public AccountUser findByIdInt(int id) {
        return this.accountUserRepository.findById(id).orElse(null);
    }

    @Override
    public AccountUser findByAccEmailAndAccPass(String accEmail, String accPass) {
        return this.accountUserRepository.findByAccEmailAndAccPass(accEmail, accPass);
    }
}
