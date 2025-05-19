let students = [
    {name :"", age:0, grade:""}
];
students.push({name:"John", age:20, grade:"A"});
students.push({name:"Jane", age:22, grade:"B"});
students.push({name:"Doe", age:21, grade:"C"});
students.forEach((student)=>{
    console.log('name: ${student.name}, age: ${student.age}, grade: ${student.grade}');
});
//function to check if a student has grade A
function checkGradeA(student){
    if(student.grade === "A"){
        return true;
    }
    return false;
}
