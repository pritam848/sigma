let person={
    name:"Tejas",
    rollNo:21,
    greet:function(){
        return"hello";
    }
}
console.log(person.name);
console.log(person.rollNo);
console.log(person.greet());
const college={
     1:{
        name:"Pritam",
        grade:"a+"
     },
     2:{
        name:"tejas",
        grade:"a+"
     }
}
const school={
    student1:{
        name:"tejas",
        grade:"a+"
    }
}
console.log(college[1].name);
console.log(school.student1.name);

let arr=[
    {
        name:"omkar",
        age:"21"
    },
    {
        city:"indore",
        state:"MP"
    }

]
console.log("array of object ")
console.log(arr[0].name);
console.log(arr[1].city);

