import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

import {ft} from "../components/fetch.js";

class Sd{
    constructor(title,urlToImage,description){
        this.title=title;
        this.urlToImage=urlToImage;
        this.description= description;
    }
}
let arr =[];
let csearch = (e)=>{
    if(e.key=="Enter"){
        let q = document.getElementById("search_input").value;
        let url = `https://masai-mock-api.herokuapp.com/news?q=${q}`;
        ft(url).then((res)=>{
            console.log(res);
            res.forEach(({description,title,urlToImage})=>{
              
                let p = new Sd(title,urlToImage,description);
                arr.push(p);
            })
            localStorage.setItem("news1",JSON.stringify(arr));
            window.location.href="search.html";
        })
        
    }
    

}


let ch = document.getElementById("sidebar").children;

for(let i=0;i<ch.length;i++)
{
    ch[i].addEventListener("click",mm);
}

function mm(){
    let ids = this.id;
    let q1 = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${ids}`
    ft(q1).then((res)=>{
        display(res);
              
            
        
    })
}
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


document.getElementById("search_input").addEventListener("keydown",csearch);
// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
