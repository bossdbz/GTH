#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		//Application.LoadLevel(EditorApplication.currentScene);
		var sceneName : String = EditorApplication.currentScene;
		
		if(sceneName == "Assets/Scene/Arménie.unity"){
			Application.LoadLevel("Arménie");
		}
		
		if(sceneName == "Assets/Scene/ArménieBonus.unity"){
			Application.LoadLevel("ArménieBonus");
		}
	}
}