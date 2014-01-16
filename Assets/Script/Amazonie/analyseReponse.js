#pragma strict
var affichage : GUIText;
var son : AudioSource;

function Start () {
	
}

function Update () {

}

function remiseAzero()
{
 	//des tableaux
 	son.Play();
 	for(var i =0;i < GameVariables.TabQuestions.length;i++)
 	{
 		GameVariables.TabQuestions.shift();
 		GameVariables.TabReponses.shift();
 		GameVariables.TabUtilise.shift();	
 		
 	}
}

function respawn()
{
	var obj: GameObject = GameObject.Find("First Person Controller");
	var obj1: GameObject = GameObject.Find("CubeDeb");
	obj.transform.transform.position.x= obj1.transform.transform.position.x;
	obj.transform.transform.position.y= obj1.transform.transform.position.y-3;
	obj.transform.transform.position.z= obj1.transform.transform.position.z+14;
	
}


function OnTriggerEnter( other : Collider ) 
{
	var ok = true;
	
	if(this.name=="vrai1")
	{
		//affiche question 
		if(GameVariables.vrai1!="ok")
		{
			remiseAzero();
			//replacement
			respawn();
			
			affichage.text="Mauvaise réponse, vous pouvez rebrousser le chemin\n et tenter de trouver la réponse à travers le temple";
			ok =false;
		}
	}
	if(this.name=="vrai2")
	{
		//affiche question 
		if(GameVariables.vrai2!="ok")
		{
			remiseAzero();
			//replacement
			respawn();	
			
			affichage.text="Mauvaise réponse, vous pouvez rebrousser le chemin\n et tenter de trouver la réponse à travers le temple";
			ok =false;
		}
			    
	}
	
	if(this.name=="vrai3")
	{
		if(GameVariables.vrai3!="ok")
		{
			remiseAzero();
			//replacement
			respawn();
			
			affichage.text="Mauvaise réponse, vous pouvez rebrousser le chemin\n et tenter de trouver la réponse à travers le temple";
			ok =false;
		}
			    
	}
	
	if(this.name=="vrai4")
	{
		//affiche question 
		if(GameVariables.vrai4!="ok")
		{
			remiseAzero();
			//replacement	
			respawn();
			
			affichage.text="Mauvaise réponse, vous pouvez rebrousser le chemin\n et tenter de trouver la réponse à travers le temple";
			ok =false;
		}
			    
	}
	
	if(this.name=="faux1")
	{
		//affiche question 
		if(GameVariables.faux1!="ok")
		{
			remiseAzero();
			//replacement	
			respawn();
			
			affichage.text="Mauvaise réponse, vous pouvez rebrousser le chemin\n et tenter de trouver la réponse à travers le temple";
			ok =false;
		}
			    
	}
	
	if(this.name=="faux2")
	{
		//affiche question 
		if(GameVariables.faux2!="ok")
		{
			remiseAzero();
			//replacement	
			respawn();
			
			affichage.text="Mauvaise réponse, vous pouvez rebrousser le chemin\n et tenter de trouver la réponse à travers le temple";
			ok =false;
		}
			    
	}
	
	if(this.name=="faux3")
	{
		//affiche question 
		if(GameVariables.faux3!="ok")
		{
			remiseAzero();
			//replacement
			respawn();	
			
			affichage.text="Mauvaise réponse, vous pouvez rebrousser le chemin\n et tenter de trouver la réponse à travers le temple";
			ok =false;
		}
			    
	}
	
	if(this.name=="faux4")
	{
		//affiche question 
		if(GameVariables.faux4!="ok")
		{
			remiseAzero();
			//replacement	
			respawn();
			
			affichage.text="Mauvaise réponse, vous pouvez rebrousser le chemin\n et tenter de trouver la réponse à travers le temple";
			ok =false;
		}
			    
	}
	
	if(ok) affichage.enabled=false;

}