#pragma strict
var affichage : GUIText;





function Start () {
	
}

function Update () {

}

function choixAlea()
{
	var size = Random.Range(0,GameVariables.TabQuestions.length-1);
	
	
	while ( GameVariables.TabUtilise[size] != 0)
	{
		size = Random.Range(0,GameVariables.TabQuestions.length-1);
	}
	Debug.Log(size);
	return size;
}

function OnTriggerEnter( other : Collider ) 
{
	var ok =choixAlea();
	affichage.enabled=true;
	if(this.name=="question1")
	{
		//Debug.Log("question1");
		//affiche question 
		affichage.text=GameVariables.TabQuestions[ok];
		
		if(GameVariables.TabReponses[ok]=="vrai")
			GameVariables.vrai1="ok";
		else GameVariables.faux1="ok";
		
		//efface la question
		
	}
		
	if(this.name=="question2")
	{
		//Debug.Log("question2");
		affichage.text=GameVariables.TabQuestions[ok];
		if(GameVariables.TabReponses[ok]=="vrai")
			GameVariables.vrai2="ok";
		else GameVariables.faux2="ok";
	}
	
	if(this.name=="question3")
	{
		//Debug.Log("question3");
		affichage.text=GameVariables.TabQuestions[ok];
		if(GameVariables.TabReponses[ok]=="vrai")
			GameVariables.vrai3="ok";
		else GameVariables.faux3="ok";
	}
	
	if(this.name=="question4")
	{
		//Debug.Log("question4");
		affichage.text=GameVariables.TabQuestions[ok];
		if(GameVariables.TabReponses[ok]=="vrai")
			GameVariables.vrai4="ok";
		else GameVariables.faux4="ok";
	}
}