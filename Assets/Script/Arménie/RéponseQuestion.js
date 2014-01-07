#pragma strict


var piege : GameObject;
private var parent : GameObject;
function Start () {

}

function Update () {

}

function Awake(){
	parent = gameObject.transform.parent.gameObject.transform.parent.gameObject;
}


function OnMouseDown()
{
	// si le joueur clique sur la bonne réponse,
	// n'affiche plus la question et le jeu reprend,
	// sinon active le piege
	
	if(this.name == "Faux")
	{
		Debug.Log("Faux : " + this.name);
		piege.GetComponent(Animator).enabled = true;
		parent.active = false;
		Time.timeScale = 1.0;
	}//*/
	
	if(this.name == "Vrai")
	{
		Debug.Log("Vrai : " + this.name);
		parent.active = false;
		Time.timeScale = 1.0;
	}
	
}