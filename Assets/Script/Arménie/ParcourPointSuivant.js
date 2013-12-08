#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		Debug.Log(transform.parent.gameObject.name);
		transform.parent.gameObject.SendMessage("pointSuivant");
		transform.parent.gameObject.SendMessage("update");	
		Destroy(gameObject);
	}
}