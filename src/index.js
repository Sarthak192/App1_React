import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>
console.log(element);
ReactDOM.render(element, document.getElementById("root"));

function printValueOfI(){
    for(var i = 0 ; i < 5 ; i++){
        console.log(i)
    }
    console.log(i)
}
printValueOfI();

console.log("*******************************************************************************")

function printValueOfIUsingLet(){
    for(let i = 0 ; i < 5 ; i++){
        console.log(i)
    }
    // console.log(i)  undefined i
}
printValueOfIUsingLet();

console.log("*******************************************************************************")

const person = {
    name: 'Mosh',
    walk(){},
    sleep(){}
}

person.walk();
person['name'] = "Hamedami";

console.log("*******************************************************************************")

const hello = {
    name: 'Mosh',
    walk(){
        console.log(this);
    }
}

hello.walk();
const walk = hello.walk;
walk();

console.log("*******************************************************************************")

const helloo = {
    name: 'Mosh',
    walk(){
        console.log(this);
    }
}

helloo.walk();
const walkk = helloo.walk.bind(helloo);
walkk();

console.log("*******************************************************************************")

const bye = {
    talk(){
        setTimeout(function(){
            console.log("this", this);
        }, 1000);
    }
}

bye.talk();

console.log("*******************************************************************************")

const byee = {
    talk(){
        var self = this;
        setTimeout(function(){
            console.log("this", self);
        }, 1000);
    }
}

byee.talk();

console.log("*******************************************************************************")

const byeee = {
    talk(){
        // var self = this;
        setTimeout(()=>{
            console.log("this", this);
        }, 1000);
    }
}

byeee.talk();

console.log("*******************************************************************************")

const colors = ["Red", "Blue", "Green"]
const items = colors.map(function(color){
    return "<li>" + color + "</li>"
})
console.log(items)

console.log("*******************************************************************************")

const address = {
    street: 'Delhi',
    city: '',
    country: ''
}
const {street} = address
console.log(street)

console.log("*******************************************************************************")

const f = [1,2,3];
const s = [4,5,6];
const final = f.concat(s);
console.log(final)
const final1 = [...f, 10, ...s, 10]
console.log(final1);

console.log("*******************************************************************************")

class Human{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(this.name);
    }
}

class Teacher extends Human{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log(this.degree);
    }
}

const teacher = new Teacher("Somil", "Teacher");
teacher.walk();
teacher.teach();