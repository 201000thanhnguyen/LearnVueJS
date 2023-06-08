package com.example.demo3.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int accId;
    @NotBlank
    private String accName;
    @Email
    @NotBlank
    @Column(unique = true)
    private String accEmail;
    @NotBlank
    private String accPass;
    private String statusLogin;
}
