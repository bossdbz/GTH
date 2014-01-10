#pragma strict
public var projectile: Transform;
public var i =0 ;
public var obstacle: Transform;
public var life: Transform;
public var caisse: Transform;


function Start () {
	 
}

function Update () {

	
	var avion = GameObject.Find("avion");
	
	var	speed=300;		
		
	
	if(this.transform.position.z > 2500)
		var	x=Input.GetAxis("Horizontal")*Time.deltaTime*speed/2;
	if(this.transform.position.z <= 2500)
		avion.transform.Translate(-5,0,0);
	
	if(this.transform.position.z < 5500)
		var	x1=Input.GetAxis("Horizontal")*Time.deltaTime*speed/2;
	if(this.transform.position.z >= 5500)
		avion.transform.Translate(5,0,0);
	
	if(this.transform.position.y < 1300)
		var	z=Input.GetAxis("Vertical")*Time.deltaTime*speed/2;
	if(this.transform.position.y >= 1300)
		avion.transform.Translate(0,0,-10);

	if(Time.timeScale != 0.0)
	{
		avion.transform.Translate(x,-(speed / 150),z);
			//audio.Pause;
	}
	
	
	var helice = GameObject.Find("helice");
	
	if(Time.timeScale != 0.0)
		helice.transform.Rotate(4320*Time.deltaTime,0,0);
	
	
	var avionC = GameObject.Find("avion component");
	
	
		
	var gauche = GameObject.Find("zoneg");
	var droite = GameObject.Find("zoned");
	
	//var test = Random.Range(0,0);
	if(Input.GetKey("e")){
			var proj ;
			var proj2 ;
			
			if(AvionVariables.munitions > 0)
			{
				//if(i%2==0)
				if(Time.timeScale != 0.0)
				{
					if(i%5==0)
					{
						proj = Instantiate(projectile,gauche.transform.position, avion.transform.rotation) ;
						proj2 = Instantiate(projectile,droite.transform.position, avion.transform.rotation) ;
					}
					AvionVariables.munitions = AvionVariables.munitions - 1;
				}
				
			}
			
			
	 }
	 i=i+1;
	 
	 
	 var obs = Random.Range(1,30);
	 var vie = Random.Range(1,125);
	 var ob;
     var y1 = Random.Range(-30,30);	
     var z1 = Random.Range(-30,30);	
	 
	 if(Time.timeScale != 0.0){
			if(obs==2)
				ob = Instantiate(obstacle ,avion.transform.position + Vector3(160,y1,z1) , avion.transform.rotation) ;
	 		if(obs==3)
				ob = Instantiate(obstacle ,avion.transform.position + Vector3(300,0,0) , avion.transform.rotation) ;
	 		if(vie==75)
	 			ob = Instantiate(life ,avion.transform.position + Vector3(160,y1,z1) ,  Quaternion.identity) ;
	 		if(vie==70)
	 			ob = Instantiate(caisse ,avion.transform.position + Vector3(160,y1,z1) ,  Quaternion.identity) ;
	 }
	 // gere le trajet de tous les projectiles
	 
	if(Time.timeScale != 0.0){
	
	if(Input.GetKey("a") ) avion.transform.Rotate(0,120*Time.deltaTime,0);
	else if(Input.GetKey("z") ) avion.transform.Rotate(0,-120*Time.deltaTime,0);
	else{
		//ne rien faire
	
	}
	
	}
	
	
	
	
	
	
	/*if (AvionVariables.vie <= 0)
	{
		//Destroy(gameObject);
		Application.LoadLevel("angleterre");
	}*/
}

function OnTriggerEnter( other : Collider ) {
	if( other.name == "Terrain" ) 
	{
		AvionVariables.vie = 0;
		this.audio.Stop();
	}

}



