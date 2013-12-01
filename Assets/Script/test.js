#pragma strict

function Start () {

}

function Update () {

}

function OnMouseDown()
{
	// if we clicked the play button
	if (this.name == "Play")
	{
		// load the game
		Application.LoadLevel("Scene1");
	}
}