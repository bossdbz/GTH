#pragma strict

function Start () {

}

function Update () {
	var avion = GameObject.Find("avion");
	//deplacement basique
	var	speed=250.0;			//	déplacer	l’objet	200	m	par	seconde	
	var	x=Input.GetAxis("Horizontal")*Time.deltaTime*speed;		
	var	z=Input.GetAxis("Vertical")*Time.deltaTime*speed;
	
	//si on est dans les bords
	//if((avion.transform.position.z < 7000 ) && (avion.transform.position.z > 3000) && (avion.transform.position.y < 2000))
	//	avion.transform.Translate(x,-3,z);
	
	//recalage
	if(avion.transform.position.z >= 7000 ) avion.transform.Translate(3,-3,0);
	else if(avion.transform.position.z <= 3000 ) avion.transform.Translate(-3,-3,0);
	else if(avion.transform.position.y >= 2000 ) avion.transform.Translate(0,-3,-3);
	else avion.transform.Translate(x,-3,z);
	
	
	var avionC = GameObject.Find("avion component");
	
	
		
	//espace
	//if(Input.GetKey("space") ) avionC.animation.Play("avion");
	//else avionC.animation.Stop("avion");
	if(Input.GetKey("a") ) avion.transform.Rotate(0,180*Time.deltaTime,0);
	if(Input.GetKey("z") ) avion.transform.Rotate(0,-180*Time.deltaTime,0);
}

function OnTriggerEnter( other : Collider ) {

	if( other.name == "Terrain")Application.LoadLevel("bonus azteque");

}