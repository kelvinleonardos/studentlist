package com.example.StudentList.controller;

import com.example.StudentList.models.Student;
import com.example.StudentList.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "new student is added";
    }

    @GetMapping("/getAll")
    public ArrayList<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
}
