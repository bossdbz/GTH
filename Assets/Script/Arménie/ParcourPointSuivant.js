#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
	Debug.Log("collision mur jaune");
		//Debug.Log(transform.parent.gameObject.GetComponent(MonoBehaviour).name);
		enable(gameObject, false);
		transform.parent.gameObject.SendMessage("pointSuivant");
		transform.parent.gameObject.SendMessage("update");	
		//Destroy(gameObject);
		
	}
}

function enable(go : GameObject, bool : boolean){
	
	var boxCollider = go.GetComponent(BoxCollider);
	var particule = go.GetComponent(ParticleSystem);
	//for (var r : Renderer in renderer) {
	if (bool){
    	boxCollider.enabled = true;
    	particule.renderer.enabled = true;
    }
    else{
    	boxCollider.enabled = false;
    	particule.renderer.enabled = false;   
    }
	//}

}
