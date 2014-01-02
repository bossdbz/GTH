#pragma strict






var numParcour : int;
var nombrePoint : int;
var chronoTime : int; 

private var nomParcour : String;
private var tresorCur : GameObject; 
var declencher : boolean;
private var i : int;
private var chronoGT : GUIText;
private var textfield : String;
private var gagner : boolean;
private var tempsInitiale : int;
private var infoParcour : GameObject;
private var tresor : GameObject;


function Awake(){
	chronoGT = GameObject.Find("Chrono").GetComponent(GUIText);
	tempsInitiale = chronoTime;
	infoParcour = GameObject.Find("InfoParcour");
	tresor = GameObject.Find("Tresor"+numParcour);
	//Debug.Log("mon tresor" +tresor);
	
	
}

function Update(){
//Debug.Log("dcdcd");
	if ( declencher ){
		if( (chronoTime > 0) && (i <= nombrePoint) ){			
		
			tresorCur = GameObject.Find(nomParcour+ "/Tresor"+ numParcour + "-" + i);
			enable(tresorCur, true);
			Debug.Log("normal");
		}
		else if( (chronoTime > 0) && (i > nombrePoint) ){
				enable(tresor, true);
				gagner = true;
				chronoGT.enabled = false;
				Debug.Log("Gagner1");		
				declencher = false;
				Destroy(gameObject);//*/
				//stopParcour();
		}
		else{
			
			declencher = false;
			chronoGT.enabled = false;
			Debug.Log("Perdu1");//*/
			//stopParcour();
		}//*/
	}//*/
}

function pointSuivant(){
	i++;
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


function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
	Debug.Log("collision parcour");
		//infoParcour.active = true;
		i = 1;
		chronoTime = tempsInitiale;
		StartChrono();
		nomParcour = transform.gameObject.name;
		tresorCur = GameObject.Find(nomParcour+ "/Tresor" + numParcour + "-" + i);
		enable(tresorCur, true);
		declencher = true;
		
	
	}
}

/************************Chrono************************/


function StartChrono()
{
	
	// retrieve the GUIText Component and set the text
	chronoGT.enabled = true;
	//textfield = chronoGT.GetComponent(GUIText);
	UpdateTimerText();
	// start the timer ticking
	TimerTick();
}

function UpdateTimerText()
{
	// update the textfield
	chronoGT.text = "time:" + chronoTime.ToString();
}

function TimerTick()
{
	// while there are seconds left
	while(chronoTime > 0)
	{
		// wait for 1 second
		yield WaitForSeconds(1);
		// reduce the time
		chronoTime--;
		UpdateTimerText();
	}
	
}//*/





