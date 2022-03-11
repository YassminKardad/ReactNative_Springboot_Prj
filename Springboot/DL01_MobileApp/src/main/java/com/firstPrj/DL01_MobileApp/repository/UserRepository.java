package com.firstPrj.DL01_MobileApp.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.firstPrj.DL01_MobileApp.Model.User;
//import com.firstPrj.DL01_MobileApp.controller.List;
import java.util.List;

@Repository
public class UserRepository implements UserRep {
	private static final String Insert="INSERT INTO user (Name,email,password) values (?,?,?);";
	private static final String Get_Users="SELECT * FROM user";
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public User saveUser(User user) {
		
		jdbcTemplate.update(Insert,user.getname(),user.getEmail(),user.getPassword());
		return user;
	}
	
	
	@Override
	public List<User> findAll() {
		return jdbcTemplate.query(Get_Users,(rs,rowNum)->{
			 return new User(rs.getString("name"), rs.getString("email"), rs.getString("password"));
		});
	}
}
