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
	
	nomObjet.text= "Le monolithe de Coatlicue";
	texteSerious.text= "Grande sculpture monolithique aztèque	représentant la déesse Coatlicue (déesse de la fertilité)\n2,50 m de hauteur sur plus d'1,60 m de largeur et 1,50 d'épaisseur\n découvert le 13 août 1790.";
	afficheSeriousObjet("b");
	// afficher le menu
	
}

function AddJaune () {
	GameVariables.objetjaune1=1;
	nomObjet.text= 'Le monolithe de Coyolxauhqui ';
	texteSerious.text= "Grand monolithe circulaire représentant la déesse aztèque Coyolxauhqui.\nDisque d'un diamètre compris entre 3,04 et 3,25 m, d'une épaisseur de 30 cm et d'un poids proche de 8 tonnes.\nIl est aujourd’hui exposé au musée du Templo Mayor.";
	afficheSeriousObjet("j");
}

function AddRouge () {
	GameVariables.objetrouge1=1;
	nomObjet.text= 'Le monolithe de Tlaloc';
	texteSerious.text="Grande statue monolithique en ronde-bosse représentant le dieu aztèque Tlaloc.\nmesure environ 7 mètres et pèse aux alentours de 165 tonnes.\n constructruit entre le IVe et VIe siècle.";
	afficheSeriousObjet("r");
}

function AddVert () {
	GameVariables.objetvert1=1;
	nomObjet.text= 'Le monolithe de Tlaltecuhtli';
	texteSerious.text= "Représente la déesse Tlaltecuhtli.Mesure 3,62 m de long sur 4,19 m de large.\nSon épaisseur maximum est de 40 cm et celle du relief sculpté est de 15 cm. Pèse 12,35 tonnes.\nIl est aujourd’hui exposé au musée du Templo Mayor.";
	afficheSeriousObjet("v");
}

function AddBlanc () {
	GameVariables.objetblanc1=1;
	nomObjet.text= '	La pierre de Tizoc';
	texteSerious.text= "La face supérieure du monument cylindrique est ornée d'un disque solaire à huit rayons. \nSur le côté se trouve une frise à caractère historique : quinze représentations\n de guerriers aztèques tenant un captif par les cheveux.";

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