/*
export class Person {
    // private _name: string;
    // private _id: number;
    // private _salary: number;
    // constructor(_name: string, _id: number, _salary: number) {
    //     this._name = _name;
    //     this._id = _id;
    //     this._salary = _salary;
    // }

    constructor(private _name: string, private _id: number, private _salary: number) {

    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }
}

export interface Person {
    name: string;
    id: number;
    salary: number;
    // print(): string;
}
*/
export type Person = {
    name: string;
    id: number;
    salary: number;
}

