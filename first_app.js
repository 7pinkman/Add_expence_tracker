
//console.log('hi');
//const product = (a,b) => a*b;
//console.log(product(2,3));
/*
const student = {
    name:'kaustav',
    roll:54,
    eat(){
        console.log('maggi');
    }
}
//student.eat();


const a=['apple','oranges',' ','mango',' ','lemon'];
/*
let b=a.map(fruit => {
    if(fruit == ' ')
       fruit= 'empty string';
    return  fruit ;
});
console.log(b);
*/
/*
const b=a.slice();
//console.log(b);

//spread operator

const c =[...a];
//console.log(c);


const d={...student};
console.log(d);

*/



//rest operator
/*
const toArray=(...args) => {
    return args;
}

console.log(toArray(1,2,3,4));
*/
/*
const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}
*/
//ans:different objects
/*
const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)

/*
ans:{ key1: 1, key2: 2 }
{ key1: 1000, key2: 2 }
*/


//object Destructuring
/*
const student = {
    name:'kaustav',
    roll:54,
    eat(){
        console.log('maggi');
    }
}

const printname = ({name}) => {
    console.log(name);//kaustav
}
printname(student);
*/
//array destructuring
/*
const a=['sun','moon'];
const [m,s]=a;
console.log(m,s);//sun,moon

const [m1]=a;
console.log(m1);//sun


//Example

/*

const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
const { key1, key3}  = { ...obj1}
console.log(key1, key3)//1,1000

const arr1 = ['value1', 'value2']
const [ val1, val2 ] = arr1
console.log(val1)//value1
console.log(val2)//value2
*/
/*
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
let { key1, key3}  = obj1
key1 = 20;
key3 = 123
console.log(obj1.key1, obj1.key3)//1,1000
console.log(key1, key3)//20,123
    */

///promises

console.log('a');

console.log('b');


const a= new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('c')
    },3000)
})
a.then();

const d=new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('d')
    },0)
})

d.then();


console.log('e');