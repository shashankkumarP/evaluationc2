let ft = async (url)=>{
    let res = await fetch(url);
    let data = await res.json();
    return data.articles;
}

let csearch = (q,ft2)=>{
    let arr = [];
    class Sd{
        constructor(title,urlToImage,description){
            this.title=title;
            this.url=urlToImage;
            this.description= description;
        }
    }
    if(event.key=="Enter"){
        
        let url = `https://masai-mock-api.herokuapp.com/news?q=${q}`;
        ft2(url).then((res)=>{
            console.log(res);
            res.forEach(({description,title,urlToImage})=>{
                let div1 = document.createElement("div");
                div1.setAttribute("class","news");
                let p = new Sd(title,urlToImage,description);
                arr.push(p);
            })
            localStorage.setItem("news1",JSON.stringify(arr));
            window.location.href="search.html";
        })
        
    }
    

}


export {ft,csearch} ;