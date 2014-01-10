#pragma strict

var PauseSerious : boolean = false;
var menuSeriousObjet : GUITexture;
var nomObjet : GUIText;
var Reprendre : GUIText;
var texteSerious: GUIText;
var image6: GUITexture;
var image7: GUITexture;
var image8: GUITexture;
var image9: GUITexture;
var image10: GUITexture;

public function afficheSeriousObjet(s)
{
	PauseSerious = true;
	menuSeriousObjet.enabled = true;
	nomObjet.enabled = true;
	Reprendre.enabled = true;
	Time.timeScale = 0.0;
	texteSerious.enabled= true;
	
	if(s=="b")
		image6.enabled= true;
	if(s=="r")
		image7.enabled= true;
	if(s=="j")
		image8.enabled= true;
	if(s=="v")
		image9.enabled= true;
	if(s=="blanc")
		image10.enabled= true;
}

public function getEtag1win()

{ return GameVariables.Etag1win; }

function Start () {

}

function Update () {

}

function AddBleu () {
	GameVariables.objetbleu1=1;	
	
	nomObjet.text= "Le Couteau azteque";
	texteSerious.text= "Les aztèques arrivent au XIIIe siècle dans la région du Mexique. Ils fondent leur capitale Tenochtitlán, aujourd'hui Mexico.\n La religion aztèque exige de nombreux sacrifices humains.Les cérémonies ont lieu devant le temple, sur la place principale de la ville. \nOn sacrifie des prisonniers mais aussi des Aztèques qui veulent ainsi se rapprocher des dieux. Voici un couteau de sacrifice. C'est un objet d'une grande valeur.\nLa poignée du couteau représente un Guerrier-aigle (distinction honorifique dans l'armée aztèque).";
	afficheSeriousObjet("b");
	// afficher le menu
	
}

function AddJaune () {
	GameVariables.objetjaune1=1;
	nomObjet.text= 'Matlactli Atl " Le Premier Soleil " ';
	texteSerious.text= "IL dure 4 008 années, a cette époque vivaient des géants et Il fut détruit par l’eau.\nOn lui a donné le nom d’Apachiohualiztli (inondation, déluge). Les hommes furent transformés en poissons.\nUn seul couple survécut et repeupla la Terre. D'autres disent que sept couples se cachèrent dans une grotte en attendant la fin du déluge.\nIls repeuplèrent la Terre et furent adorés comme des Dieux par leurs nations";
	afficheSeriousObjet("j");
}

function AddRouge () {
	GameVariables.objetrouge1=1;
	nomObjet.text= 'Ehecoatl " Le Second Soleil " ';
	texteSerious.text="Il dure 4 010 années et fut détruit par Ehecoatl (le Serpent du Vent), les hommes furent changés en singes.\nUn homme et une femme furent sauvés de la destruction…";
	afficheSeriousObjet("r");
}

function AddVert () {
	GameVariables.objetvert1=1;
	nomObjet.text= 'Tleyquiyahuillo " Le Troisième Soleil " ';
	texteSerious.text= "Il dure 4 081 années. Il fut détruit par le feu.\nLes hommes qui descendaient du couple rescapé du second soleil, mangeaient un fruit appelé tzincoacoc";
	afficheSeriousObjet("v");
}

function AddBlanc () {
	GameVariables.objetblanc1=1;
	nomObjet.text= 'Tzontlilic " Le Quatrième Soleil " ';
	texteSerious.text= "Il dure 5 026 années. Les hommes moururent de faim après un déluge de sang et de feu…";

	afficheSeriousObjet("blanc");
}


function OnTriggerEnter( other : Collider ) {

	var GlobalsScenes : GameObject;
	var textfield:GUIText = GameObject.Find("TxtObjets").GetComponent(GUIText);
	var textfield2:GUIText = GameObject.Find("TxtTimer").GetComponent(GUIText); 
	
	var son:GameObject = GameObject.Find("sonObj");
	son.audio.Play();
	
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
		
		var sonWin: GameObject = GameObject.Find("sonWin");
		if((GameVariables.objetbleu1) && (GameVariables.objetjaune1) && (GameVariables.objetrouge1) && (GameVariables.objetvert1) && (GameVariables.objetblanc1))
		{
			textfield2.text = ""; 
			textfield.text = "bravo ! l'etage supérieur est ouvert"; 
			GameVariables.Etag1win=1;
			sonWin.audio.Play();
		}
		
		
		if( audio ){
			audio.Play();
		}
	}
}