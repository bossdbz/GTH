#pragma strict

function Start () {
	
}

function Update () {

	var avion = GameObject.Find("avion");
	/*var rotaInitial = avion.transform.rotation.x;
	
	Debug.Log(" pos ini : "+ rotaInitial);*/
	//deplacement basique
	var	speed=800.0;			//	déplacer	l’objet	200	m	par	seconde	
	var	x=Input.GetAxis("Horizontal")*Time.deltaTime*speed;		
	var	z=Input.GetAxis("Vertical")*Time.deltaTime*speed;
	
	//si on est dans les bords
	//if((avion.transform.position.z < 7000 ) && (avion.transform.position.z > 3000) && (avion.transform.position.y < 2000))
	//	avion.transform.Translate(x,-3,z);
	
	//recalage
	/*if(avion.transform.position.z >= 7000 ) avion.transform.Translate(3,-3,0);
	else if(avion.transform.position.z <= 3000 ) avion.transform.Translate(-3,-3,0);
	else if(avion.transform.position.y >= 2000 ) avion.transform.Translate(0,-3,-3);
	else*/ avion.transform.Translate(x,-3,z);
	
	
	
	var helice = GameObject.Find("helice");
	helice.transform.Rotate(4320*Time.deltaTime,0,0);
	
	
	var avionC = GameObject.Find("avion component");
	
	Debug.Log(" pos ici : "+ avion.transform.rotation.x);
		
	//espace
	//if(Input.GetKey("space") ) avionC.animation.Play("avion");
	//else avionC.animation.Stop("avion");
	if(Input.GetKey("a") ) avion.transform.Rotate(0,120*Time.deltaTime,0);
	else if(Input.GetKey("z") ) avion.transform.Rotate(0,-120*Time.deltaTime,0);
	
	else if(avion.transform.rotation.x > -0.53 )
	{
		avion.transform.Rotate(0,12*Time.deltaTime,0);
		
	}
	else if(avion.transform.rotation.x < -0.47 ) 
	{
		avion.transform.Rotate(0,-12*Time.deltaTime,0);
				
	}
	else{
		//ne rien faire
	
	}
	
	  
	
	
}

function OnTriggerEnter( other : Collider ) {

	if( other.name == "Terrain")Application.LoadLevel("bonus azteque");

}