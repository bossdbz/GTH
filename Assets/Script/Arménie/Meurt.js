#pragma strict



function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		//Application.LoadLevel(EditorApplication.currentScene);
		var sceneName : String = EditorApplication.currentScene;
		GameVariable.nbrVie--;
		
		if(GameVariable.nbrVie == 0){
			Application.LoadLevel("GameOver");
		}	
		else if(sceneName == "Assets/Scene/Arménie.unity"){
			Application.LoadLevel("Arménie");
		}
		
		else if(sceneName == "Assets/Scene/Bonus Syrie.unity"){
			GameVariable.nbrTresorBonus=0;
			Application.LoadLevel("Bonus Syrie");
		}
		
		else{
			Application.LoadLevel("ArménieBonus");
		}
	}
}