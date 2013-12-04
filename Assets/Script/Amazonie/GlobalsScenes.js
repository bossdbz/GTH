#pragma strict




function Start () 
{
}


public static class GameVariables 
{ 
	public var objetbleu = 0;
	public var objetjaune = 0; 
	public var objetrouge = 0; 
	public var objetvert = 0;
	public var objetblanc = 0;  
	public var nombreObjTrouveRdc = 0; 
	
	
	public var RDCwinLvl1=0;
	public var beginLvl1=0;
	



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
		
		textfield2.text="";
   	 	textfield.text="";   
	}

}



function Update ()
{	

}

