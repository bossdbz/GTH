﻿#pragma strict
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
  //var son = GameObject.Find("son");
	
  if( this.name == "Menu") 
  {
  	//son.audio.Play();
  	Time.timeScale = 1.0;
  	GetComponent(AudioSource).Play();
    Application.LoadLevel("Menu");
    
  }
  if( this.name == "Reprendre") 
  {
  			//son.audio.Play();
  			Time.timeScale = 1.0;
  			//sonClique.GetComponent(AudioSource).Play();
			pauseGUI.enabled = false;
			pauseT.enabled = false;
			menuPrincipale.enabled = false;
			londres.enabled = false; 
			reprendre.enabled = false;
			
  }    
  if(this.name == "Londres") 
  {
  	//son.audio.Play();
  	//sonClique.GetComponent(AudioSource).Play();
  	Time.timeScale = 1.0;
    Application.LoadLevel("Angleterre");
   }
   
   if(this.name == "RecommencerAmazonieB") // remplacer si possible par un this.scene, triuc du genre 
  {
  			//son.audio.Play();
  			//sonClique.GetComponent(AudioSource).Play();
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