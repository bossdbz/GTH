#pragma strict

public var monde:GameObject; 


function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Destroy(gameObject);
		monde = GameObject.Find("World");
		monde.GetComponent(Pieces).AddScore();
		if(((monde.GetComponent(Pieces).nbPieces) % 500) == 0)
		{
			monde.GetComponent(Vie).ajouterVie();
		}
		
	}
}