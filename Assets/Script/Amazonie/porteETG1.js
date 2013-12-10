#pragma strict
//porteEtage1

var z;
var animationEffectuee=false;




function Start () {
	
}

function Update () {

	
	var porte: GameObject = GameObject.Find("porteEtage1");
	if((GameVariables.Etag1win==1)&&(animationEffectuee==false) )	
	{
			/*var	z =	Time.deltaTime	*	(0.5);
			porte.transform.Translate(0,0,-z);	
			GameVariables.porteOpen1=1;
			var r   = porte.transform.position.x.ToString();
			Debug.Log("ouff="+r);
			
			if(porte.transform.position.x < 10000)
			{*/
				animationEffectuee=true;//empeche que la porte ne se réouvrir
			 Destroy(porte);	
			//}
			
			var textfield:GUIText = GameObject.Find("GUIPanel/TxtObjets").GetComponent(GUIText);
		textfield.text = "La porte s'ouvre"; 
	}	
}

