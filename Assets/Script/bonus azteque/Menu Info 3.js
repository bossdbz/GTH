#pragma strict


var pause : boolean = false;
var menuInformation3 : GUITexture;
var aidd : GUIText;
var aidd2 : GUIText;
var aidd3 : GUIText;
var consignee: GUIText;
var go2 : GUIText;
var menu2 : GUIText;
var Mission2 : GUIText;
public var depart=0;

menuInformation3.enabled=false;
aidd.enabled = false;
aidd2.enabled = false;
aidd3.enabled = false;
consignee.enabled =false;
go2.enabled = false; 
menu2.enabled = false;
Mission2.enabled = false;



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
  
   if(this.name == "go2") // remplacer si possible par un this.scene, triuc du genre 
  {
  			Time.timeScale = 1.0;
  			menuInformation3.enabled=false;
			aidd.enabled = false;
			aidd2.enabled = false;
			aidd3.enabled = false;
			consignee.enabled = false;
			go2.enabled = false; 
			menu2.enabled = false;
			Mission2.enabled = false;
    		depart=1;
    		
    		Application.LoadLevel("bonus azteque");
    		
    		
   }
} 

function OnTriggerEnter( other : Collider ) {

	Time.timeScale = 0.0;	
		menuInformation3.enabled=true;
		aidd.enabled = true;
		aidd2.enabled = true;
		aidd3.enabled = true;
		consignee.enabled =true;
		go2.enabled = true; 
		menu2.enabled = true;
		Mission2.enabled = true;
}