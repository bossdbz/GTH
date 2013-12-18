#pragma strict

var enter : boolean;
var choixNiveau : GUIText;
var choisi : boolean = false;
var charMotor : CharacterMotor ;

function Update () {

if(enter == true && choisi == false)
	{
		
		choixNiveau.fontStyle = FontStyle.Normal;
		choixNiveau.text = ("Sélectionner le niveau" + ("\n") + ("Touche 1: Grotte") + ("\n") + ("Touche 2: Labyrinthe") + ("\n") + ("Touche 3: Ile au trésor") + ("\n") + ("Touche 4: Chine") + ("\n") + ("Touche 5: Rester ici"));
		
		
		
		if(Input.GetKeyDown("1"))
		{
			Application.LoadLevel ("Grotte");
			
		}
		
		if(Input.GetKeyDown("2"))
		{
			Application.LoadLevel ("Labyrinthe");
		
		}
		
		if(Input.GetKeyDown("3"))
		{
			Application.LoadLevel ("IleTresor");
		}
		
		if(Input.GetKeyDown("4"))
		{
			Application.LoadLevel ("Chine");
		}
		
		if(Input.GetKeyDown("5"))
		{
			choixNiveau.text = ("");
			charMotor.enabled = true;
			choisi = true;
		}

	}
}



function OnTriggerEnter(other : Collider){
   if(other.gameObject.CompareTag("Player")){
      
      charMotor = other.GetComponent(CharacterMotor) ;
      charMotor.enabled = false ;
      (enter) = true;
   }
   
   
}


function OnTriggerExit (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("Trigger Exit");
		(enter) = false;
		choisi = false;
	}
}