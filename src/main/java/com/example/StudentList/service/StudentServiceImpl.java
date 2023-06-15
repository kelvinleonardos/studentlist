package com.example.StudentList.service;

import com.example.StudentList.models.Student;
import com.example.StudentList.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public ArrayList<Student> getAllStudents() {
        return (ArrayList<Student>) studentRepository.findAll();
    }
}
