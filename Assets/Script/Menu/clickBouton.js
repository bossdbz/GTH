#pragma strict
var pause : boolean = false;
var pauseGUI : GUITexture;
var pauseT : GUIText;
var londres : GUIText;
var menuPrincipale : GUIText;
var reprendre : GUIText;
var RecommencerAmazonieB: GUIText;

pauseGUI.enabled = false;
pauseT.enabled = false;
menuPrincipale.enabled = false;
londres.enabled = false; 
reprendre.enabled = false;


function Start () {

}

function Update () {

}

function OnMouseDown() 
{ 
 // if we clicked the play button 
  
  if( this.name == "Menu") 
  {
  	Time.timeScale = 1.0;
     Application.LoadLevel("Menu");
  }
  if( this.name == "Reprendre") 
  {
    		Time.timeScale = 1.0;
			pauseGUI.enabled = false;
			pauseT.enabled = false;
			menuPrincipale.enabled = false;
			londres.enabled = false; 
			reprendre.enabled = false;
  }    
  if(this.name == "Londres") 
  {
  	Time.timeScale = 1.0;
    Application.LoadLevel("Angleterre");
   }
   
   if(this.name == "RecommencerAmazonieB") // remplacer si possible par un this.scene, triuc du genre 
  {
  			
			pauseGUI.enabled = true;
			pauseT.enabled = true;
			menuPrincipale.enabled = true;
			londres.enabled = true; 
			reprendre.enabled = true;
			RecommencerAmazonieB.enabled=true;
			Time.timeScale = 1.0;
    		Application.LoadLevel("bonus azteque");
    		
   }
} 