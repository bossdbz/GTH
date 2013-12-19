var pause : boolean = false;
var pauseGUI : GUITexture;
var pauseT : GUIText;
var londres : GUIText;
var menuPrincipale : GUIText;
var reprendre : GUIText;

pauseGUI.enabled = false;
pauseT.enabled = false;
menuPrincipale.enabled = false;
londres.enabled = false; 
reprendre.enabled = false;


function Start(){


}
function Update(){
	if(Input.GetKeyUp(KeyCode.Escape)) 
	{
		if(pause==true){
			pause = false;
		}
		else {
			pause = true;
		} 
		if(pause == true) 
		{
			Time.timeScale = 0.0;
			pauseGUI.enabled = true;
			pauseT.enabled = true;
			menuPrincipale.enabled = true;
			londres.enabled = true; 
			reprendre.enabled = true;
		}
		else {
			Time.timeScale = 1.0;
			pauseGUI.enabled = false;
			pauseT.enabled = false;
			menuPrincipale.enabled = false;
			londres.enabled = false; 
			reprendre.enabled = false;
		}
	} 
	
	
	
	
	//chronoGT = GameObject.Find("Chrono").GetComponent(GUIText);
}



  
  



