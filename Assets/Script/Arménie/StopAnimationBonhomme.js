#pragma strict

var ballon : GameObject;
var pied  : GameObject;
var player : GameObject;
var distance : float;
private var dist : float;

function Start () {

}

function Update () {
	
	dist = Vector3.Distance(player.transform.position, transform.position);
	if(dist < distance){
		ballon.gameObject.GetComponent(Animator).enabled = false;
		pied.gameObject.GetComponent(Animator).enabled = false;
		//pied.animation.Stop();		
	}
	else{
		ballon.gameObject.GetComponent(Animator).enabled = true;
		pied.gameObject.GetComponent(Animator).enabled = true;
	}
	//*/
}