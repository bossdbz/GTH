#pragma strict
var enigme : AudioSource;
var sonenigme : AudioSource;


function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {
	
	if(this.name=="declencheur-voix-enigme")
		enigme.Play();
	if(this.name=="declencheur-son-enigme")	
		sonenigme.Play();
		
		
		Destroy(gameObject);
}