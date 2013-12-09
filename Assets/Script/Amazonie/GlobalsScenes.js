#pragma strict

function Start () 
{
}



public static class GameVariables 
{ 
	//le rdc
	public var objetbleu = 0;
	public var objetjaune = 0; 
	public var objetrouge = 0; 
	public var objetvert = 0;
	public var objetblanc = 0;  
	public var nombreObjTrouveRdc = 0; 
	
	
	public var RDCwinLvl1=0;
	public var beginLvl1=0;
	public var porteOpen=0;

	//etage1

	public var objetbleu1 = 0;
	public var objetjaune1 = 0; 
	public var objetrouge1 = 0; 
	public var objetvert1 = 0;
	public var objetblanc1 = 0;  
	public var nombreObjTrouveETG1 = 0; 

	public var Etag1win=0;
	public var porteOpen1=0;
	public var CurrentPositionCheck: Vector3;
	
	
	var pos = GameObject.Find("checkpoint1");
	var pos1 = GameObject.Find("checkpoint2");		
	public var positionCheck1: Vector3= pos.transform.position;
	public var etatCheck1 : boolean = false ;
	public var positionCheck2: Vector3= pos1.transform.position;
	public var etatCheck2 : boolean = false ;
	
	
	
	
	public var textfield2:GUIText;
	public var textfield:GUIText;


 	public static function resetLvl1()
	{
		objetbleu = 0;
		objetjaune = 0; 
		objetrouge = 0; 
		objetvert = 0;
		objetblanc = 0;  
		nombreObjTrouveRdc = 0; 
		RDCwinLvl1=0;
		beginLvl1=0;
		porteOpen=0;
	}
	
	
	public static function resetAllVariable()
	{
		objetbleu = 0;
		objetjaune = 0; 
		objetrouge = 0; 
		objetvert = 0;
		objetblanc = 0;  
		nombreObjTrouveRdc = 0; 
		RDCwinLvl1=0;
		beginLvl1=0;
		porteOpen=0;
		
		textfield2.text="";
   	 	textfield.text="";   
	}

}



function Update ()
{	

}

