#pragma strict

private var world : GameObject;
var contenu : GameObject[];

function Awake(){
	world = GameObject.Find("World");
}

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
	
		world.SendMessage("AddTresor");
		
		if( audio ){
			audio.Play();
		}
		
		yield WaitForSeconds(1);
		Destroy(gameObject);
		
		enable(true);
	}
}

function enable(bool : boolean){
	
	if( bool ){
	
		for(var eltQ : GameObject in contenu){
			eltQ.gameObject.active = true;		
		}
				
	} 
	
	else{
	
		for(var eltQ : GameObject in contenu){
			eltQ.gameObject.active = false;			
		}
	
	}
}