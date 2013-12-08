#pragma strict





private var nomParcour : String;
var numParcour : int;
var nombrePoint : int;
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
		
		//tresorCur.active = true;
		/*if(tresorCur) Debug.Log("trouver"); else Debug.Log("pas trouver");
		Debug.Log(tresorCur.name);
		
		var renderers = tresorCur.GetComponentsInChildren(Renderer);
	
	for (var r : Renderer in renderers) {
    	r.enabled = true;
	}//*/

		
		
		
		
		
		
		
		
		
		
		/*Minuteur();
		world.SendMessage("AddTresor");
		if( audio ){
			audio.Play();
		}
	
		nomObjectParent = transform.gameObject.transform.parent.gameObject.name;
		Debug.Log(nomObjectParent);
		pere = transform.gameObject.name;
		tresor = transform.parent.gameObject.GetComponentsInChildren(typeof(Transform));
		//tresor =  GameObject.Find(nomObjectParent+"/Tresor");
		for(var obj : Transform in tresor){
			Debug.Log(obj.gameObject.name);
			//obj.gameObject.r	enderer.enabled = true;
			//obj.gameObject.collider.enabled = true;
		}//*/
			
	}
}




/*function Minuteur()
{
	// retrieve the GUIText Component and set the text
	textfield = GameObject.Find("GUIPanel/TxtTimer").GetComponent(GUIText);
	UpdateTimerText();
	// start the timer ticking
	TimerTick();
}

function UpdateTimerText()
{
	// update the textfield
	textfield.text = "time:" + currentTime.ToString();
}

function TimerTick()
{
	// while there are seconds left
	while(currentTime > 0)
	{
		// wait for 1 second
		yield WaitForSeconds(1);
		// reduce the time
		currentTime--;
		UpdateTimerText();
	}
	
	// game over and restart
	Application.LoadLevel("Intro");
}
//*/

