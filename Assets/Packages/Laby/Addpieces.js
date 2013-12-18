#pragma strict

public var monde:GameObject; 


function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Destroy(gameObject);
		monde = GameObject.Find("World");
		monde.GetComponent(Pieces).AddScore();
		//monde.GetComponent(Temps).SendMessage("delai");
	}
}