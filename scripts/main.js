  
let arr = JSON.parse(localStorage.getItem("user")) || [];

function submit(){

  let obj = {
   name : document.getElementById("name").value,
   email : document.getElementById("email").value,
   address : document.getElementById("address").value,
   amount : document.getElementById("amount").value
   }
  
   arr.push(obj);

   localStorage.setItem("user",JSON.stringify(arr));
   window.location.reload();

}