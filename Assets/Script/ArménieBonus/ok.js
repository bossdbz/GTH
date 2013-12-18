#pragma strict

function Start () {
	//GameObject.Find("First Person Controller").GetComponent(MonoBehaviour).active = false;
	//transform.parent.gameObject.active = true;
	
}

function Update () {

}


/**
Mouse Down Event Handler
*/
function OnMouseDown()
{
	// if we clicked the play button
	if (this.name == "BouttonOK")
	{
		transform.parent.gameObject.active = false;
		//GameObject.Find("First Person Controller").active = true;
	}
}