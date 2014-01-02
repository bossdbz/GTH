#pragma strict


var eltQuestion : GameObject[];

function Start () {

}

function Update () {

}


function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
	
		Time.timeScale = 0.0;
		//go.active = true;
		for(var eltQ : GameObject in eltQuestion){
			eltQ.gameObject.active = true;
			
		}
		
		
	
	}
}