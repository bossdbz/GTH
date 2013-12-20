#pragma strict



private var textTresor : GUIText;
private var textPiece : GUIText;
private var textVie : GUIText;
private var sceneName : int;
private var textTresorBonus : GUIText;



function AddTresor () {
	GameVariable.nbrTresor++;
}

function AddPiece () {
	GameVariable.nbrPiece++;
}


function AddTresorBonus () {
	GameVariable.nbrTresorBonus++;
}



function Awake(){
	//nbrTresors = GameObject.FindGameObjectsWithTag("Tresor").Length;
	sceneName = Application.loadedLevel; 
	
	textTresor = GameObject.Find("InterfaceJeux/TextTresor").GetComponent(GUIText);

	textPiece = GameObject.Find("InterfaceJeux/TextPiece").GetComponent(GUIText);
	
	
	
	
	
	
	if (sceneName == 7){
	textTresorBonus = GameObject.Find("InterfaceJeux/TextTresorBonus").GetComponent(GUIText);
	}
	
	textVie = GameObject.Find("InterfaceJeux/TextVie").GetComponent(GUIText);
	
	
	
	OnGUI();

}

function OnGUI() {
	
	
	
	if (sceneName != "Assets/Scene/Bonus Syrie.unity"){
	textTresor.text = "Trésors : " + GameVariable.nbrTresor + "";
	
	textPiece.text = "Pièces : " + GameVariable.nbrPiece + "";
	
	}
	
	
	textVie.text = "Vies : " + GameVariable.nbrVie + "";
	
	if (sceneName == "Assets/Scene/Bonus Syrie.unity") {
	textTresorBonus.text = "Trésors Bonus : " + GameVariable.nbrTresorBonus + " /10";
	}
}

