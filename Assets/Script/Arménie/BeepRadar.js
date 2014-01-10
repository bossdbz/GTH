#pragma strict

var obj : GameObject;
var player : GameObject;
var beep : GameObject;
//private bool : boolean;
//var world : GameObject;
//var radar : Radar;
private var map : int;

function Awake(){
	map = transform.parent.gameObject.GetComponent(Radar).seuil;
	if( Vector3.Distance(obj.transform.position, player.transform.position) <= map ){
	   declencheBeep();
	} 	
}

function Start () {
	if( Vector3.Distance(obj.transform.position, player.transform.position) <= map ){
	   declencheBeep();
	}
}

function Update () {
	
}

function declencheBeep(){
	if( Vector3.Distance(obj.transform.position, player.transform.position) <= map ){
	   beep.GetComponent(AudioSource).PlayDelayed(3);
	   //yield WaitForSeconds(5);
	   //beep.GetComponent(AudioSource).Stop();
	} 	

}

