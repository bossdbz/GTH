﻿#pragma strict



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
<<<<<<< HEAD
        //nbrTresors = GameObject.FindGameObjectsWithTag("Tresor").Length;

        sceneName = Application.loadedLevel; 
        
=======

	sceneName = Application.loadedLevel; 




	


	if (sceneName != "Assets/Scene/Bonus Syrie.unity"){
		

			textTresor = GameObject.Find("InterfaceJeux/TextTresor").GetComponent(GUIText);
			// sceneName = Application.loadedLevel;
			textPiece = GameObject.Find("InterfaceJeux/TextPiece").GetComponent(GUIText);	
		
	
	}

	
	if (sceneName == "Assets/Scene/Bonus Syrie.unity"){
					textTresorBonus = GameObject.Find("InterfaceJeux/TextTresorBonus").GetComponent(GUIText);
				}
				
	textVie = GameObject.Find("InterfaceJeux/TextVie").GetComponent(GUIText);

				OnGUI();
}
				
>>>>>>> 7bbda6791c8636d3d3f078846cff8905201222b4

        textTresor = GameObject.Find("InterfaceJeux/TextTresor").GetComponent(GUIText);

        textPiece = GameObject.Find("InterfaceJeux/TextPiece").GetComponent(GUIText);
              
        
        if (sceneName == 7){

<<<<<<< HEAD
        textTresorBonus = GameObject.Find("InterfaceJeux/TextTresorBonus").GetComponent(GUIText);
        }
        
        textVie = GameObject.Find("InterfaceJeux/TextVie").GetComponent(GUIText);
        
        
        
        OnGUI();
=======
>>>>>>> 7bbda6791c8636d3d3f078846cff8905201222b4

}




function OnGUI() {
        
        
        
        
        textTresor.text = "Trésors : " + GameVariable.nbrTresor + "";
        
        textPiece.text = "Pièces : " + GameVariable.nbrPiece + "";

        
        
        
        textVie.text = "Vies : " + GameVariable.nbrVie + "";
        
        if (sceneName == 7) {
        textTresorBonus.text = "Trésors Bonus : " + GameVariable.nbrTresorBonus + " /10";
        }
}
