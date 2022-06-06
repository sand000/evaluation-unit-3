let arr = JSON.parse(localStorage.getItem("user")) ;

fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
 .then( function(res){
    return res.json();
 })
  .then( function(res) {
    //  console.log(res[0].vouchers);
    append(res[0].vouchers);
  })
   .catch(function (err){
     console.log(err)
   });


let voucher_list = document.getElementById("voucher_list");
function append(data){

  data.map(function (el,i){

  let div = document.createElement("div");

  let name = document.createElement("p");
  name.innerText = el.name;

  let image = document.createElement("img");
  image.src = el.image;
  image.setAttribute("id","img")

  let price = document.createElement("p");
  price.innerText =+ el.price;

  let button = document.createElement("button");
  button.innerText = "Buy";
  button.setAttribute("class","buy_voucher");
  button.addEventListener("click",function(){
         buy(el,i);
         
  });

  div.append(image, name, price, button);
  voucher_list.append(div);
});

}



let arr1 = JSON.parse(localStorage.getItem("purchase")) || [];
let wallet_balance = document.getElementById("wallet_balance");


let arr2 = JSON.parse(localStorage.getItem("rem")) || [];


for(let i=0; i<arr.length; i++){
  wallet_balance.innerText = arr[i].amount;
}
 
// function buy
function buy(el,i){

 
  // loop for array
   for(let a=0; a<arr.length; a++){
    
      if( el.price <= arr[a].amount ){
        
          var rem =+ (arr[a].amount - el.price);
          wallet_balance.innerText = rem;
          
          alert("Hurray! purchase successful");   
        
        }
        else if(el.price > arr[a].amount){
          alert("Sorry! insufficient balance");

        }
   }
   
   arr1.push(el);
   console.log(arr1);

  localStorage.setItem("purchase",JSON.stringify(arr1)); 
  
  arr2.push(rem);
  localStorage.setItem("rem",JSON.stringify(arr2));
  
}