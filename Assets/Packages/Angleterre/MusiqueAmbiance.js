#pragma strict

var preslecteur : boolean;
var sound : AudioClip;
var on : boolean = false;
var DescTab : GUIText;
var lecteur : GameObject;


	
function Update () {
	if(preslecteur == true && on == false)
	{
		DescTab.fontStyle = FontStyle.Normal;
		DescTab.text = ("Allumer (F)" + (""));
		if(Input.GetKeyDown("f"))
		{
			on = true;
			lecteur.SendMessage("On");
			audio.PlayDelayed(1.3);
		}
	}
	
	else if(preslecteur == true && on == true)
	{
		
		DescTab.fontStyle = FontStyle.Normal;
		DescTab.text = ("Éteindre (F)" + (""));
		if(Input.GetKeyDown("f"))
		{
			on = false;
			lecteur.SendMessage("Off");
			audio.Stop();
		}
	}
	
	
	

}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("Trigger Enter");
		(preslecteur) = true;
	}
}

function OnTriggerExit (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("Trigger Exit");
		(preslecteur) = false;
		DescTab.text = ("") + ("");
	}
}