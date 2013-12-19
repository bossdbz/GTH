#pragma strict

public var textVie:GUIText;
public var nbVies:int = 5;

function Awake() 
{ 
 textVie = GameObject.Find("Interface/TextVie").GetComponent(GUIText);
 UpdateVieText();
   
} 

function PerdreVie()
{
	nbVies -= 1;
}

function ajouterVie()
{
	nbVies += 1;
}

function UpdateVieText() 
{ 
 // update the textfield
    
 textVie.text = "Vie" + "\n" + nbVies.ToString();
 
}

function Update()
{
	UpdateVieText();
	if(nbVies == 0)
 {
 	Application.LoadLevel("GameOver"); 
 }
}