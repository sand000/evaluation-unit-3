let arr1 = JSON.parse(localStorage.getItem("purchase"));
console.log(arr1);

let arr2 = JSON.parse(localStorage.getItem("rem"));
console.log(arr2);


let balance = document.getElementById("balance");
for(let i=0; i<arr2.length; i++){
    balance.innerText = arr2[i]
}

let arr = JSON.parse(localStorage.getItem("user")) ;

let purchased_vouchers = document.getElementById("purchased_vouchers");
let wallet_balance =document.getElementById("wallet_balance");
for(let a=0; a<arr.length; a++){
  wallet_balance.innerText = arr[a].amount;
}

arr1.map((el) =>{
  

purchased_vouchers.innerText = null;
  let div = document.createElement("div");

  let name = document.createElement("p");
  name.innerText = el.name;

  let image = document.createElement("img");
  image.src = el.image;
  image.setAttribute("id","img");

  let price = document.createElement("p");
  price.innerText =+ el.price;

  div.append(image, name, price);
  purchased_vouchers.append(div);
});