#pragma strict

//var t : GUIText;
//t.guiText.text = "Tu as 10 min pour trouver la sortie,\n de plus il te faudra trouver les 5 objets antique,\nbon courage jeune aventurier !";


// the textfield to update the time to 


 
// time variables 
public var allowedTime:int = 600; 
private var currentTime = allowedTime; 



function Start () {

	
	
}

function Update () 
{
	//object = GameObject.Find("GUIPanel/TxtTimer").GetComponent(GUIText);
}



	
	//Timer = Timer -1;




function OnMouseDown() 
{ 
	

}

function OnTriggerEnter( other : Collider ) 
{  
 // retrieve the GUIText Component and set the text 
 GameVariables.textfield2 = GameObject.Find("GUIPanel/TxtTimer").GetComponent(GUIText); 
 GameVariables.textfield = GameObject.Find("GUIPanel/TxtObjets").GetComponent(GUIText); 
 GameVariables.textfield.text = "Objets Trouvés 0/5";
 
 
 	UpdateTimerText(); 
 	GameVariables.textfield2.text = "Trouvez la sortie du labyrinthe "; 
 
 // start the timer ticking 
	 TimerTick(); 
} 
 
function UpdateTimerText() 
{ 
 // update the textfield 
 GameVariables.textfield2.text = "Temps restant : " + currentTime.ToString()+ " sec "; 
} 
 
function TimerTick() 
{ 
 // while there are seconds left 
 var win = GameVariables.RDCwin;
 if(win) currentTime =0;
 while((currentTime > 0) && (!win)) 
 { 
 	// wait for 1 second 
	 yield WaitForSeconds(1); 
 
	 // reduce the time 
	 currentTime--; 
 
	 UpdateTimerText(); 
 } 
 
 // game over and restart 
 Application.LoadLevel("Temple Aztèque"); 
 
} 