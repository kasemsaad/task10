
var PRODUCTNAME=document.getElementById("PRODUCTNAME");
var PRODUCTPRICE=document.getElementById("PRODUCTPRICE");
var PRODUCTCATEGORY=document.getElementById("PRODUCTCATEGORY");
var PRODUCTDESCRIPTION=document.getElementById("PRODUCTDESCRIPTION");
var arr=[];
var se=document.getElementById('search');

   if(localStorage.getItem('proudcts') !== null){
   arr= JSON.parse(localStorage.getItem('proudcts'))
   display()
}
function add(){
   if(validation()==true){
      document.getElementById('error').innerHTML=''
   var product={
     
      NAME:PRODUCTNAME.value,
      PRICE:PRODUCTPRICE.value,
      CATEGORY:PRODUCTCATEGORY.value,
      DESCRIPTION:PRODUCTDESCRIPTION.value
      
         }
         arr.push(product);
      localStorage.setItem('proudcts',JSON.stringify(arr))
         display();
         clear();
      }
      

      
}

function display(){
   var box=``;
   for(var i=0;i<arr.length;i++){
      box+=`<tr>  
      <td>${arr[i].NAME}</td>
      <td>${arr[i].PRICE}</td>
      <td>${arr[i].CATEGORY}</td>
      <td>${arr[i].DESCRIPTION}</td>
      <td><button  onclick="delet(${i})" class="btn btn-outline-danger bt-sm">Delete</button></td>
      <td><button id="Update" onclick="update(${i})" class="btn btn-outline-success bt-sm">Update</button></td>
                </tr>
`
   } 
   document.getElementById('show').innerHTML= box;

}
function clear(){
   PRODUCTNAME.value=``;
   PRODUCTPRICE.value=``;
   PRODUCTCATEGORY.value=``;
   PRODUCTDESCRIPTION.value=``;  
}
function delet(productIndex){
    arr.splice(productIndex,1)
    localStorage.setItem('proudcts',JSON.stringify(arr))
    display()
    
}
function update(id){
var box2=``;
   box2+=`<tr>  
   <td>   <input  type="text" id="input1" class=" "  placeholder="">   </td>
   <td>   <input  type="text" id="input2" class=" "  placeholder="">   </td>
   <td>   <input  type="text" id="input3" class=" "  placeholder="">   </td>
   <td>   <input  type="text" id="input4" class=" "  placeholder="">   </td>
   <td><button  onclick="delet(${id})" class="btn btn-outline-danger bt-sm">Delete</button></td>
   <td><button id="Update" onclick="savedata(${id})" class="btn btn-outline-success bt-sm">save</button></td>
             </tr>
`
document.getElementById('show').innerHTML= box2;
document.getElementById('input1').value= arr[id].NAME
document.getElementById('input2').value= arr[id].PRICE
document.getElementById('input3').value= arr[id].CATEGORY
document.getElementById('input4').value= arr[id].DESCRIPTION
} 
function savedata(id){
   arr[id].NAME=document.getElementById('input1').value
   arr[id].PRICE=document.getElementById('input2').value
   arr[id].CATEGORY=document.getElementById('input3').value
   arr[id].DESCRIPTION=document.getElementById('input4').value
   localStorage.setItem('proudcts',JSON.stringify(arr))
   display()
}
function search(){
  var y=se.value
var box3=``;
   for(var i=0;i<arr.length;i++){
      if(arr[i].NAME.toUpperCase().includes(y.toUpperCase())==true){
         box3+=`<tr>  
         <td>${arr[i].NAME}</td>
         <td>${arr[i].PRICE}</td>
         <td>${arr[i].CATEGORY}</td>
         <td>${arr[i].DESCRIPTION}</td>
         <td><button  onclick="delet(${i})" class="btn btn-outline-danger bt-sm">Delete</button></td>
         <td><button id="Update" onclick="update(${i})" class="btn btn-outline-success bt-sm">Update</button></td>
                   </tr>
   `
   document.getElementById(`embty`).innerHTML=""

      }
      else{
         document.getElementById(`embty`).innerHTML="Embty...."
      }

   } 
   document.getElementById('show').innerHTML= box3;

} 
function validation(){
var regx=/^[A-Z][a-z]{3,10}$/
if(regx.test(PRODUCTNAME.value)==true)
return true
else {
   return document.getElementById('error').innerHTML=' <div class="alert alert-danger"> Invalid Name</div>'
}


}