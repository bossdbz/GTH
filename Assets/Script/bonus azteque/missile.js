#pragma strict

function Start () {

}

function Update () {

			
        this.transform.Translate(0,-5,0);
	 	//Debug.Log (" ça tire!");
	 	var avion = GameObject.Find("avion");
	 
	 	
	 	if (this.transform.position.x - avion.transform.position.x > 150  )
	 	{
	 		var i = this.transform.position.x - avion.transform.position.x;
	 		//Debug.Log(" comparR : "+ i );
	 		Destroy(this);
	 		Destroy(gameObject);
	 	}
	 	
	 	
}

function OnTriggerEnter( other : Collider ) {

	//Destroy(gameObject);

}