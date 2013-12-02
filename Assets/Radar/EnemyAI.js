//   created by Dastardly Banana Productions
//   http://www.dastardlybanana.com/

//This is a dummy script to fool the radar, since our AI script is not ready to be posted at this time.        
// "isChasing" is true

var isChasing : boolean;
var seeDistance : float = 50;

function Start () {
}
function Update () {
	var gos : GameObject[];
    gos = GameObject.FindGameObjectsWithTag("Player"); 
    //assumes only one player
    var thePlayer:GameObject = gos[0];
	var dist = Vector3.Distance(thePlayer.transform.position,transform.position);
	
	if(dist<seeDistance){
		isChasing= true;
	} else {
		isChasing=false;
	}
}