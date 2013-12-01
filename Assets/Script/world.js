#pragma strict

var tresors : int = 0;
var nbrTresors : int;

function start (){
	
}

function AddTresor () {
	tresors++;
}

private var textfield : GUIText;

function Awake(){
	nbrTresors = GameObject.FindGameObjectsWithTag("Tresor").Length;
	textfield = GameObject.Find("IntefaceJeux/TextTresor").GetComponent(GUIText);
	OnGUI();
}

function OnGUI() {
	textfield.text = tresors.ToString() + "/" + nbrTresors;
}
