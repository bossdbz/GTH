#pragma strict





public function getEtag1win()

{ return GameVariables.Etag1win; }

function Start () {

}

function Update () {

}

function AddBleu () {
	GameVariables.objetbleu1=1;
}

function AddJaune () {
	GameVariables.objetjaune1=1;
}

function AddRouge () {
	GameVariables.objetrouge1=1;
}

function AddVert () {
	GameVariables.objetvert1=1;
}

function AddBlanc () {
	GameVariables.objetblanc1=1;
}


function OnTriggerEnter( other : Collider ) {

	var GlobalsScenes : GameObject;
	var textfield:GUIText = GameObject.Find("TxtObjets").GetComponent(GUIText);
	var textfield2:GUIText = GameObject.Find("TxtTimer").GetComponent(GUIText); 

	if(other.gameObject.CompareTag("Player")){
		Destroy(gameObject);
		
		var obj: GameObject = GameObject.Find("objet-bleu1");
		var obj1: GameObject = GameObject.Find("objet-rouge1");
		var obj2: GameObject = GameObject.Find("objet-vert1");
		var obj3: GameObject = GameObject.Find("objet-blanc1");
		var obj4: GameObject = GameObject.Find("objet-jaune1");		
		
		
		
		
		if (gameObject.Equals(obj))
		{
			AddBleu();
			GameVariables.nombreObjTrouveETG1++;
			//Debug.Log ("okkkkkkkkk",obj);
			
		}
		if (gameObject.Equals(obj1))
		{
			AddRouge();
			GameVariables.nombreObjTrouveETG1++;
		}
		if (gameObject.Equals(obj2))
		{
			AddVert();
			GameVariables.nombreObjTrouveETG1++;
		}
		if (gameObject.Equals(obj3))
		{
			AddBlanc();
			GameVariables.nombreObjTrouveETG1++;
		}
		if (gameObject.Equals(obj4))
		{
			AddJaune();
			GameVariables.nombreObjTrouveETG1++;
		}
		
		//si on a bien fini le rdc
		if(( GameVariables.CurrentPositionCheck!=GameVariables.positionCheck1) || ( GameVariables.CurrentPositionCheck!=GameVariables.positionCheck2))
			textfield.text = "Objets trouvé : "+ GameVariables.nombreObjTrouveETG1+" /5 ";
		
		
		if((GameVariables.objetbleu1) && (GameVariables.objetjaune1) && (GameVariables.objetrouge1) && (GameVariables.objetvert1) && (GameVariables.objetblanc1))
		{
			textfield2.text = ""; 
			textfield.text = "bravo ! l'etage supérieur est ouvert"; 
			GameVariables.Etag1win=1;
		}
		
		
		if( audio ){
			audio.Play();
		}
	}
}