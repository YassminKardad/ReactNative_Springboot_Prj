package com.firstPrj.DL01_MobileApp.repository;

import java.util.List;

import com.firstPrj.DL01_MobileApp.Model.User;

public interface UserRep {
	public User saveUser(User user);
	public List<User> findAll();
}
