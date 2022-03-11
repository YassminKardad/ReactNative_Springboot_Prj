package com.firstPrj.DL01_MobileApp.Model;

import org.springframework.data.annotation.Id;

public class User {
	@Id
	private int id;
	
	private String name;
	private String email,password;
	
	public User() {
		
	}
	public User(String name, String email, String password) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
	}
	
	public int getid() {
		return this.id;
	}
	
	public String getname() {
		
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	//@Override
    public boolean equals1(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return this.name.equals(user.name) && this.email.equals(user.email) &&
        		this.password.equals(user.password);
    }
	
    public boolean equals2(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return this.email.equals(user.email) && this.password.equals(user.password);
    }
	public String toString1(){
		return this.name+"/"+this.email+"/"+this.password;
	}
	public String toString2(){
		return this.email+"/"+this.password;  
	}
	
	
	
}
