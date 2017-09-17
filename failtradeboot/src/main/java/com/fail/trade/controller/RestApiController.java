package com.fail.trade.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;  

@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
@RestController
@RequestMapping("/failtrade")
public class RestApiController {
	
@Autowired
private DataSourceService dataSourceService;
	
	public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);
	
	
	@RequestMapping(value = "/ngcompleter/{value}", method = RequestMethod.GET)
	public ResponseEntity<List<User>> pathlistAngualrUsers(@PathVariable("value") String value) {
		List<User> users = new ArrayList<User>();
		User user1 = new User(value, "GET-METHOD1", "FIT1");
		User user2 = new User("Amit", "GET-METHOD2", "FIT2");
		User user3 = new User("Sumit", "GET-METHOD3", "FIT3");
		User user4 = new User("Mayank", "GET-METHOD4", "FIT4");
		User user5 = new User("Sandeep", "GET-METHOD5", "FIT5");
		User user6 = new User("Vivek", "GET-METHOD6", "FIT6");
		User user7 = new User("Rahul", "GET-METHOD7", "FIT7");
		User user8 = new User("Arun", "GET-METHOD8", "FIT8");
		User user9 = new User("Sanjay", "GET-METHOD9", "FIT9");
		users.add(user1); users.add(user2); users.add(user3); users.add(user4); users.add(user5); users.add(user6); 
		users.add(user7); users.add(user8); users.add(user9);	
		if (users.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	
	
	
	
	
	
	@RequestMapping(value = "/excelpdf", method = RequestMethod.GET)
	//@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public Response excelUsers() throws IOException {
		List<User> users = new ArrayList<User>();
		// User user = new User("Amit", "POST-METHOD", "FIT");
		// user.setName(user.getName() + userValue.getName());
		// users.add(user);
		Path pdfPath = Paths.get("E:\\sts_ui_workspace\\failTradeServer\\src\\main\\resources\\414567.pdf");
		byte[] pdf = Files.readAllBytes(pdfPath);
		ResponseBuilder response = Response.ok((Object) pdf);
		response.header("Content-Disposition", "attachment; filename=\"fox-hunting.pdf\"");
		return response.build();

	}
	
	

	@RequestMapping(value = "/excelpdf", method = RequestMethod.POST  , produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	public @ResponseBody ResponseEntity<?> excelUsers(@RequestBody User userValue) throws IOException {
		List<User> users = new ArrayList<User>();
		User user = new User("Amit", "POST-METHOD", "FIT");
		user.setName(user.getName() + userValue.getName());
		users.add(user);
	    Path pdfPath = Paths.get("E:\\sts_ui_workspace\\failTradeServer\\src\\main\\resources\\414567.pdf");
	    byte[] pdf = Files.readAllBytes(pdfPath);
	    
	//    byte[] pdf = Files.readAllBytes(new File("//src//main//resources//414567.pdf").toPath());

	    HttpHeaders responseHeaders = new HttpHeaders();
	    responseHeaders.set("charset", "utf-8");
	    responseHeaders.setContentType(MediaType.parseMediaType("application/pdf"));
	    String filename = "4145567.pdf";
	    responseHeaders.setContentDispositionFormData(filename, filename);
	    responseHeaders.setCacheControl("must-revalidate, post-check=0, pre-check=0");
	   return new ResponseEntity<>("Checked Failed", responseHeaders, HttpStatus.ACCEPTED);
	    
	//	return new ResponseEntity<>(pdf, responseHeaders, HttpStatus.OK);
	}
	
	
	
	
	
	
	

	// -------------------Retrieve All
	// Users---------------------------------------------

	@RequestMapping(value = "/userget", method = RequestMethod.GET)
	public ResponseEntity<List<User>> listAllUsers() {
		List<User> users = new ArrayList<User>();
		User user = new User("Amit", "GET-METHOD", "FIT");
		users.add(user);
		if (users.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/userpathget/{value}", method = RequestMethod.GET)
	public ResponseEntity<List<User>> pathlistAllUsers(@PathVariable("value") String value) {
		List<User> users = new ArrayList<User>();
		User user = new User("Amit", "GET-METHOD", "FIT");
		user.setName(user.getName() + value);
		users.add(user);
		if (users.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/userpost", method = RequestMethod.POST)
	public ResponseEntity<List<User>> postAllUsers(@RequestBody User userValue) {
		List<User> users = new ArrayList<User>();
		User user = new User("Amit", "POST-METHOD", "FIT");
		user.setName(user.getName() + userValue.getName());
		users.add(user);
		if (users.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/userput/{value}", method = RequestMethod.PUT)
	public ResponseEntity<List<User>> putAllUsers(@PathVariable("value") String value, @RequestBody User userValue) {
		List<User> users = new ArrayList<User>();
		User user = new User("Amit", "PUT-METHOD", "FIT");
		user.setName(user.getName() + userValue.getName());
		users.add(user);
		if (users.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/userdelete/{value}", method = RequestMethod.DELETE)
	public ResponseEntity<List<User>> deleteAllUsers(@PathVariable("value") String value) {
		List<User> users = new ArrayList<User>();
		User user = new User("Amit", "DELETE-METHOD", "FIT");
		user.setName(user.getName() + value);
		users.add(user);
		if (users.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	
	

	
	@RequestMapping(value = "/str", method = RequestMethod.GET)
	public List<String> listAllString() {
		List<String> users = new ArrayList<String>();
        
		users.add("Amit");
		 
		users.add("Sumit");
		return users;
	}
	
	@RequestMapping(value = "/jdbctemp", method = RequestMethod.GET)
	public List<String> listJDBCString() {
		List<String> users = dataSourceService.findAll();
        

		return users;
	}
	
	@RequestMapping(value = "/jdbcalexis", method = RequestMethod.GET)
	public List<String> listAlexisJDBCString() {
		List<String> users = dataSourceService.getAlexisAll();
        
		return users;
	}
}
