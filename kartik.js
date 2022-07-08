const api_url="https://jsonplaceholder.typicode.com/users";
function getapidata(URL)
{
var x=fetch(URL);
x.then((res)=>{return(res.json())}).then((data)=>displaydata(data)).catch((error)=>console.log(error.message));
}
function displaydata(APIDATA){
console.log(APIDATA);
for(let user of APIDATA){
   let tr=document.createElement('tr');
   let td1=document.createElement('td');
   let td2=document.createElement('td');
   let td3=document.createElement('td');
   let td4=document.createElement('td');
   td1.innerText=`${user.id}`
   td2.innerText=`${user.name}`
   td3.innerText=`${user.email}`
   td4.innerText=`${user.phone}`
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   tr.appendChild(td4);
   document.getElementById('mytable').appendChild(tr);
}
}
getapidata(api_url);