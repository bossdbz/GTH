var pause : boolean = false;
var pauseGUI : GUITexture;
var pauseT : GUIText;
var londres : GUIText;
var menuPrincipale : GUIText;
var reprendre : GUIText;

private var sonMenu : GameObject;

pauseGUI.enabled = false;
pauseT.enabled = false;
menuPrincipale.enabled = false;
londres.enabled = false; 
reprendre.enabled = false;


function Awake(){
	
	sonMenu = GameObject.Find("Audio/Menu/menuOuvertureFermeture");

}


function Start(){


}
function Update(){
	if(Input.GetKeyUp(KeyCode.Escape)) 
	{
		sonMenu.GetComponent(AudioSource).Play();
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



  
  



