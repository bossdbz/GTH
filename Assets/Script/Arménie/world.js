﻿#pragma strict



private var textTresor : GUIText;
private var textPiece : GUIText;
private var textVie : GUIText;
private var sceneName : String;
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
	
	sceneName = EditorApplication.currentScene; 
<<<<<<< HEAD

	if (sceneName != "Assets/Scene/Bonus Syrie.unity"){


	
	if (sceneName != "Assets/Scene/Bonus Syrie.unity"){

	
=======
	if (sceneName != "Assets/Scene/Bonus Syrie.unity"){
	if (sceneName != "Assets/Scene/Bonus Syrie.unity"){
>>>>>>> 5cfffb93f5626f09c28d4b3c244bd745dd154a8c
	textTresor = GameObject.Find("InterfaceJeux/TextTresor").GetComponent(GUIText);

	textPiece = GameObject.Find("InterfaceJeux/TextPiece").GetComponent(GUIText);
	
	
	
	}
	
	
	else if (sceneName == "Assets/Scene/Bonus Syrie.unity"){
	textTresorBonus = GameObject.Find("InterfaceJeux/TextTresorBonus").GetComponent(GUIText);
	}
	
	textVie = GameObject.Find("InterfaceJeux/TextVie").GetComponent(GUIText);
	
	
	
	OnGUI();
}
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

