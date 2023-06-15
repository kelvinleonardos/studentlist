package com.example.StudentList.service;

import com.example.StudentList.models.Student;

import java.util.ArrayList;
import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public ArrayList<Student> getAllStudents();

}
