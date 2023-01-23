let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let res = document.querySelector(".result")
let h2 = document.createElement("h2")
let bookbutton = document.querySelector("#booknow")
let thankDiv = document.querySelector(".thanks")
let h3 = document.createElement("h3")
let nav = document.querySelector(".nav")
let content = document.querySelector(".content")
let footer = document.querySelector(".footer")


let total;
button1.addEventListener("click", ()=>{
    let res1 = document.querySelector("#bike").value;
    total = 12* res1;
    h2.innerHTML= `Your Total Amount is ${total}`
    res.appendChild(h2)
    res1=""
})
button2.addEventListener("click", ()=>{
    let res1 = document.querySelector("#auto").value;
    total = 20* res1;
    h2.innerHTML= `Your Total Amount is ${total}`
    res.appendChild(h2)
})
button3.addEventListener("click", ()=>{
    let res1 = document.querySelector("#cab").value;
    total = 30* res1;
    h2.innerHTML= `Your Total Amount is ${total}`
    res.appendChild(h2)
})
bookbutton.addEventListener("click", ()=>{
    if(total!== undefined) {
    
    thankDiv.classList.add("sriki")
    let sriki = document.querySelector(".sriki")
    h3.innerHTML=`Thank you for booking!!!..... Your total amount is ${total} `;
    h3.style.color="#16aa51"
    sriki.appendChild(h3)
    let buttonClose = document.createElement("button");
    buttonClose.innerText="Close";
    buttonClose.className="closeButton"
    sriki.appendChild(buttonClose)
    let closeButton = document.querySelector(".closeButton")
    closeButton.addEventListener("click", ()=>{
        thankDiv.removeChild(h3)
        thankDiv.removeChild(buttonClose)
        thankDiv.classList.remove("sriki")
        nav.classList.remove("bgblur")
        content.classList.remove("bgblur")
        footer.classList.remove("bgblur")
    })
    }
})
