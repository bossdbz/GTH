#pragma strict

var world : GameObject;


function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		world.SendMessage("AddTresor");
		if( audio ){
			audio.Play();
		}
		
		yield WaitForSeconds(1);
		Destroy(gameObject);
	}
}