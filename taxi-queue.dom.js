// write your DOM code here.
let passengerCount= document.querySelector(".passenger_queue_count");
let taxiCount=document.querySelector(".taxi_queue_count");
let passengerJoin=document.querySelector(".join_queue");
let passengerLeave=document.querySelector(".leave_queue");
let taxiJoin=document.querySelector(".join_taxi_queue");
let taxiLeave=document.querySelector(".depart");
let error=document.querySelector(".errorMessage");
let info= document.querySelector(".infoMessage");

// DOM element references



// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events
if(passengers===null){
passengerCount.innerHTML=0;
}

else{
passengerCount.innerHTML=passengers;
}

if(taxis===null){
taxiCount.innerHTML=0;
}

else{
taxiCount.innerHTML=taxis;
}
function join(){
	
taxiQueue.joinQueue();
passengerCount.innerHTML=taxiQueue.queueLength();
info.innerHTML= taxiQueue.getInfoMessage();
}
passengerJoin.addEventListener("click",join);


function leave(){
	
taxiQueue.leaveQueue();
passengerCount.innerHTML=taxiQueue.queueLength();

}
passengerLeave.addEventListener("click",leave);


function taxi_join(){

taxiQueue.joinTaxiQueue();
taxiCount.innerHTML=taxiQueue.taxiQueueLength();
info.innerHTML=taxiQueue.getInfoMessage();
info.style.visibility="visible";
setTimeout(

function(){
	info.style.visibility="hidden";
},3000
);

}
taxiJoin.addEventListener("click",taxi_join);


function  depart(){

taxiQueue.taxiDepart();
taxiCount.innerHTML=taxiQueue.taxiQueueLength();
passengerCount.innerHTML=taxiQueue.queueLength();
error.innerHTML=taxiQueue.getErrorMessage();

error.style.visibility="visible";
setTimeout(

function(){
	error.style.visibility="hidden";
},3000
);


}
taxiLeave.addEventListener("click",depart);
