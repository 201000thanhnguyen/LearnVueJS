package com.example.demo3.models;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Data
public class AccountUser {
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
    private String statusLogin; // value : true / false
}
