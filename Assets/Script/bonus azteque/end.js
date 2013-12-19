#pragma strict



function Start () {
	Time.timeScale = 1.0;
}

function Update () {

}

function OnTriggerEnter( other : Collider ) {

	Application.LoadLevel("Angleterre");

}