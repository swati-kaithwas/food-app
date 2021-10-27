async function getData(url){

    let res=await fetch(url)
    let data=await res.json()

    return data;
}


function append(data,container) {
   console.log(data);
   
   data.categories.forEach(({strArea,strCategoryDescription,strCategory,strMeal,strCategoryThumb,strTags,strYoutube}) => {
        // console.log(strArea,strInstructions,strCategory,strMeal,strMealThumb,strTags,strYoutube);
            let divx=document.createElement("div");
            //  let div=document.createElement("div");
            let h1=document.createElement("h1");
                 h1.textContent=strArea;
      
            let p=document.createElement("p");
             p.textContent=strCategoryDescription ;

             
            let div3=document.createElement("div");
             div3.textContent=strCategory;
     
             
            let div4=document.createElement("div");
             div4.textContent=strMeal;

             
            let img=document.createElement("img");
             img.src=strCategoryThumb;


             
            let div5=document.createElement("div");
             div5.textContent=strTags;

          //  let you=strYoutube.substring(32);  
          //  console.log(you);
          //  div.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/${you}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    
         divx.append(h1,p,div3,div4,div5);
         container.append(divx,img);
      });
    }
   
    function searching(){
      
        let search_div=document.getElementById("search_item");
        search_div.onclick=function(){ser();}
 function ser()
  {
      alert("hello");
    //   window.location.href="search.html";
  }
 
     }
 export{ getData , append ,searching}
 
