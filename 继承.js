//ES5继承

//1、原型链继承
Grand.prototype.lastname="jing";
function Grand(){};
let grand=new Grand();
Father.prototype=grand;
function Father(){
    this.name="hehe"
};
let father=new Father();
Son.prototype=father;
function Son(){}
let son=new Son();
console.log(son);

//2、构造函数继承
function Person(name,age){
    this.name=name;
    this.age=age;
}
function Student(name,age,grade){
    Person.call(this,name,age);
    this.grage=grade;
}
let student=new Student('jing',21,100);
console.log(student);

//3、共享原型
Father.prototype.lastname="jing"
function Father(){};
function Son(){};
Son.prototype=Father.prototype;
let father=new Father();
let son=new Son();
console.log(son);

//4、圣杯继承
Father.prototype.lastName="jing";
function Father(){}
function Son(){}
let inherit=(function(){
    let F=function(){};
    return function(Target,Origin){
        F.prototype=Origin.prototype;
        Target.prototype=new F();
        Target.prototype.constuctor=Target;
        Target.prototype.uber=Origin.prototype;
    } 
}());
inherit(Son,Father);
let son=new Son();
let father=new Father();
console.log(father)
console.log(son)


//ES6继承
class hand {
    constructor(name){
        this.companyName = 'HAND'
    }
}
class Department extends hand{
    //调用类的构造方法
    constructor(name){
        super(name);
        this.departmentName = 'Jishu'
    }
    //定义一般的方法
    showAddre (){}
}
class People extends Department{
    constructor(name){
        super(name); //通过super调用父类的构造方法
        this.name = name || 'hello';
    }
}
let jss = new People('景尚尚');
console.log(jss);
