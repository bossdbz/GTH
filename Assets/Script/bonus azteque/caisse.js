#pragma strict
public var explosionCaisse: Transform;


function Start () {

}

function Update () {
		this.transform.Translate(0,0,0);
		var avion = GameObject.Find("avion");
		
		//calcule la rotation
		var x = Random.Range(-1,1);
		var y = Random.Range(-1,1);
		var z = Random.Range(-1,1);
		
		this.transform.Rotate(x,y,z);
		if (this.transform.position.x - avion.transform.position.x < -10)
	 	{
	 		//Destroy(this);
	 		Destroy(gameObject);
	 	}
}

function OnTriggerEnter( other : Collider ) {

	AvionVariables.nbDetruits = AvionVariables.nbDetruits + 50;
	
	//ecposion
	var expl;
	expl = Instantiate(explosionCaisse,this.transform.position, this.transform.rotation) ;
		
	this.audio.Play();
	AvionVariables.munitions = AvionVariables.munitions + 50;
	
	Destroy(gameObject);
	Destroy(this);
}