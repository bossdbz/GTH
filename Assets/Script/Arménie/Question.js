#pragma strict

var question : GameObject;
var enfants : Component[];

/*function Awake () {
	
	//on désactive les textures fils de notre question,
	//c.a.d la question plus réponse
	enfants = gameObject.GetComponentsInChildren(HingeJoint);
    for(var obj : HingeJoint  in enfants) {
       obj.renderer.enabled = false;
    }
}
//*/
/*

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		question = GameObject.Find("UnityWatermark-small");
		question.renderer.enabled = true;
		enfants = gameObject.GetComponentsInChildren(Component);
	    
	    if( enfants != null){      
	    Debug.Log("non vide");
        for(var obj : Component  in enfants) {
            obj.active = true;
    	}
    	}
    	else Debug.Log("vide");
		if( audio ){
			audio.Play();
		}
		
	}
}
//*/