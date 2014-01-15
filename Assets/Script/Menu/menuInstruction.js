#pragma strict

var pause : boolean = false;
var menuInformation : GUITexture;
var aide : GUIText;
var aide2 : GUIText;
var aide3 : GUIText;
var consignes : GUIText;
var go : GUIText;
var menu : GUIText;
var Mission : GUIText;
public var depart=0;


menuInformation.enabled=true;
aide.enabled = true;
aide2.enabled = true;
aide3.enabled = true;
consignes.enabled =true;
go.enabled = true; 
menu.enabled = true;
Mission.enabled = true;


function Start(){
		

}
function Update(){
	if(depart ==0)
		Time.timeScale = 0.0;
	
	} 
	
	
	
	
	//chronoGT = GameObject.Find("Chrono").GetComponent(GUIText);


function OnMouseDown() 
{ 
 // if we clicked the play button 
  
   if(this.name == "go") // remplacer si possible par un this.scene, triuc du genre 
  {
  			Time.timeScale = 1.0;
  			menuInformation.enabled=false;
			aide.enabled = false;
			aide2.enabled = false;
			aide3.enabled = false;
			consignes.enabled = false;
			go.enabled = false; 
			menu.enabled = false;
			Mission.enabled = false;
    		depart=1;
    		
    		var son = GameObject.Find("son");
			son.audio.Play();
   }
} 

  
  



