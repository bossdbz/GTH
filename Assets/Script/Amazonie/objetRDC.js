#pragma strict

var PauseSerious : boolean = false;
var menuSeriousObjet : GUITexture;
var nomObjet : GUIText;
var Reprendre : GUIText;
var texteSerious: GUIText;
var image: GUITexture;
var image2: GUITexture;
var image3: GUITexture;
var image4: GUITexture;
var image5: GUITexture;

public function afficheSeriousObjet(s)
{
	PauseSerious = true;
	menuSeriousObjet.enabled = true;
	nomObjet.enabled = true;
	Reprendre.enabled = true;
	Time.timeScale = 0.0;
	texteSerious.enabled= true;	
	
	if(s=="b")
		image.enabled= true;
	if(s=="r")
		image2.enabled= true;
	if(s=="j")
		image3.enabled= true;
	if(s=="v")
		image4.enabled= true;
	if(s=="blanc")
		image5.enabled= true;
}


public function getRDCwin()

{ return GameVariables.RDCwinLvl1; }

function Start () {

}

function Update () {

}

function AddBleu () {
	GameVariables.objetbleu=1;	
	
	nomObjet.text= "Le Couteau azteque";
	texteSerious.text= "Les aztèques arrivent au XIIIe siècle dans la région du Mexique. Ils fondent leur capitale Tenochtitlán, aujourd'hui Mexico.\n La religion aztèque exige de nombreux sacrifices humains.Les cérémonies ont lieu devant le temple, sur la place principale de la ville. \nOn sacrifie des prisonniers mais aussi des Aztèques qui veulent ainsi se rapprocher des dieux. Voici un couteau de sacrifice. C'est un objet d'une grande valeur.\nLa poignée du couteau représente un Guerrier-aigle (distinction honorifique dans l'armée aztèque).";
	afficheSeriousObjet("b");
	// afficher le menu
	
}

function AddJaune () {
	GameVariables.objetjaune=1;
	nomObjet.text= 'Matlactli Atl " Le Premier Soleil " ';
	texteSerious.text= "IL dure 4 008 années, a cette époque vivaient des géants et Il fut détruit par l’eau.\nOn lui a donné le nom d’Apachiohualiztli (inondation, déluge). Les hommes furent transformés en poissons.\nUn seul couple survécut et repeupla la Terre. D'autres disent que sept couples se cachèrent dans une grotte en attendant la fin du déluge.\nIls repeuplèrent la Terre et furent adorés comme des Dieux par leurs nations";
	afficheSeriousObjet("j");
}

function AddRouge () {
	GameVariables.objetrouge=1;
	nomObjet.text= 'Ehecoatl " Le Second Soleil " ';
	texteSerious.text="Il dure 4 010 années et fut détruit par Ehecoatl (le Serpent du Vent), les hommes furent changés en singes.\nUn homme et une femme furent sauvés de la destruction…";
	afficheSeriousObjet("r");
}

function AddVert () {
	GameVariables.objetvert=1;
	nomObjet.text= 'Tleyquiyahuillo " Le Troisième Soleil " ';
	texteSerious.text= "Il dure 4 081 années. Il fut détruit par le feu.\nLes hommes qui descendaient du couple rescapé du second soleil, mangeaient un fruit appelé tzincoacoc";
	afficheSeriousObjet("v");
}

function AddBlanc () {
	GameVariables.objetblanc=1;
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
		var sonWin: GameObject = GameObject.Find("sonWin");
		
		if((GameVariables.objetbleu) && (GameVariables.objetjaune) && (GameVariables.objetrouge) && (GameVariables.objetvert) && (GameVariables.objetblanc))
		{
			textfield2.text = ""; 
			//textfield.text = "bravo !"; 
			GameVariables.RDCwinLvl1=1;
			
			//jouer son
			
			sonWin.audio.Play();
		}
		
		
		if( audio ){
			audio.Play();
		}
	}
}