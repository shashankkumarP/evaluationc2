// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let news = JSON.parse(localStorage.getItem("news"));

let fte = (news)=>{
    if(news!=null){
        document.getElementById("results").innerHTML=null;
    
        let img = document.createElement("img");
        img.src=news.urlToImage;
        let p1 = document.createElement("h3");
        p1.innerText=news.title;
        let p2 = document.createElement('p');
        p2.innerText=news.description;
        
        document.getElementById("results").append(img,p1,p2);
    }
    

}
fte(news)
import {ft,csearch} from "../components/fetch.js";


let q = document.getElementById("search_input").value;
csearch(q,ft)
document.getElementById("search_input").addEventListener("keydown",csearch);