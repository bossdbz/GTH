#pragma strict

#pragma strict
var read : boolean = false;
var F1 : GUIText;


F1.enabled = false;



function Start () {
	
}

function Update () {
	if(read)
	{
		gestionAffiche();
	}
}


function gestionAffiche() 
{ 
 	if(Input.GetKey("f")) 
	{  
  			F1.enabled = false;
  			// joue son
	}
}


function affiche()
{
	read = true;
	F1.enabled = true;
	Debug.Log("affiche");
	
}

function efface()
{
	read = false;
	F1.enabled = false;
	Debug.Log("enleve");
}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("entre");
		affiche();		
	}
	
}

function OnTriggerExit (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("sort");
		efface();		
	}
}
