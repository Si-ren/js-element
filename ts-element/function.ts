let a = [5,4,6,3,6,2,7,8,2,9,1,0]
a.sort((a:number, b:number)=>{
    console.log(a-b);
    return a-b;
})
console.log(a)

function compare(p:{smallFirst: boolean}){
    if(p.smallFirst){  return (a:number, b:number) => a-b;
    }else{  return (a:number, b:number) =>b-a; } 
}

a.sort(compare({smallFirst: false}))
console.log(a)

const test1 = {
    name: 'test1',
    salary: 80000,
    decreaseSalary: function(a:number) {   this.salary -=a},
}
test1.decreaseSalary(1000);
console.log(test1);


function add(a:number, b:number):number{ 
    return a + b;
}   