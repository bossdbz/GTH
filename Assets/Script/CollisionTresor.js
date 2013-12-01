#pragma strict

var tresor : GameObject;
var world : GameObject;


function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		Destroy(tresor);
		world.SendMessage("AddTresor");
		if( audio ){
			audio.Play();
		}
	}
}