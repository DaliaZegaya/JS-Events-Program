
var userDate= document.getElementById("date_input")
var userName= document.getElementById("text_input")
var nowDate= new Date ()

function someFunc() {
    if (nowDate.getFullYear()-getYear(userDate.value)>18) {
        msg_div.innerHTML="<h1 id='h1_id' style= 'color: blue';>"+ "WELCOME"+" "+ userName.value + "</h1>"+
        "<img src= https://c.tenor.com/z1wxrzXebmMAAAAC/tnrdiscord-tnrwelcome.gif>"

    }
    else {
        msg_div.innerHTML= "<h1 id='h1_id' style= 'color:red';>"+ "NO ENTERY"+" "+ userName.value + "</h1>"+
         "<img src= https://c.tenor.com/rOd5JUvCyKAAAAAi/no-entry-patovica.gif>"
    }
}



function getYear(str) {
    var year= ""
    for (var i=0; i<str.length; i++) {
        year+=str[i]
        if (str[i]=="-"){
            return parseInt (year)
        }
    }
}

/////////exercise 2///////////
function greenColor () {
    document.getElementById("h1_id").style.color= "green"
}

function refresh () {
    window.location.reload()
}

/////////exercise 3///////////
var myArray= []
function getFullName () {
    var firstName= document.getElementById("first_name")
    if (myArray.length<4) {
        myArray.push (firstName.value)
    }
    console.log(myArray);
}

function fullNameList () {
    var lastName= document.getElementById("last_name")
    var fullName= document.getElementById("my_list")
    for (var i=0; i<myArray.length;i++) {
        fullName.innerHTML+= "<li>"+myArray[i]+" "+lastName.value+"</li>"
    }

}



    


