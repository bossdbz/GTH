#pragma strict

var world : GameObject;


function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		Destroy(gameObject);
		world.SendMessage("AddTresor");
		if( audio ){
			audio.Play();
		}
	}
}