#pragma strict

public var monde:GameObject; 
var charMotor : CharacterMotor;
var crimort : AudioClip;

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		
		AudioSource.PlayClipAtPoint(crimort, other.transform.position);
		charMotor = other.GetComponent(CharacterMotor);
		charMotor.enabled = false;
		
		yield WaitForSeconds(3);
		charMotor.enabled = true;
		monde = GameObject.Find("World");
		monde.GetComponent(Vie).PerdreVie();
		if(Application.loadedLevel == 10)
		{
			other.transform.position = Vector3(17,3,88);
		}
		else if(Application.loadedLevel == 2)
		{
			other.transform.position = Vector3(128.0188,34,108.5953);
		}
		
	}
}