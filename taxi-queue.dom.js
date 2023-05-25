// write your DOM code here.
let passengerCount= document.querySelector(".passenger_queue_count");
let taxiCount=document.querySelector(".taxi_queue_count");
let passengerJoin=document.querySelector(".join_queue");
let passengerLeave=document.querySelector(".leave_queue");
let taxiJoin=document.querySelector(".join_taxi_queue");
let taxiLeave=document.querySelector(".depart");

// DOM element references



// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events
passengerCount.innerHTML=taxiQueue.queueLength();
taxiCount.innerHTML=taxiQueue.taxiQueueLength();

function join(){
	
taxiQueue.joinQueue();
passengerCount.innerHTML=taxiQueue.queueLength();

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

}
taxiJoin.addEventListener("click",taxi_join);


function  depart(){

taxiQueue.taxiDepart();
taxiCount.innerHTML=taxiQueue.taxiQueueLength();
passengerCount.innerHTML=taxiQueue.queueLength();


}
taxiLeave.addEventListener("click",depart);
