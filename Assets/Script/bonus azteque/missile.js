#pragma strict

function Start () {

}

function Update () {

			
        this.transform.Translate(0,-15,0);
	 	Debug.Log (" ça tire!");
	 	var avion = GameObject.Find("avion");
	 
	 	
	 	if (this.transform.position.x - avion.transform.position.x > 100)
	 	{
	 		var i = this.transform.position.x - avion.transform.position.x;
	 		Debug.Log(" comparR : "+ i );
	 		Destroy(this);
	 		Destroy(gameObject);
	 	}
	 	
	 	
}

function OnTriggerEnter( other : Collider ) {

	
	if( other.tag == "rocher" ) 
	{
		Debug.Log(" okkk1");
		AvionVariables.nbDetruits = AvionVariables.nbDetruits + 100;
		
	}
	Destroy(other);
	Destroy(gameObject);

}