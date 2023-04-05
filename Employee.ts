enum Gender {
    MALE,
    FEMALE,
    OTHER
}
class Employee {
    fullName : string;
    gender : Gender = Gender.OTHER;
    birthDay? : Date;
    email : string;
    phoneNumber : string
    constructor(fullName:string,gender:Gender,birthDay:Date,email:string,phoneNumber:string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber
    }
}
let employeeList : Employee[] = [];

employeeList.push(new Employee('ha thien lon',Gender.FEMALE, new Date('2.5.2000'),'aaaa@gmail.com','0123456789'))
employeeList.push(new Employee('non giua troi',Gender.MALE, new Date('12.12.2000'),'aaa121a@gmail.com','0444444'))
function showEmployeeList (employee : Employee){
    console.log(employee)
}
employeeList.forEach(showEmployeeList)