#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {

	yield WaitForSeconds (10);
	Application.LoadLevel ("Temple Aztèque");

}