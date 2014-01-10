#pragma strict

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
	 		Destroy(this);
	 		Destroy(gameObject);
	 	}
}

function OnTriggerEnter( other : Collider ) {

	AvionVariables.nbDetruits = AvionVariables.nbDetruits + 25;
		if(AvionVariables.vie < 5 )
		AvionVariables.vie = AvionVariables.vie + 1;
		this.audio.Play();
		Destroy(gameObject);
		
	

}