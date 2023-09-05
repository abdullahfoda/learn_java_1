// window.alert("hello from foda");
// document.write("<h1>hello <span>page</span></h1>");
// document.createElement("");
// console.log("hellow foda");


// task 1
// let a= 1_00;
// let b= 2_00.5;
// let c= 1e2;
// let d= 2.4;


// console.log(Math.min(1_00,2_00.5,1e2,2.4));


// console.log(Math.pow(a, Math.round(d)));

// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(parseInt(d));


// console.log((Math.floor (b) /Math.ceil (d) ).toString() );
// console.log(Math.round (b) /Math.ceil (d)  );



// task2

// let a= "Elzero Web School"


// console.log(a.slice(2,5), a.charAt(5));


// console.log(a [13].toUpperCase() .repeat(8));

// console.log(a.split(" ",1));


// console.log(a.substr(0,6),a.substr(11));




// console.log(a[0].toLowerCase(),a.slice(1,length-1).toUpperCase(),a.slice(length-1).toLowerCase());


// task 3

// part 1...

// let a= 10;

// if(a < 10){
//     console.log(10);
// }

// else if(a >= 10 && a <= 40){
//     console.log("10 to 40");
// }

// else if( a > 40){
//     console.log("> 40");
// }

// else{
//     console.log("unknown");
// }


// a < 10  ? console.log(10) : a >= 10 && a <= 40 ?  console.log("10 to 40") : a > 40 ?  console.log("> 40")  : console.log("unknown") 




// part 2....

// let st= "Elzero Web School";

// if( ( st.length)*2 === "34"){

// console.log("Good");

// }


// // w may chang

// if( "..." === "W"){

// console.log("Good");

// }       ??




// if( "..." !=== "string"){
// console.log("Good");

// }       ??




// if("..." === "number"){

// console.log("Good");

// }      ??




// if("..." === "ElzeroElzero"){

// console.log("Good");

// }    ??



// task 4


// let zero = 0 ;
// let counter = 3 ;
// let my = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];


// console.log( my .slice(0,4).reverse());

// console.log(my.slice(1,3).reverse());

// console.log(my.splice(1, 1,"Elzero"));

// console.log(my[1][4], my[1][5] );





// task 5

// let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"];

// let myEmployees=["Amged","Samah","Ameer","Omar","Othman","Amany", "Samia"];


// let showcount = 5;
// let x = 5;



// document.write(`<h1>We Have ${x} Admins</h1>`);

// for(let i =0; i < showcount; i++){
//     document.write(`<div>`);
//     document.write( `<hr><h3>The admin For Team[${i+1}] is ${myAdmins[i]}</h3></hr>`);
    
    
//     for(let j=0; j<myEmployees.length; j++){
        
//         document.write(`[${j+1}]<p>${myEmployees[j]}</p>`)
//     }

//     document.write(`</div>`);

// }


// task 6


// let mystring ="1,2,3,E,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,1,2,0,l";

// let solution = mystring.split("").map(function(element){
// return isNaN(parseInt(element))? element :"" ;

// }
// )

// .join("");
// console.log(solution);
