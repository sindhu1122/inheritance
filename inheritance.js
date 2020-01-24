//ES5
/*
function Professor(designation, qual) {
    this.designation = designation
    this.Qualification = function () {
        console.log("Qualification of professor is " + qual)
    }
}
Professor.prototype.college = function () {
    console.log(" Professor at sree vidyaikethan engineering college")
}
function Pythonprof(designation, qual, subject) {
    //var subject
    Professor.call(this, designation, qual)
    this.subject = subject
    this.display = function () {
        console.log("I deal with the subject " + subject)
    }
}
Pythonprof.prototype = Object.create(Professor.prototype)
var p1 = new Professor("Asstproffesor", "Mtech")
var p = new Pythonprof("Asstproff", "Mtech", "Python")
console.log(p1)
console.log(p)
p.display()
p.Qualification()
p.college()*/
//ES6
class Professor
{
    constructor(designation,qual)
    {
        this.designation=designation
        this.qual=qual
    this.Qualification=function()
    {
        console.log("My Qualification is "+qual)
    }
}
}
class Pythonproff extends Professor
{
    constructor(designation,qual,subject,experiece)
    {
        super(designation,qual)
        this.subject=subject
        this.experiece=experiece
    this.display=function()
    {
        console.log("I am "+subject+" professor with experience of"+experiece+"years")
    }
}
}
var p1=new Professor("Asstprofessor","Mtech")
var p=new Pythonproff("Asstprofessor","Mtech(Ph.D)","python","5")
console.log(p1)
console.log(p)
p1.Qualification()
//p1.college()
p.display()
p.Qualification()
//p.college()
