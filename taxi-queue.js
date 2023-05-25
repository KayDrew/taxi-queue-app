let taxis=localStorage.getItem("taxis");
let passengers= localStorage.getItem("passengers");


function TaxiQueue() {


	function joinQueue() {
		
if(passengers=== null ){

passengers=1;
}
else{
passengers++;
}

localStorage.setItem("passengers",passengers);
	}

	function leaveQueue() {

if(passengers>0){
passengers--;
localStorage.setItem("passengers",passengers);
	}
}
	function joinTaxiQueue() {
		


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