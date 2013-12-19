#pragma strict

function Start () {

}

function Update () {



	
}

function OnTriggerEnter( other : Collider ) {

	var obj: GameObject = GameObject.Find("First Person Controller");
	obj.transform.transform.position.x= 1210.83;
	obj.transform.transform.position.y= 107.113;
	obj.transform.transform.position.z= 749.031;

}