#pragma strict


var pause : boolean = false;
var menuInformation2 : GUITexture;
var aid : GUIText;
var aid2 : GUIText;
var aid3 : GUIText;
var consigne : GUIText;
var go1 : GUIText;
var menu1 : GUIText;
var Mission1 : GUIText;
public var depart=0;

menuInformation2.enabled=false;
aid.enabled = false;
aid2.enabled = false;
aid3.enabled = false;
consigne.enabled =false;
go1.enabled = false; 
menu1.enabled = false;
Mission1.enabled = false;



function Start(){
		

}
function Update(){
	/*if(depart ==1)
	{
	
		Time.timeScale = 0.0;	
		menuInformation2.enabled=true;
		aid.enabled = true;
		aid2.enabled = true;
		aid3.enabled = true;
		consigne.enabled =true;
		go1.enabled = true; 
		menu1.enabled = true;
		Mission1.enabled = true;
	
	
	} */
	
}	
	
	
	//chronoGT = GameObject.Find("Chrono").GetComponent(GUIText);


function OnMouseDown() 
{ 
 // if we clicked the play button 
  
   if(this.name == "go1") // remplacer si possible par un this.scene, triuc du genre 
  {
  			Time.timeScale = 1.0;
  			menuInformation2.enabled=false;
			aid.enabled = false;
			aid2.enabled = false;
			aid3.enabled = false;
			consigne.enabled = false;
			go1.enabled = false; 
			menu1.enabled = false;
			Mission1.enabled = false;
    		depart=1;
   }
} 

function OnTriggerEnter( other : Collider ) {

	Time.timeScale = 0.0;	
		menuInformation2.enabled=true;
		aid.enabled = true;
		aid2.enabled = true;
		aid3.enabled = true;
		consigne.enabled =true;
		go1.enabled = true; 
		menu1.enabled = true;
		Mission1.enabled = true;
}