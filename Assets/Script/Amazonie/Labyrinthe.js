#pragma strict

//var t : GUIText;
//t.guiText.text = "Tu as 10 min pour trouver la sortie,\n de plus il te faudra trouver les 5 objets antique,\nbon courage jeune aventurier !";

private var textfield:GUIText;
// the textfield to update the time to 

 
// time variables 
public var allowedTime:int = 600; 
private var currentTime = allowedTime; 



function Start () {

	
	
}

function Update () 
{
	
}



	
	//Timer = Timer -1;




function OnMouseDown() 
{ 
	

}

function OnTriggerEnter( other : Collider ) 
{  
 // retrieve the GUIText Component and set the text 
 textfield = GameObject.Find("GUIPanel/TxtTimer").GetComponent(GUIText); 
 
 UpdateTimerText(); 
 
 // start the timer ticking 
 TimerTick(); 
} 
 
function UpdateTimerText() 
{ 
 // update the textfield 
 textfield.text = "Temps restant : " + currentTime.ToString()+ " sec "; 
} 
 
function TimerTick() 
{ 
 // while there are seconds left 
 while(currentTime > 0) 
 { 
 // wait for 1 second 
 yield WaitForSeconds(1); 
 
 // reduce the time 
 currentTime--; 
 
 UpdateTimerText(); 
 } 
 
 // game over and restart 
 Application.LoadLevel("Intro"); 
 
} 