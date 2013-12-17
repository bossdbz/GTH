#pragma strict

function Start () {

}

function Update () {

	    var avion = GameObject.Find("avion");
		
		if (this.transform.position.x - avion.transform.position.x < -1)
	 	{
	 		Destroy(this);
	 		Destroy(gameObject);
	 	}
}