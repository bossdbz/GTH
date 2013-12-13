#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {

	//un nouveau checkpoint est crée
	if(this.name=="checkpoint1")
	{
		if(GameVariables.etatCheck1==false)
		{
			GameVariables.etatCheck1=true;
			GameVariables.CurrentPositionCheck=GameVariables.positionCheck1;
		}
		
		Debug.Log("le checkp est ="+GameVariables.CurrentPositionCheck);
	}
	if(this.name=="checkpoint2")
	{
		if(GameVariables.etatCheck2==false)
		{
			GameVariables.etatCheck2=true;
			GameVariables.CurrentPositionCheck=GameVariables.positionCheck2;
		}
		Debug.Log("le checkp est ="+GameVariables.CurrentPositionCheck);
	}
}