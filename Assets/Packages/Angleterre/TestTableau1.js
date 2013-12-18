#pragma strict

var enter : boolean;
var DescTab : GUIText;
var ShowDescTab : boolean = false;



function Update () {


	 
if(enter == true && ShowDescTab == false)
	{
		DescTab.fontStyle = FontStyle.Normal;
		DescTab.text = ("Inspecter (F)" + (""));
		
		
		if(Input.GetKeyDown("f"))
		{
			ShowDescTab = true;
			DescTab.fontStyle = FontStyle.Italic;
			if (this.gameObject.tag == "SportPerse")
				{DescTab.text = ("Le tchowgân,  premier jeu de balle en équipe de l’histoire de l’humanité.") + ("\n") + ("C'était un entraînement pour les cavaliers des troupes d’élite") + ("\n") + ("de l’armée et les gardes du roi de Perse.");
				FadeDesc();
				}
			else if (this.gameObject.tag == "FresqueDarius")
				{DescTab.text = ("Mosaïque représentant la bataille d’Issos entre Alexandre le Grand et Darius III.") + ("\n") + ("IIème siècle av. J.-C.");
				FadeDesc();
				}
			else if (this.gameObject.tag == "Granicus")
				{DescTab.text = ("Bataille de Granique, Alexandre le Grand sort vainqueur contre Darius III de Perse.") + ("\n") + ("334 av. J.-C.");
				FadeDesc();
				}
			else if (this.gameObject.tag == "Gaugameles")
				{DescTab.text = ("Bataille de Gaugamèles, affrontement décisif entre Alexandre le Grand et Darius III.") + ("\n") + ("331 av. J.-C.");
				FadeDesc();
				}
			else if (this.gameObject.tag == "FemmeDarius")
				{DescTab.text = ("Mort de la femme de Darius") + ("");
				FadeDesc();
				}
		  }
		
		
	}
	

	
if(enter == false && ShowDescTab == true)
{
	ShowDescTab = false;
	DescTab.text = ("") + ("");


}
}

function FadeDesc(){
yield WaitForSeconds (5);
DescTab.text = ("") + ("");
ShowDescTab = false;
}
//Active l'affichage quand le joueur est à portée
function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("Trigger Enter");
		(enter) = true;
	}
}

//Désactive l'affichage quand le joueur est hors de portée
function OnTriggerExit (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("Trigger Exit");
		(enter) = false;
		DescTab.text = ("") + ("");
	}
}