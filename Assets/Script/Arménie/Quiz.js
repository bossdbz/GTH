#pragma strict


var eltQuestion : GameObject[];
var point : GameObject;

function Start () {

}

function Update () {

}


//si le player entre en collision avec le collider de la question,
//affiche la question et arrete le jeu
function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		//GameObject.Find("Audio/Menu/menuOuvertureFermeture").GetComponent(AudioSource).Play();
		enable(true);
		Destroy(point);	
		//Time.timeScale = 0.0;
	}
}


//fonction qui affiche la question et les propositions des réponse si bool vrai
//sinon dsactive l'affichage
function enable(bool : boolean){
	
	if( bool ){
	
		for(var eltQ : GameObject in eltQuestion){
			eltQ.gameObject.active = true;		
		}
				
	} 
	
	else{
	
		for(var eltQ : GameObject in eltQuestion){
			eltQ.gameObject.active = false;			
		}
	
	}
}


