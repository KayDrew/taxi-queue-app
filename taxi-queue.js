function TaxiQueue() {

let taxis=0;
let passengers=0;

	function joinQueue() {
		
		passengers= localStorage.getItem("passengers",passengers);
		
if(passengers=== null ){

passengers=1;
}
else{
passengers++;
}

localStorage.setItem("passengers",passengers);
	}

	function leaveQueue() {

passengers--;
localStorage.setItem("passengers",passengers);
	}

	function joinTaxiQueue() {
		
taxis=localStorage.getItem("taxis",taxis);

	if(taxis=== null ){

taxis=1;
}
else{
taxis++;
}

localStorage.setItem("taxis",taxis);

	}

	function queueLength() {
		
		return passengers;

	}

	function taxiQueueLength() {
		
return  taxis;
	}

	function taxiDepart(){
		
		if(taxis>0){
			
		if( passengers >=12){
taxis--;
localStorage.setItem("taxis",taxis);

passengers-=12;
localStorage.setItem("passengers",passengers);
}
else{
alert("Taxi can't  leave with less than 12 passengers");
}

}

else{
alert ("No taxis on queue");
}

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}