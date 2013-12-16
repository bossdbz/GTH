#pragma strict



private var textTresor : GUIText;
private var textPiece : GUIText;
private var textVie : GUIText;

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
	textVie = GameObject.Find("InterfaceJeux/TextVie").GetComponent(GUIText);
	OnGUI();
}

function OnGUI() {
	textTresor.text = "Tresor : " + GameVariable.nbrTresor + "";
	textPiece.text = "Piece : " + GameVariable.nbrPiece + "";
	textVie.text = "Vie : " + GameVariable.nbrVie + "";
}
