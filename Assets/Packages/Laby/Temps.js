#pragma strict

// the textfield to update the time to 
public var textTemps:GUIText;
public var choix:GUIText; 
var charMotor : CharacterMotor;
 
// time variables 
private var allowedTime:int = 1200; 
private var currentTime = allowedTime;
private var fin:boolean = false;

function Awake() 
{ 
 // retrieve the GUIText Component and set the text 
 //if(Application.loadedLevel
 if(Application.loadedLevel != 11)
 { currentTime = 600; }
 textTemps = GameObject.Find("Interface/TextTemps").GetComponent(GUIText);
 UpdateTimerText(); 
 
 // start the timer ticking 
 TimerTick(); 
} 

function Update()
{

 if(currentTime == 0)
 {
 charMotor = GameObject.Find("First Person Controller").GetComponent(CharacterMotor) ;
 charMotor.enabled = false ;
 choix = GameObject.Find("Interface/ChoixFin").GetComponent(GUIText);
 choix.text = "C'est fini, et il semble que vous allez errer ici pendant très longtemps..." + "\n" + "Recommencer?     Oui [y]  Non [n]";
 if(Input.GetKeyDown("y"))
 	{   
 		Application.LoadLevel(Application.loadedLevel); 
 	} 
 if(Input.GetKeyDown("n"))
 	{
 		Application.Quit();
 	}
 }
}
 
function UpdateTimerText() 
{ 
 // update the textfield 
 
 textTemps.text = "Temps" + "\n" + currentTime.ToString(); 
} 
 
function TimerTick() 
{ 
 // while there are seconds left 
 
 while(currentTime > 0) 
 { 
  if(fin == true)
 {
 	yield WaitForSeconds(500);
 }
 // wait for 1 second 
 yield WaitForSeconds(1); 
 
 // reduce the time 
 currentTime--; 
 
 UpdateTimerText(); 
 } 
 
 // game over and restart

 }
 
 function delai()
 {
 	fin = true;
 } 
 
