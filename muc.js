let listTask= [];



$(".nutbam").click(function () {
  var task=document.getElementById("dientask").value;
  if ( task == ""){
    alert("hãy điền task")
    return 
  }


const luu={
  task:task,
};

listTask.push(luu);
localStorage.setItem("listTask", JSON.stringify(listTask));

const addHTML=` 
<div class="khungnho">
<div class="view">
<p class="chu">${task}</p></div> 
<button class="xoa1" onclick="xoapt()">✖</button>

</div>`



$(".tep").append(addHTML);
 

});


function xoapt(){

$(".khungnho").click(function () {
    $(this).remove(); 

  });
 
  listTask.splice("listTask", 1);
  localStorage.removeItem("listTask");
  localStorage.setItem("listTask", JSON.stringify(listTask));

}
function xoahet(){
   $(".khungnho").remove();
   let zero=[]
   
   localStorage.removeItem("listTask");
   localStorage.setItem("listTask", JSON.stringify(zero));
  
  
}

function readTask(){
  listTask = localStorage.getItem("listTask");
  listTask = JSON.parse(listTask);
  console.log(listTask);
  let tasksHTML = "";
  for (element of listTask){
    console.log(element);
    tasksHTML +=`<div class="khungnho">
    <div class="view">
    <p class="chu">${element.task}</p></div> 
    <button class="xoa1" onclick="xoapt()">✖</button>
    
    </div>`
    
  }
  document.querySelector(".tep").innerHTML = tasksHTML
}
readTask();

