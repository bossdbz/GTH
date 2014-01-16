#pragma strict
var affichage : GUIText;





function Start () {
	affichage.enabled=false;
}

function Update () {

}

function OnTriggerEnter( other : Collider ) 
{
	Debug.Log("Initialise");
	GameVariables.TabQuestions.push(" Les aztèques sont aussi appelés Mexicas ?");
	GameVariables.TabReponses.push("vrai");
	GameVariables.TabUtilise.push(0);
	
	GameVariables.TabQuestions.push("Le vocable « Aztèque » est un terme d'origine européenne ?");
	GameVariables.TabReponses.push("faux");
	GameVariables.TabUtilise.push(0);
	
	GameVariables.TabQuestions.push("La langue des aztèque est le Nahuatl ?");
	GameVariables.TabReponses.push("vrai");
	GameVariables.TabUtilise.push(0);
	
	GameVariables.TabQuestions.push("La ville d’origine des aztèques (Aztan) serait située au nord d’une montagne ?");
	GameVariables.TabReponses.push("faux");
	GameVariables.TabUtilise.push(0);
	
	GameVariables.TabQuestions.push("Le blason du Mexique est inspiré d’un lion aztèque?");
	GameVariables.TabReponses.push("faux");
	GameVariables.TabUtilise.push(0);
	
	GameVariables.TabQuestions.push("Ce sont les portugais qui ont mis fin à l’empire aztèques ? ");
	GameVariables.TabReponses.push("faux");
	GameVariables.TabUtilise.push(0);
	
	GameVariables.TabQuestions.push("L’empire aztèque a pris fin en 1524 ?");
	GameVariables.TabReponses.push("vrai");
	GameVariables.TabUtilise.push(0);
	
	GameVariables.TabQuestions.push("La conquête de l’empire aztèque dura plusieurs années ? ");
	GameVariables.TabReponses.push("faux");
	GameVariables.TabUtilise.push(0);
	
	GameVariables.TabQuestions.push("La ville de Mexico a été construite sur les ruines de Tenochtitlan ?");
	GameVariables.TabReponses.push("vrai");
	GameVariables.TabUtilise.push(0);
	
	GameVariables.TabQuestions.push(" Comme il n’y avait pas d'animaux de trait et de véhicules à roues,\n leur principal mode de transport était la marche à pied ?");
	GameVariables.TabReponses.push("vrai");
	GameVariables.TabUtilise.push(0);

	GameVariables.TabQuestions.push(" Les aztèques ne mangeaient pas d’animaux car ils les considéraient comme “sacrés” ?");
	GameVariables.TabReponses.push("faux");
	GameVariables.TabUtilise.push(0);
	
	
	//Debug.Log(GameVariables.TabQuestions.length);
	
}