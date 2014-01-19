#pragma strict


private var sonClique : GameObject;

function Awake(){
	sonClique = GameObject.Find("Audio/Menu/menuClique");
}


/**
Mouse Down Event Handler
*/
function OnMouseDown()
{
	// if we clicked the play button
	if (this.name == "BouttonOK")
	{		
		sonClique.GetComponent(AudioSource).Play();
		yield WaitForSeconds(0.3);
		transform.parent.gameObject.active = false;

	}
}