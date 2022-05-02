import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

import {ft} from "../components/fetch.js";
let new1 = JSON.parse(localStorage.getItem("news1"));

let display = (data)=>{
    if(data.length!=0){
        document.getElementById("results").innerHTML=null;
    data.forEach(({title,description,urlToImage})=>{
        
        let div1 = document.createElement("div");
        div1.setAttribute("class","news");
        div1.style.display="flex";
        div1.style.justifyContent="space-around"
        let div2 = document.createElement("div");

        
        let img = document.createElement("img")
        img.src=urlToImage;
        img.style.width="300px";
        img.style.height="80px"
        img.style.marginTop="20px"
        let p1 = document.createElement("h3");
        p1.innerText=title;
        p1.addEventListener("click",function(){
            my1(title,urlToImage,description);
        })
        let p2=document.createElement("p");
        p2.innerText=description;
        div2.append(p1,p2);
        div1.append(img,div2)
        document.getElementById("results").append(div1);
    })
    }
    
}
display(new1);

function my1(title,urlToImage,description){
    let obj={
        title:title,
        urlToImage:urlToImage,
        description:description
    }
    localStorage.setItem("news",JSON.stringify(obj));
    window.location.href="news.html";
}

let csearch = (e)=>{
    if(e.key=="Enter"){
        let q = document.getElementById("search_input").value;
        let url = `https://masai-mock-api.herokuapp.com/news?q=${q}`;
        ft(url).then((res)=>{
            console.log(res);
            display(res)
            
        })
        
    }
    

}
document.getElementById("search_input").addEventListener("keydown",csearch);

// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
