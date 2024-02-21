 
 
 const allBtn = document.getElementsByClassName('add-btn')
  
 for(const btn of allBtn){
    btn.addEventListener("click",function(event){
         console.log(event.target.innerText);


         const selectedContainer = document.getElementById("inner-p")

         const div =document.createElement("div");

         const p1 =document.createElement("p");
         const p2 =document.createElement("p");
         const p3 =document.createElement("p");

         p1.innerText =seat; 
         p2.innerText=Class;
         p3.innerText=Price;

         div.appendChild(p1);
         div.appendChild(p2);
         div.appendChild(p3);
         selectedContainer.appendChild(div);

    })
 }
 
 
 
 function getConvertedValue(){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
 }

 