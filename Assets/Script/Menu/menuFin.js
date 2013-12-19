#pragma strict
var score : GUIText;
var go : GUIText;
public var debut=0;
var menuFin : GUITexture;
var menu : GUIText;
var score1:GUIText;



function Start () {

}

function Update () {
	if(debut==1)
	{	
		Time.timeScale = 0.0;
	score1.text=""+AvionVariables.nbDetruits;
	
		score.enabled = true;
		go.enabled = true;
		menuFin.enabled = true;
		menu.enabled = true;
		score1.enabled =true;
	}
}

function OnMouseDown() 
{ 
 // if we clicked the play button 
  
   if(this.name == "go") // remplacer si possible par un this.scene, triuc du genre 
  {
  			Time.timeScale = 1.0;
  			debut=0;
    		Application.LoadLevel("Angleterre");
   }
} 

function OnTriggerEnter( other : Collider ) {
	debut=1;

}