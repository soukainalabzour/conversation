let textmsg = document.getElementById("msg");
let Send = document.getElementById("send");
let Box = document.getElementById("Box");
let per1 = document.getElementById("per1");
let per2 = document.getElementById("per2");
let h1 = document.querySelector("h2");
let User = "per1";
let btn = document.getElementById("clear")




per1.addEventListener("click", function(){
   User =  "per1";
   h1.innerHTML = "Jhon typing..."
   btn.addEventListener("click", function(){
    h1.remove();
})
})

per2.addEventListener("click", function(){
    User =  "per2";
    h1.innerHTML = "Catia typing..."
    btn.addEventListener("click", function(){
       h1.remove();
    })
 
 })


Send.addEventListener("click", function(){
    if(User == "per1"){
        let myTime = new Date();

    let createP = document.createElement("p");
    var br = document.createElement("br");
    Box.appendChild(br);
    createP.innerHTML = textmsg.value + " " + myTime.getHours() +":"+  myTime.getMinutes() ; 
    
    createP.style.backgroundColor = "#66bfbf";
    Box.appendChild(createP);

    btn.addEventListener("click", function(){
        createP.remove();
        

    })
    

}
});

Send.addEventListener("click", function(){
    if(User == "per2"){
        let myTime = new Date();
    let createP = document.createElement("p");
    var br = document.createElement("br");
    Box.appendChild(br);
    createP.innerHTML =  textmsg.value  + " " + myTime.getHours() +":"+  myTime.getMinutes() ;
    createP.style.backgroundColor = "#f76b8a";
    Box.appendChild(createP);


    btn.addEventListener("click", function(){
        createP.remove();
        
    })
    
}
})



