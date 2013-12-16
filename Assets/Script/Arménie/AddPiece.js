#pragma strict

var world : GameObject;


function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		Destroy(gameObject);
		if( (GameVariable.nbrPiece % 50) == 0 ){
			GameVariable.nbrVie++;
		}
		world.SendMessage("AddPiece");
		if( audio ){
			audio.Play();
		}
	}
}