#pragma strict

var levelToLoad : String = "Bonus Syrie";
function OnTriggerEnter( other : Collider ) {
Application.LoadLevel( levelToLoad );

}

function Start () {

}

function Update () {

}