var pause : boolean = false;
var pauseGUI : GUITexture;
var pauseT : GUIText;
var londres : GUIText;
var menuPrincipale : GUIText;
var RecommencerAmazonieB : GUIText;

pauseGUI.enabled = false;
pauseT.enabled = false;
menuPrincipale.enabled = false;
londres.enabled = false; 
RecommencerAmazonieB.enabled = false;


function Start(){

			Time.timeScale = 1.0;
			pauseGUI.enabled = false;
			pauseT.enabled = false;
			menuPrincipale.enabled = false;
			londres.enabled = false; 
			
			RecommencerAmazonieB.enabled = false;
			

}
function Update(){

	//if mort
	if( AvionVariables.vie <= 0) 
	{
			Time.timeScale = 0.0;
			pauseGUI.enabled = true;
			pauseT.enabled = true;
			menuPrincipale.enabled = true;
			londres.enabled = true; 
			
			AvionVariables.distance = 0;
			AvionVariables.vie = 5;
			AvionVariables.nbDetruits = 0;
			AvionVariables.munitions = 200; 
			
			
			RecommencerAmazonieB.enabled = true;
	} 
	
	
	
	
	
	//chronoGT = GameObject.Find("Chrono").GetComponent(GUIText);
}



  
  



