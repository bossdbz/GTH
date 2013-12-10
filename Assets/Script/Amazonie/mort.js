#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {

	other.transform.position=GameVariables.CurrentPositionCheck;

}