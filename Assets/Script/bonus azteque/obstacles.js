#pragma strict



function Start () {

}

function Update () {
		//var vitesse = Random.Range(0,30);
		this.transform.Translate(0,0,0);
		var avion = GameObject.Find("avion");
		this.transform.Rotate(22*Time.deltaTime,25,15);
		if (this.transform.position.x - avion.transform.position.x < -5)
	 	{
	 		var i = this.transform.position.x - avion.transform.position.x;
	 		Debug.Log(" comparR : "+ i );
	 		Destroy(this);
	 		Destroy(gameObject);
	 	}
}

function OnTriggerEnter( other : Collider ) {

	AvionVariables.nbDetruits = AvionVariables.nbDetruits + 50;
	if( other.name == "avion" ) 
	{
		AvionVariables.vie = AvionVariables.vie - 1;
	}
	else Debug.Log(" marche pas");
	Destroy(gameObject);

}