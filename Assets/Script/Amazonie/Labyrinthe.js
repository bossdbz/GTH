#pragma strict

public var allowedTime:int = 1000; 
private var currentTime = allowedTime; 



function Start ()
{
}

function Update () 
{
	
}

function OnMouseDown() 
{ 
}

function OnTriggerEnter( other : Collider ) 
{  
 	// retrieve the GUIText Component and set the text 
 	if (GameVariables.beginLvl1!=1)
 	{
 		GameVariables.textfield2 = GameObject.Find("TxtTimer").GetComponent(GUIText); 
 		GameVariables.textfield = GameObject.Find("TxtObjets").GetComponent(GUIText); 
 		GameVariables.textfield.text = "Objets Trouvés 0/5";
 		GameVariables.beginLvl1=1;
 
 		UpdateTimerText(); 
 	
 	
 		GameVariables.textfield2.text = "Trouvez la sortie du labyrinthe "; 
 	
 
 // start the timer ticking 
 
 		
 		
 				
		TimerTick(); 
		
	 }
} 
 
function UpdateTimerText() 
{ 
 // update the textfield 
 	GameVariables.textfield2.text = "Temps restant : " + currentTime.ToString()+ " sec "; 
} 
 
function TimerTick() 
{ 
 // while there are seconds left 
 
 
 while(currentTime > 0)  
 { 
 	// wait for 1 second 
	 yield WaitForSeconds(1); 
 
	 // reduce the time 
	if(GameVariables.nombreObjTrouveRdc==5)
	{
 			GameVariables.RDCwinLvl1=1;
 	}	
 	  	
 	if(GameVariables.RDCwinLvl1==0)
 	{ 
	 	currentTime--; 
 
		 UpdateTimerText(); 
	}
	else{
		currentTime=0;
	}
 } 
 
 // game over and restart
 if(GameVariables.RDCwinLvl1==0)
 { 
 	GameVariables.resetLvl1();
	 Application.LoadLevel("Temple Aztèque"); 
 }

}

function openDoorRdc()
{


}
 
