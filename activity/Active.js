const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
let a = 0;
let b = 0;
plus.addEventListener("click",()=>{
  a++;
  duration1.value = a;
  console.log(a);
  if(a <= 0){
    duration1.value = b
    console.log(b)
  }
})
minus.addEventListener("click",()=>{
  a--;
  console.log(a)
  duration1.value = a;
  if(a <= 0){
    a =
    duration1.value = b
  }
})
const name1 = document.getElementById('Name');
const description1 = document.getElementById('Description');
const activity1 = document.getElementById('Activity');
const duration1 = document.getElementById('Duration');
const date1 = document.getElementById('Date');
const sbmbtn = document.getElementById('sbmbtn');
const updateBtn = document.getElementById('updateBtn');
const btntext = document.getElementById('buttontext');
const idtext = document.getElementById('idhid');
const modal = document.getElementById("myModal");
const modalConfirm = document.getElementById('modalConfirm');
const modalDelete = document.getElementById('modalDelete');
const modalUpdate = document.getElementById('modalUpdate');
const dateformat = document.querySelectorAll('.dateformat');
let deleteId;
let deleteYes = false;


let item = localStorage.getItem("token");
let result;
let i = 0;
let idresponse;
let datadate
console.log(item)
function ConfirmModal(){
  if(name1.value != "" && description1.value != "" &&
    activity1.value != "" && duration1.value !="" &&
   date1.value != ""){
  modalConfirm.style.display = "block";
}
}
function modalConfirmYes(){
  getActivity();
}
function modalConfirmNo(){
  modalConfirm.style.display = "none";
}
function DeleteModal(){
  modalDelete.style.display = "block";
}
function modalDeleteYes(){
  deleteYes = true;
  console.log(deleteYes)
  deleteAC(deleteId);
}
function modalDeleteNo(){
  modalDelete.style.display = "none";
}
function UpdateModal(){
  if(name1.value != "" && description1.value != "" &&
    activity1.value != "" && duration1.value !="" &&
   date1.value != ""){
  modalUpdate.style.display = "block";
}
}
function modalUpdateYes(){
  updateform();
}

function modalUpdateNo(){
  modalUpdate.style.display = "none";
}
function getActivity(){
  console.log(activity1.value);
  if(name1.value != "" && description1.value != "" &&
     activity1.value != "" && duration1.value !="" &&
    date1.value != ""){
    const response = fetch("http://localhost:8080/api/v1/activity/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",  // Specifying the content type as JSON
        // Add any additional heapders here if needed (like authorization)
      },
      body: JSON.stringify({
      name: name1.value,
      description: description1.value,
      activityType: activity1.value,
      duration: duration1.value,
      date: date1.value
      })
    })
    console.log(activity1.value);
    console.log(date1.value)
    console.log(response)
    alert("chna")
    
    // Optional: Handle the response asynchronously
    response
    // Process the response data
    .then(res => res.json())  // Parse the response as JSON
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));  // Catch any errors
    // window.location.href = window.location.href;
    location.reload(true);

  }
}



  console.log(localStorage.getItem("token"))
    const table = document.getElementById('fetched')
        const response = fetch("http://localhost:8080/api/v1/activity/", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        // "Content-Type": "application/json",  // Specifying the content type as JSON
        // Add any additional heapders here if needed (like authorization)
      },
    
    })
    // const json = await response.json();
    response
    // Process the response data
    .then(res => res.json())  // Parse the response as JSON
    .then(data => result = data)
    .then(data => getFetch(data))
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));  // Catch any errors
    console.log("response",response);
   function getFetch(res){ 
      console.log(res)
    let table1 = '<table>';
      table1 += '<tr><th>Name</th><th>Description</th><th>Activity</th><th>Duration</th><th>Date</th><th>DELETE</th><th>Update</th></tr>' 
      res.data.map((resp) => {
        table1 = table1 + '<tr>',
          table1 = table1 + '<td>' + `${resp.name}` + '</td>',
          table1 = table1 + '<td>' + `${resp.description}` + '</td>',
          table1 = table1 + '<td>' +  `${resp.activityType}` + '</td>',
          table1 = table1 + '<td>' +  + `${resp.duration}` + '</td>',
          table1 = table1 + '<td>' +`${moment(resp.date).format("Do MMM Y")}` + '</td>', 
          table1 = table1 + '<td>' +  `<button onclick="deleteAC('${resp._id}')" style="color:white; width:auto; background-color:red;" >X</button>` + '</td>',
          table1 = table1 + '<td>' +  `<button onclick="putAC('${
            [resp._id,resp?.name , resp?.description , resp?.activityType, resp?.duration,resp?.date] }')"
     style="color:white; width:auto; background-color:blue;" >EDIT</button>` + '</td>' + '</tr>'
    //  let buttontext = `<button id="updateBtn" style="width: auto;" class="btn btn-success form-control" type="button" onclick="updateform(${resp?._id})">Update</button>`
    //  btntext.innerHTML = buttontext;
        });
        
        table1 += '</table>'
        table.innerHTML = table1;
        console.log()
        console.log("finished");
}

