#pragma strict

private var world : GameObject;
private var superPiece : boolean;

function Awake(){
	world = GameObject.Find("World");
}

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		
		superPiece = gameObject.CompareTag("superPiece");
		
		if(superPiece){
			GameVariable.nbrVie++;
			GameVariable.nbrPiece += 50;
		}
		else{
			world.SendMessage("AddPiece");
		}
		
		if( ((GameVariable.nbrPiece % 50) == 0) && (!superPiece) ){
			GameVariable.nbrVie++;
		}
		
		if( audio ){
			audio.Play();
		}
		yield WaitForSeconds(1);
		Destroy(gameObject);
		
	}
}