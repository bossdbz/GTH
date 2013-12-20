#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {

if(other.tag == "Player")
{
	//Destroy(gameObject);
	GameViran.nb=0;
	Application.LoadLevel("Iran"); 
}

}