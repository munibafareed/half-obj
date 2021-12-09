// dark and light mode //
// function container(e) {
//     var container = document.getElementById("container")
//     container.style.backgroundColor = "black"
//     if (e.innerHtml === "DARK MODE"){
//         e.innerHtml = "LIGHT MODE"
//         container.style.backgroundColor = "black"
        
//     }else{
//         e.innerHtml = "DARK MODE"
//         container.style.backgroundColor = "white"
//     }
    
// }

// change bg color //
// function changeBg (e) {
//     var  bgColor = prompt("colore change........")
//     var container = document.getElementById("container")
//     container.style.backgroundColor = bgColor 
    
// }

// object,,,,///
var obj = {
    name : "muniba"
}
console.log(obj.name)

// array me likhna //
var arr = ["muniba",30,"female"]

// obj me likhna //
var stdobj = {
    name : "muniba",
    age: 30,
    gender : "female"
}
console.log(stdobj.name)
console.log(stdobj.age)
console.log(stdobj.gender)

// emty obj //
var std = { 
stdName : "muniba",
stdAge : 30 ,
class :"web & mobile course",
progress : 0
};
console.log(std)

// delete obj //
var std = { 
    stdName : "muniba",
    stdAge : 30 ,
    class :"web & mobile course",
    progress : 0
    };
    delete std.progress
    console.log(std)

    // nested obj //
    var std = { 
        stdName : "muniba",
        stdAge : 30 ,
        class :"web & mobile course",
        section : "morning",
        marks : {
            html : 58 ,
            css : 69 ,
            js : 74 ,
        }
        }
        console.log(std)
    // check obj,,,,false //
    var obj = {
        firstName : "ali"
    }
    var check = "lastName" in obj
    console.log(check)
// check obj,,,,true //
var obj = {
    firstName : "ali"
}
var check = "firstName" in obj
console.log(check)

// array in obj //
var std = { 
    stdName : "muniba",
    stdAge : 30 ,
    class :"web & mobile course",
    section : "morning",
    subject : ["html","css","js"],
    marksArr : [58,69,74]
};
std.result = "true"
console.log(std)
console.log(std.subject[1],std.marksArr[1])

// obj me function(method) me this/return lagana zarori//

var stdResult = {
    stdName : "muniba",
    stdClass : "web&mobile",
    htmlMarls : 58,
    cssmarks : 69,
    jsMarks : 74,
    addition : function (){
        return this.htmlMarls + this.cssmarks + this.jsMarks
    },
    percentage : function () {
        var totalMarks =this.htmlMarls + this.cssmarks + this.jsMarks
        return(totalMarks/300) * 100
        
    }
}
console.log(stdResult.addition())
console.log(stdResult.percentage())

// table me object likhna //
// var stdObj = { 
//     stdName : "muniba",
//     stdAge : 30 ,
//     stdClass :"web & mobile course",
//     stdHtml : 58,
//     stdCss : 69,
//     stdJs : 74,
// };


// var stdName = document.getElementById("stdName")
// var stdAge = document.getElementById("stdAge")
// var stdClass = document.getElementById("stdClass")
// var stdHtml = document.getElementById("stdHtml")
// var stdCss = document.getElementById("stdCss")
// var stdJs = document.getElementById("stdjs")

// stdName.innerHTML = stdObj.stdName
// stdAge.innerHTML = stdObj.stdAge
// stdClass.innerHTML = stdObj.stdClass
// stdHtml.innerHTML = stdObj.stdHtml
// stdCss.innerHTML = stdObj.stdCss
// stdJs.innerHTML = stdObj.stdJs



var stdResult = {
    stdName : "muniba",
    stdClass : "web&mobile",
    htmlMarls : 58,
    cssmarks : 69,
    jsMarks : 74,
}
totalMarks : function() {
    var obtMarks = 0
    for(var key in this.StdMarks){
        console.log(this.StdMarks[key])
    }

    
}








































        














