#pragma strict
var pause : boolean = false;
var pauseGUI : GUITexture;
var pauseT : GUIText;
var londres : GUIText;
var menuPrincipale : GUIText;
var reprendre : GUIText;
var RecommencerAmazonieB: GUIText;
//private var sonClique : GameObject;
pauseGUI.enabled = false;
pauseT.enabled = false;
menuPrincipale.enabled = false;
londres.enabled = false; 
reprendre.enabled = false;

function Awake(){
	
	//sonClique = GameObject.Find("Audio/Menu/menuClique");

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
//<<<<<<< HEAD
  	//sonClique.GetComponent(AudioSource).Play();
  	yield WaitForSeconds(0.3);
//=======
  	//GetComponent(AudioSource).Play();
//>>>>>>> f972ad18d86462181d7cd3ef46579f6fbb52824b
    Application.LoadLevel("Menu");
    
  }
  if( this.name == "Reprendre") 
  {
  			//son.audio.Play();
  			Time.timeScale = 1.0;
  			//sonClique.GetComponent(AudioSource).Play();
//<<<<<<< HEAD
  			yield WaitForSeconds(0.3);
//=======
//>>>>>>> f972ad18d86462181d7cd3ef46579f6fbb52824b
			pauseGUI.enabled = false;
			pauseT.enabled = false;
			menuPrincipale.enabled = false;
			londres.enabled = false; 
			reprendre.enabled = false;
			
  }    
  if(this.name == "Londres") 
  {
//<<<<<<< HEAD
//=======
  	//sonClique.GetComponent(AudioSource).Play();
//>>>>>>> f972ad18d86462181d7cd3ef46579f6fbb52824b
  	Time.timeScale = 1.0;
  	//sonClique.GetComponent(AudioSource).Play();
  	//yield WaitForSeconds(0.3);
    Application.LoadLevel("Angleterre");
   }
   
   if(this.name == "RecommencerAmazonieB") // remplacer si possible par un this.scene, triuc du genre 
  {
//<<<<<<< HEAD
  			Time.timeScale = 1.0;
  			//sonClique.GetComponent(AudioSource).Play();
  			yield WaitForSeconds(0.3);
//=======
  			//son.audio.Play();
  			//sonClique.GetComponent(AudioSource).Play();
  			//sonClique.audio.Play();
  			//AudioClip.PlayClipAtPoint(clic, null);
  			//if(!sonClique.isPlaying){
//>>>>>>> f972ad18d86462181d7cd3ef46579f6fbb52824b
			pauseGUI.enabled = true;
			pauseT.enabled = true;
			menuPrincipale.enabled = true;
			londres.enabled = true; 
			reprendre.enabled = true;
			RecommencerAmazonieB.enabled=true;
    		Application.LoadLevel("bonus azteque");
    		//}
   }
} 