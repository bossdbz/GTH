#pragma strict


var parcourScript : Parcour;

function Awake () {
	parcourScript = transform.parent.gameObject.GetComponent("Parcour");
}

function Update () {

	if ( !parcourScript.declencher ) {
		parcourScript.enable( gameObject , false );
	}

}

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
	Debug.Log("collision mur jaune");
		//Debug.Log(transform.parent.gameObject.GetComponent(MonoBehaviour).name);
		parcourScript.enable(gameObject, false);
		transform.parent.gameObject.SendMessage("pointSuivant");
		//transform.parent.gameObject.SendMessage("update");	
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
