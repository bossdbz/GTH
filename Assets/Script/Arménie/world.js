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
//<<<<<<< HEAD
//<<<<<<< HEAD
	sceneName = Application.loadedLevel; 
	
//=======
	//sceneName = EditorApplication.currentScene; 
//<<<<<<< HEAD



	

//=======
	if (sceneName != "Assets/Scene/Bonus Syrie.unity"){
		if (sceneName != "Assets/Scene/Bonus Syrie.unity"){
//>>>>>>> 56179bc8e719da66e25bd651f85405aa0150162a
//>>>>>>> 8681734b956a5a0e3a125e32d8c6a32837e94451
			textTresor = GameObject.Find("InterfaceJeux/TextTresor").GetComponent(GUIText);


	sceneName = Application.loadedLevel; 
	
	
	

	textTresor = GameObject.Find("InterfaceJeux/TextTresor").GetComponent(GUIText);
//>>>>>>> 6b943fcf899ffd954b5c757f5592045b32b90e66

			textPiece = GameObject.Find("InterfaceJeux/TextPiece").GetComponent(GUIText);
	
	
	
//<<<<<<< HEAD
//<<<<<<< HEAD
	
	
	
			if (sceneName == 7){
//=======

	
	
				if (sceneName == "Assets/Scene/Bonus Syrie.unity"){
//>>>>>>> 8681734b956a5a0e3a125e32d8c6a32837e94451
					textTresorBonus = GameObject.Find("InterfaceJeux/TextTresorBonus").GetComponent(GUIText);
				}
//=======

	
	
	
	


	
	
	if (sceneName == 7){

	textTresorBonus = GameObject.Find("InterfaceJeux/TextTresorBonus").GetComponent(GUIText);
	}
//>>>>>>> 6b943fcf899ffd954b5c757f5592045b32b90e66
	
				textVie = GameObject.Find("InterfaceJeux/TextVie").GetComponent(GUIText);
	
	
	
//<<<<<<< HEAD
				OnGUI();
//<<<<<<< HEAD

//=======
			}
//<<<<<<< HEAD

//=======
//>>>>>>> 8681734b956a5a0e3a125e32d8c6a32837e94451
		}
//>>>>>>> 56179bc8e719da66e25bd651f85405aa0150162a
	}

//=======
	OnGUI();

}



//>>>>>>> 6b943fcf899ffd954b5c757f5592045b32b90e66

function OnGUI() {
	
	
	
	
	textTresor.text = "Trésors : " + GameVariable.nbrTresor + "";
	
	textPiece.text = "Pièces : " + GameVariable.nbrPiece + "";

	
	
	
	textVie.text = "Vies : " + GameVariable.nbrVie + "";
	
	if (sceneName == 7) {
	textTresorBonus.text = "Trésors Bonus : " + GameVariable.nbrTresorBonus + " /10";
	}
}

