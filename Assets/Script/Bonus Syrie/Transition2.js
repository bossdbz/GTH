#pragma strict

private var Incomplet : GUIText;


function Awake(){
	if (GameVariable.nbrTresorBonus < 10) {
	Incomplet = GameObject.Find("GameOver/Incomplet").GetComponent(GUIText);
	}
}




var levelToLoad : String = "Syrie";
function OnTriggerEnter( other : Collider ) {

if (GameVariable.nbrTresorBonus == 10) {
Application.LoadLevel( levelToLoad );
}


else {

Incomplet.enabled = true;

GameVariable.nbrVie--;

GameVariable.nbrTresorBonus=0;

Application.LoadLevel("Bonus Syrie");
}

}


function Start () {

}


function Update(){
}