#pragma strict

private var world : GameObject;

function Awake () {
	world = GameObject.Find("World");
}

function Update () {
	
}

function OnTriggerEnter( other : Collider ) {
	world.SendMessage("tresorMoins");
}