function deleteAC(result){
  deleteId = result;
  DeleteModal();
  if(deleteYes){
  console.log(result)
  const response2 = fetch("http://localhost:8080/api/v1/activity/delete", {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",  // Specifying the content type as JSON
      // Add any additional heapders here if needed (like authorization)
    },
    body: JSON.stringify({
    id: result
    })
  })
  console.log(response2)
  
  response2
  // Process the response data
  .then(res => res)  // Parse the response as JSON
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));  // Catch any errors
  if(response2.status = 204){
    alert("Deleted")
    location.reload(true);
    // window.location.href = window.location.href;
  }
}
}

// function updateId(id){
//   console.log(id)
//    id = idresponse;
// }

const putAC = (resp) =>{
  
  console.log(resp)
  // const response = fetch(`http://localhost:8080/api/v1/activity/update`, {
  //   method: "GET",
  //   headers: {
  //     "Authorization": `Bearer ${localStorage.getItem("token")}`,
  //     // "Content-Type": "application/json",  // Specifying the content type as JSON
  //     // Add any additional heapders here if needed (like authorization)
  //   },
  
  // })
  // // const json = await response.json();
  // response
  // // Process the response data
  // .then(res => res.json())  // Parse the response as JSON
  // .then(data => result = data)
  // .then(data => putUpdateAC(data))
  // .then(data => console.log(result))
  // .catch(error => console.error("Error:", error));
  let c = resp.split(',')
  datadate = c[5]
  console.log(datadate);
  putUpdateAC(c)
}

function putUpdateAC(respond){
  a = respond[4]
 idtext.value = respond[0]; 
 name1.value = respond[1],
 description1.value = respond[2],
 activity1.value = respond[3],
 duration1.value = respond[4],
 date1.value =  datadate.split('T')[0];
 change();
 }
 function change(){
 sbmbtn.style.display = "none";
 updateBtn.style.display = "inline";
 }

function updateform(result2){
  // console.log("updateform",result2)
  if(name1.value != "" && description1.value != "" &&
    activity1.value != "" && duration1.value !="" &&
   date1.value != ""){
   const response = fetch("http://localhost:8080/api/v1/activity/update", {
     method: "PUT",
     headers: {
       "Authorization": `Bearer ${localStorage.getItem("token")}`,
       "Content-Type": "application/json",  // Specifying the content type as JSON
       // Add any additional heapders here if needed (like authorization)
     },
     body: JSON.stringify({
     id: idtext.value,
     name: name1.value,
     description: description1.value,
     activityType: activity1.value,
     duration: duration1.value,
     date: date1.value
     })
   })
   console.log(response)
   
   
   // Optional: Handle the response asynchronously
   response
    // Process the response data
    .then(res => res.json())  // Parse the response as JSON
    .then(data => result = data)
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));  // Catch any errors
    console.log("response",response);
    modalUpdate.style.display = "none";
    openModal()
    // location.reload(true);
 }
 }

 function openModal(){
  modal.style.display = "block";
  setTimeout(()=>{
    location.reload(true)
  },2000)
 }

function putValue(value){
  console.log(value)
  let tookValue = value;
  activity1.value += tookValue;
}