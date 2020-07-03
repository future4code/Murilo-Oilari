import { Teacher } from './Teacher';
import { Student } from './Student';

export abstract class Mission {
    private id: number = Math.floor(Math.random() * (999999999 - 111111111) + 111111111);
    private name: string = ""


    constructor(
        private startDate: string,
        private endDate: string,
        private teachers: Teacher[] = [],
        private students: Student[] = [],
        private currentModule: number = 0
    ) {};

    public getId(): number {
        return this.id;
    };

    public getName(name: string): string {
        return this.name;
    };

    public getStartDate(): string {
        return this.startDate;
    };

    public getEndDate(): string {
        return this.endDate;
    };

    public getCurrentModule(): number | undefined {
        return this.currentModule;
    };

    public addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    };

    public addStudent(student: Student) {
        this.students.push(student);
    };

    public setName(name: string) {
        this.name = name;
    };
};