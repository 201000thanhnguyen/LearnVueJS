package com.example.demo3.repositories;

import com.example.demo3.models.AccountUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountUserRepository extends JpaRepository<AccountUser, Integer> {
    AccountUser findByAccEmailAndAccPass(String accEmail, String accPass);
}
