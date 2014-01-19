#pragma strict

function Start () {

}

function Update () {

}


function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		//Debug.Log("toucher");
		if(other.gameObject.GetComponent(nom).s == gameObject.name ){
			gameObject.GetComponent(ParticleSystem).Play();
			other.gameObject.GetComponent(nom).s = "";
		}	
		else{
			Application.LoadLevel("Arménie");
		}//*/
	}
	
}