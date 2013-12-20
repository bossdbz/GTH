#pragma strict

public var explosion: Transform;

function Start () {

}

function Update () {
		//var vitesse = Random.Range(0,30);
		if(Time.timeScale != 0.0)
			this.transform.Translate(0,4,0);
		var avion = GameObject.Find("avion");
		
		//calcule la rotation
		var x = Random.Range(-1,1);
		var y = Random.Range(-1,1);
		var z = Random.Range(-1,1);
		
		this.transform.Rotate(0,0,0);
		if (this.transform.position.x - avion.transform.position.x < -10)
	 	{
	 		var i = this.transform.position.x - avion.transform.position.x;
	 		Debug.Log(" comparR : "+ i );
	 		Destroy(this);
	 		Destroy(gameObject);
	 	}
}

function OnTriggerEnter( other : Collider ) {

	AvionVariables.nbDetruits = AvionVariables.nbDetruits + 100;
	var expl;
	expl = Instantiate(explosion,this.transform.position, this.transform.rotation) ;
	Destroy(gameObject);
	Destroy(this);
	if( other.name == "avion" ) 
	{
		AvionVariables.vie = AvionVariables.vie - 1;
	}
	
	//Destroy(this.gameObject);

}