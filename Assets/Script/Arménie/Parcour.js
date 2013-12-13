#pragma strict





private var nomParcour : String;
var numParcour : int;
var nombrePoint : int;
var chrono : GUITexture; 
private var tresorCur : GameObject; 
private var declencher : boolean;
private var i : int = 1;


function update(){
	if ( declencher ){
		if(i <= nombrePoint){
			tresorCur = GameObject.Find(nomParcour+ "/Tresor"+ numParcour + "-" + i);
			enable(tresorCur);
		}
		else{
			Debug.Log("Gagner");		
			declencher = false;
			Destroy(gameObject);
		}
	}//*/
	

}

function pointSuivant(){
	i++;
}

function enable(go : GameObject){
	var boxCollider = go.GetComponent(BoxCollider);
	var particule = go.GetComponent(ParticleSystem);
	//for (var r : Renderer in renderer) {
    	boxCollider.enabled = true;
    	//Debug.Log(boxCollider.name);
    	particule.renderer.enabled = true;
	//}

}


function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		nomParcour = transform.gameObject.name;
		tresorCur = GameObject.Find(nomParcour+ "/Tresor" + numParcour + "-" + i);
		enable(tresorCur);
		declencher = true;
		
	
	}
}





//*/

