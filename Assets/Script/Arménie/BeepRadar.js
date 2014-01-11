#pragma strict

private var obj : GameObject[];
var player : GameObject;
var beepNormal : GameObject;
var beepRapide : GameObject;

private var map : int;
private var playNormal : boolean;
private var playRapide : boolean;
private var isClose : boolean;

function Awake(){
	obj = GameObject.FindGameObjectsWithTag("Enemy"); 
		
}

function Start () {

}



function Update () {

	map = GameObject.Find("World").transform.gameObject.GetComponent(Radar).seuil;
	isClose = false;
	for( var go : GameObject in obj ){
	
		var dist : float = Vector3.Distance( player.transform.position, go.transform.position);
		//var dist : float= 140;
		
		
		if( dist <= map ){
			isClose = true;
			if( dist <= 50 ){
				if( playNormal ){
					playNormal = false;
					beepNormal.GetComponent(AudioSource).Stop();
				}
				
				if( !playRapide ){
					playRapide = true;
					beepRapide.GetComponent(AudioSource).Play();	
				}
			
			}
			else{
				if( playRapide ){
					playRapide = false;
					beepRapide.GetComponent(AudioSource).Stop();
				}
			
				if( !playNormal ){
					playNormal = true;
					beepNormal.GetComponent(AudioSource).Play();
				}
			}
		}

	}

	if( !isClose ){
		if( playNormal ){
			playNormal = false;
			beepNormal.GetComponent(AudioSource).Stop();
		}
			
		if( playRapide ){
			playRapide = false;
			beepRapide.GetComponent(AudioSource).Stop();
		}
	}
}


