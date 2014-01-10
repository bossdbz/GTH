#pragma strict
var pause : boolean = false;
var pauseGUI : GUITexture;
var pauseT : GUIText;
var londres : GUIText;
var menuPrincipale : GUIText;
var reprendre : GUIText;
var RecommencerAmazonieB: GUIText;
private var sonClique : GameObject;
pauseGUI.enabled = false;
pauseT.enabled = false;
menuPrincipale.enabled = false;
londres.enabled = false; 
reprendre.enabled = false;

function Awake(){
	
	sonClique = GameObject.Find("Audio/Menu/menuClique");

}

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
    GetComponent(AudioSource).Play();
  }
  if( this.name == "Reprendre") 
  {
  			Time.timeScale = 1.0;
  			sonClique.GetComponent(AudioSource).Play();
			pauseGUI.enabled = false;
			pauseT.enabled = false;
			menuPrincipale.enabled = false;
			londres.enabled = false; 
			reprendre.enabled = false;
			
  }    
  if(this.name == "Londres") 
  {
  	sonClique.GetComponent(AudioSource).Play();
  	Time.timeScale = 1.0;
    Application.LoadLevel("Angleterre");
   }
   
   if(this.name == "RecommencerAmazonieB") // remplacer si possible par un this.scene, triuc du genre 
  {
  			sonClique.GetComponent(AudioSource).Play();
  			//sonClique.audio.Play();
  			//AudioClip.PlayClipAtPoint(clic, null);
  			//if(!sonClique.isPlaying){
			pauseGUI.enabled = true;
			pauseT.enabled = true;
			menuPrincipale.enabled = true;
			londres.enabled = true; 
			reprendre.enabled = true;
			RecommencerAmazonieB.enabled=true;
			Time.timeScale = 1.0;
    		Application.LoadLevel("bonus azteque");
    		//}
   }
} 