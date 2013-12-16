#pragma strict

function Start () {

}

function Update () {
		this.transform.Translate(1,0,0);
		var avion = GameObject.Find("avion");
		
		//calcule la rotation
		var x = Random.Range(-5,5);
		var y = Random.Range(-5,5);
		var z = Random.Range(-5,5);
		
		this.transform.Rotate(x,y,z);
		if (this.transform.position.x - avion.transform.position.x < -5)
	 	{
	 		Destroy(this);
	 		Destroy(gameObject);
	 	}
}

function OnTriggerEnter( other : Collider ) {

	AvionVariables.nbDetruits = AvionVariables.nbDetruits + 1;
	if( other.name == "avion" ) 
	{
		if(AvionVariables.vie < 5 )
			AvionVariables.vie = AvionVariables.vie + 1;
			Destroy(gameObject);
	}
	

}