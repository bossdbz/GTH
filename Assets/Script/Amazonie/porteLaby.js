#pragma strict
var z;
var colliderTriged =false;
var animationEffectuee=false;




function Start () {
	
}

function Update () {

	
	var porte: GameObject = GameObject.Find("porteRdc");
	if((GameVariables.RDCwinLvl1==1)&&(colliderTriged==true)&&(animationEffectuee==false) )	
	{
			porte.audio.Play();
			var	z =	Time.deltaTime	*	(0.5);
			porte.transform.Translate(0,0,-z);	
			GameVariables.porteOpen=1;
			var r   = porte.transform.position.x.ToString();
			Debug.Log("ouff="+r);
			
			
			
			if(porte.transform.position.x < 1097.8)
			{
				animationEffectuee=true;//empeche que la porte ne se réouvrir
				
			}
	}	
}


function OnTriggerEnter( other : Collider ) 
{
	//ouverture de la porte
	if(GameVariables.RDCwinLvl1==1)
	{
		colliderTriged=true;
		var textfield:GUIText = GameObject.Find("TxtObjets").GetComponent(GUIText);
		textfield.text = "La porte s'ouvre"; 
	}
	
		
}