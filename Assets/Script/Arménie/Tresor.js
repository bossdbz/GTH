#pragma strict

private var nbrTresor : int = 3;

function Start () {

}

function Update () {
	if ( nbrTresor == 0 ){
		Application.LoadLevel("ArménieBonus");
	}
}




function tresorMoins(){
	nbrTresor--;
	Debug.Log(nbrTresor);
}