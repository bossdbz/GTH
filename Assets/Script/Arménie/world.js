#pragma strict



private var textTresor : GUIText;
private var textPiece : GUIText;
private var textVie : GUIText;
private var sceneName : String;

function AddTresor () {
	GameVariable.nbrTresor++;
}

function AddPiece () {
	GameVariable.nbrPiece++;
}



function Awake(){
	//nbrTresors = GameObject.FindGameObjectsWithTag("Tresor").Length;
	
	sceneName = EditorApplication.currentScene(); 
	
	textTresor = GameObject.Find("InterfaceJeux/TextTresor").GetComponent(GUIText);
	//if(GameObject.Find("InterfaceJeux/TextPiece")){
		textPiece = GameObject.Find("InterfaceJeux/TextPiece").GetComponent(GUIText);
	//}
	textVie = GameObject.Find("InterfaceJeux/TextVie").GetComponent(GUIText);
	OnGUI();
}

function OnGUI() {
	if (sceneName == "Assets/Scene/Bonus Syrie.unity") {
	textTresor.text = "Trésors Bonus : " + GameVariable.nbrTresor + " /10";
	}
	else {
	textTresor.text = "Trésors : " + GameVariable.nbrTresor + "";
	}
	
	textPiece.text = "Pièces : " + GameVariable.nbrPiece + "";
	textVie.text = "Vies : " + GameVariable.nbrVie + "";
}
