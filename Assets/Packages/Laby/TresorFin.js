#pragma strict

public var monde:GameObject; 
public var enter : boolean;
public var Finniveau : GUIText;
public var Showfin : boolean = false;
public var charMotor : CharacterMotor;

function Update () {

Finniveau = GameObject.Find("Interface/Tresorfin").GetComponent(GUIText);
	 
if(enter == true && Showfin == false)
	{
		
		Finniveau.text = ("Prendre (F)" + (""));
		
		
		if(Input.GetKeyDown("f"))
		{
			Showfin = true;
			monde = GameObject.Find("World");
			monde.GetComponent(Temps).SendMessage("delai");
			charMotor = GameObject.Find("First Person Controller").GetComponent(CharacterMotor) ;
			charMotor.enabled = false ;
			Finniveau.text = ("Félicitation! Vous avez mis la main sur le coffre!") + ("\n") + ("Description trésor") + ("\n") + ("Retour au manoir [O]");
			
		}	
		
	}
		
if(enter == false)
	{
		Finniveau.text = ("") + ("");
	}
	if(Input.GetKeyDown("o"))
		{
			RetourManoir();
		}
}



//Active l'affichage quand le joueur est à portée
function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("Trigger Enter");
		(enter) = true;
	}
}

//Désactive l'affichage quand le joueur est hors de portée
function OnTriggerExit (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("Trigger Exit");
		(enter) = false;
		Finniveau.text = ("") + ("");
	}
}

function RetourManoir()
{
	if(enter == true && Showfin == true)
	{
		
		print ("O key was pressed");
		yield WaitForSeconds(3);
		Application.LoadLevel("Angleterre");
		
	}
}
