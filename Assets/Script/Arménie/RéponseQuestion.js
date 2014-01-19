#pragma strict


var piege : GameObject[];
private var parent : GameObject;


function Start () {

}

function Update () {

}

function Awake(){
	parent = gameObject.transform.parent.gameObject.transform.parent.gameObject;
}


function OnTriggerEnter( other : Collider )
{
	// si le joueur clique sur la bonne réponse,
	// n'affiche plus la question et le jeu reprend,
	// sinon active le piege
	//yield WaitForSeconds(10);
	if(transform.parent.gameObject.name == "Vrai"){
		GameVariable.nbrQuiz++;
	}
	Debug.Log("Faux : " + this.name);
	for(var g : GameObject in piege){
		g.GetComponent(Animator).enabled = true;
	
	}
		
}