#pragma strict

public var textPieces:GUIText;
private var nbPieces:int = 0;

function Awake() 
{ 
 textPieces = GameObject.Find("Interface/TextPiece").GetComponent(GUIText);
 UpdatePiecesText();
   
} 

function AddScore()
{
	nbPieces += 50;
}

function UpdatePiecesText() 
{ 
 // update the textfield
    
 textPieces.text = "Or" + "\n" + nbPieces.ToString(); 
}

function Update()
{
	UpdatePiecesText();
}