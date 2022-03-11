package com.firstPrj.DL01_MobileApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.firstPrj.DL01_MobileApp.Model.User;
import com.firstPrj.DL01_MobileApp.status;
import com.firstPrj.DL01_MobileApp.repository.UserRepository;


@RestController
public class UserController {
	@Autowired
    UserRepository userRepository;
	
	@GetMapping("/all")
	@CrossOrigin
    public List<User> getUsers() {
        return userRepository.findAll();
    }
	
	@CrossOrigin
    @PostMapping("/register")
    public status registerUser(@RequestBody User newUser) {
        List <User> users = userRepository.findAll();
        System.out.println("New user: " + newUser.toString1());
        for (User user : users) {
            if (user.equals1(newUser)) {
                System.out.println("User Already exists!");
                return status.USER_ALREADY_EXISTS;
            }
        }
        userRepository.saveUser(newUser);
        return status.SUCCESS;
    }
	
	@CrossOrigin
    @PostMapping("/login")
    public status loginUser(@RequestBody User user) {
        List <User> users = userRepository.findAll();
        System.out.println("user: " + user.toString2());
        for (User other : users) {
        	System.out.println("user: " + other.toString2());
        	 if (other.equals2(user)) {
                 System.out.println("User exists!");
                 return status.USER_ALREADY_EXISTS;
             }
            
        }
     return status.FAILURE;
    }
    
   

}
	