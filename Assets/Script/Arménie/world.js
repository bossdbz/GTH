#pragma strict



private var textTresor : GUIText;
private var textPiece : GUIText;

function AddTresor () {
	GameVariable.nbrTresor++;
}

function AddPiece () {
	GameVariable.nbrPiece++;
}



function Awake(){
	//nbrTresors = GameObject.FindGameObjectsWithTag("Tresor").Length;
	textTresor = GameObject.Find("InterfaceJeux/TextTresor").GetComponent(GUIText);
	textPiece = GameObject.Find("InterfaceJeux/TextPiece").GetComponent(GUIText);
	OnGUI();
}

function OnGUI() {
	textTresor.text = GameVariable.nbrTresor + "";
	textPiece.text = GameVariable.nbrPiece + "";
}
