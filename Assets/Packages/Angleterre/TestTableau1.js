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
				{DescTab.text = ("Mosaïque représentant la bataille d’Issos entre Alexandre le Grand et Darius III.") + ("\n") + ("Novembre 333 av. J.-C.");
				FadeDesc();
				}
			else if (this.gameObject.tag == "Granicus")
				{DescTab.text = ("Bataille du Granique, Alexandre le Grand sort vainqueur contre Darius III de Perse.") + ("\n") + ("Mai 334 av. J.-C.");
				FadeDesc();
				}
			else if (this.gameObject.tag == "Gaugameles")
				{DescTab.text = ("Bataille de Gaugamèles, affrontement décisif entre Alexandre le Grand et Darius III.") + ("\n") + ("Octobre 331 av. J.-C.");
				FadeDesc();
				}
			else if (this.gameObject.tag == "FemmeDarius")
				{DescTab.text = ("Mort de la femme de Darius") + ("");
				FadeDesc();
				}
			else if (this.gameObject.tag == "Biblio1")
				{DescTab.text = ("Avril 334 av J-C:") +("\n") + ("l’armée macédonienne, menée par Alexandre le Grand, traverse l’Hellespont") + ("\n") + ("(passage maritime reliant la mer Égée et la mer de Marmara, au nord de la Turquie),") + ("\n") + ("Darius sous-estime la menace et n’intervient pas.");
				FadeDesc();
				}
			else if (this.gameObject.tag == "Biblio2")
			{DescTab.text = ("Novembre 333 av J-C:") + ("\n") + ("Lors de la défaite de la bataille d'Issos, Darius y abandonne ses attributs royaux") + ("\n") + ("(son arc, son bouclier et son manteau) ainsi que sa famille (sa mère, sa femme, ") + ("\n") +  ("son fils et ses 2 filles).");
				FadeDesc();
				}
			else if (this.gameObject.tag == "Biblio3")
			{DescTab.text = ("Octobre 331 av J-C:") + ("\n") + ("Après sa dernière défaite à Gaugamèles, Darius fuit vers les montagnes de Médie") + ("\n") + ("(nord-ouest de l’Iran actuel). abandonné par ses fidèles, il est assassiné par Nabarzane") + ("\n") + ("(un de ses généraux) et le satrape Bessos (un satrape est un gouverneur d’une division") + ("\n") +  ("administrative de l’Empire perse). Ce dernier se proclame roi de Perse en 330 av J-C.");
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
yield WaitForSeconds (10);
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