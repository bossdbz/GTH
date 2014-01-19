#pragma strict

var text : GameObject;


function Start () {

}

function Update () {

}


function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		text.active = false;
		other.gameObject.GetComponent(nom).s = gameObject.name;
		Destroy(gameObject);
	}


}