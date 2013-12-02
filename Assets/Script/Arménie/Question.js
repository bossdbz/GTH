#pragma strict

//var question : string;
//var question : GameObject;
var enfants : Transform;

/*function Awake () {
	
	//on désactive les textures fils de notre question,
	//c.a.d la question plus réponse
	enfants = gameObject.GetComponentsInChildren(HingeJoint);
    for(var obj : HingeJoint  in enfants) {
       obj.renderer.enabled = false;
    }
}
//*/

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		
		//enfants = gameObject.GetComponentsInChildren(typeof(Transform));
	  	//enfants.active = true;  
	    GameObject.Find("Question/UnityWatermark-small").SetActive(true);
	    
      
    	
    	
		if( audio ){
			audio.Play();
		}
		
	}
}
//*/