#pragma strict

public var monde:GameObject;
var bruitpiece : AudioClip;


function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		AudioSource.PlayClipAtPoint(bruitpiece, other.transform.position);
		Destroy(gameObject);
		monde = GameObject.Find("World");
		monde.GetComponent(Pieces).AddScore();
		if(((monde.GetComponent(Pieces).nbPieces) % 500) == 0)
		{
			monde.GetComponent(Vie).ajouterVie();
		}
		
	}
}