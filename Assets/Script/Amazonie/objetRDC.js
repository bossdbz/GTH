#pragma strict





public function getRDCwin()

{ return GameVariables.RDCwin; }

function Start () {

}

function Update () {

}

function AddBleu () {
	GameVariables.objetbleu=1;
}

function AddJaune () {
	GameVariables.objetjaune=1;
}

function AddRouge () {
	GameVariables.objetrouge=1;
}

function AddVert () {
	GameVariables.objetvert=1;
}

function AddBlanc () {
	GameVariables.objetblanc=1;
}


function OnTriggerEnter( other : Collider ) {

	var GlobalsScenes : GameObject;
	var textfield:GUIText = GameObject.Find("GUIPanel/TxtObjets").GetComponent(GUIText);
	var textfield2:GUIText = GameObject.Find("GUIPanel/TxtTimer").GetComponent(GUIText); 

	if(other.gameObject.CompareTag("Player")){
		Destroy(gameObject);
		
		var obj: GameObject = GameObject.Find("objet-bleu");
		var obj1: GameObject = GameObject.Find("objet-rouge");
		var obj2: GameObject = GameObject.Find("objet-vert");
		var obj3: GameObject = GameObject.Find("objet-blanc");
		var obj4: GameObject = GameObject.Find("objet-jaune");		
		
		
		
		
		if (gameObject.Equals(obj))
		{
			AddBleu();
			GameVariables.nombreObjTrouveRdc++;
			//Debug.Log ("okkkkkkkkk",obj);
			
		}
		if (gameObject.Equals(obj1))
		{
			AddRouge();
			GameVariables.nombreObjTrouveRdc++;
		}
		if (gameObject.Equals(obj2))
		{
			AddVert();
			GameVariables.nombreObjTrouveRdc++;
		}
		if (gameObject.Equals(obj3))
		{
			AddBlanc();
			GameVariables.nombreObjTrouveRdc++;
		}
		if (gameObject.Equals(obj4))
		{
			AddJaune();
			GameVariables.nombreObjTrouveRdc++;
		}
		
		textfield.text = "Objets trouvé : "+ GameVariables.nombreObjTrouveRdc+" /5 ";
		
		
		if((GameVariables.objetbleu) && (GameVariables.objetjaune) && (GameVariables.objetrouge) && (GameVariables.objetvert) && (GameVariables.objetblanc))
		{
			textfield2.text = ""; 
			textfield.text = "bravo !"; 
			GameVariables.RDCwin=1;
		}
		
		
		if( audio ){
			audio.Play();
		}
	}
}