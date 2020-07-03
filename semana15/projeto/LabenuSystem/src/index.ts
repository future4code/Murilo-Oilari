import { Student } from './Student';
import { Teacher, Specialty } from './Teacher';
import { Mission } from './Mission';

import { FileManager } from './FileManager';
import { FullTimeMission } from './FullTimeMission';

const createNewStudent = (
    newStudentName: string, 
    newStudentEmail: string, 
    newStudentBirthday: string, 
    newStudentHobby: string[]) =>{

    const newStudent: Student = new Student(
        newStudentName, 
        newStudentEmail, 
        newStudentBirthday, 
        newStudentHobby);

    const manager: FileManager = new FileManager('students.json');
    const studentsList: any = manager.getObjectFromFile();

    studentsList.push(newStudent);

    manager.writeObjectToFile(studentsList);

    console.log("Student", newStudentName, " criado!");

    return newStudent;
};

const createNewTeacher = (
    newTeacherName: string, 
    newTeacherEmail: string,
    newTeacherBirthday: string,
    newTeacherSpecialty: Specialty) => {

    const newTeacher: Teacher = new Teacher( 
        newTeacherName, 
        newTeacherEmail,
        newTeacherBirthday,
        newTeacherSpecialty);

    const manager: FileManager = new FileManager('teachers.json');
    const teachersList: any = manager.getObjectFromFile();

    teachersList.push(newTeacher);

    manager.writeObjectToFile(teachersList);

    console.log("Teacher", newTeacherName, " criado!");

    return newTeacher;
};

const createNewMission = (
    startDate: string,
    endDate: string,
    teachers: Teacher[],
    students: Student[],
    currentModule?: number) => {

        const newFullTimeMission: FullTimeMission = new FullTimeMission(
            startDate,
            endDate,
            teachers,
            students,
            currentModule);

        const manager: FileManager = new FileManager('missions.json');
        const fullTimeMissionList: any = manager.getObjectFromFile();

        fullTimeMissionList.push(newFullTimeMission);

        manager.writeObjectToFile(fullTimeMissionList);

        console.log("Mission", "bla", " criado!");
};

const createTwoMissions = (teacherArray: Teacher[], studentArray: Student[]): FullTimeMission[] => {
    let missionArray: FullTimeMission[] = [];

    const missionOne = createNewMission("01/01/2001", "02/02/2020", teacherArray, studentArray, 5);
    const missionTwo = createNewMission("01/01/2009", "02/02/2015", teacherArray, studentArray, 7);

    missionArray.push(missionOne, missionTwo)

    return missionArray;
};

const createTwoStudents = (): Student[] => {
    let twoStudents: Student[] = [];
    
    const studentOne = createNewStudent("Sven Von Bleus", "bleus@bananinha.com", "15/12/1995", ["preto", "azul"]);
    const studentTwo = createNewStudent("Jhon Foo", "foo@bananinha.com", "15/05/1975", ["bege", "furta-cor"]);
    
    twoStudents.push(studentOne, studentTwo);
    
    return twoStudents;
};

const createFourTeachers = (): Teacher[] => {
    let fourTeachers: Teacher[] = [];
    
    const teacherOne = createNewTeacher("Alice Wonders", "alice@bananinha.com", "15/05/1975", Specialty.POO);
    const teacherTwo = createNewTeacher("Bob Boo", "bob@bananinha.com", "15/05/1975", Specialty.REACT);
    const teacherThree = createNewTeacher("Luigi Green-Mario", "luigi@bananinha.com", "15/05/1975", Specialty.TYPESCRIPT);
    const teacherFour = createNewTeacher("Bar Ney", "bar@bananinha.com", "15/05/1975", Specialty.BACKEND);
    
    fourTeachers.push(teacherOne, teacherTwo, teacherThree, teacherFour);
    
    return fourTeachers;
};

const main = () => {
    try {
        const students = createTwoStudents();
        const teachers = createFourTeachers();
        const missions = createTwoMissions(teachers, students)
        console.log(missions)
        //missions.missionOne.getName("Marvin");
        //missionTwo.getName("R2D2");

    } catch (err) {
        console.error(err);
    };
};

main();