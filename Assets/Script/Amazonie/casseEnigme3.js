#pragma strict
var sonD:AudioSource;


function Start () {

}

function Update () {

}
//le parcous est bon
function testBonneVoie()
{
	
	for(var i=0;i<GameVariables.CurrentTab.length;i++)
	{
			if(GameVariables.CurrentTab[i]!=GameVariables.TabEnigme3[i])
				return false;		
	}
	
	return true;
	
}

//le parcous est accomplis
function testVictoire()
{
	if(GameVariables.CurrentTab.length == GameVariables.TabEnigme3.length )
	{
		for(var i=0;i<GameVariables.CurrentTab.length;i++)
		{
			if(GameVariables.CurrentTab[i]!=GameVariables.TabEnigme3[i])
				return false;		
		} return true;
	
	}
	else return false;

}



function OnTriggerEnter( other : Collider ) {
Debug.Log(this.name);
				
				
	
	if(this.name != "Cube")
	{
		var nom = whatIsName(this.name);
		GameVariables.CurrentTab.push(nom);
		
		//si on a tjs pas gagné
		if(!testVictoire())
		{	//si on est sur la bonne voie
			if(testBonneVoie())
			{
				var val="";
				for(var i=0;i<GameVariables.CurrentTab.length;i++)
				{
					var obj = GameObject.Find("Cube-E"+	GameVariables.CurrentTab[i]);
					// obje change couleur des bon cube
					//obj.renderer.material.color = Color.black;
					val+=GameVariables.CurrentTab[i]+"+";
					
				}
				//Debug.Log("good");
				Debug.Log(val);
			}
		
		}
		//on a gagné
		else {
			Debug.Log("victoire");
			//ouvrir port
			var o = GameObject.Find("Mur_Terre_final");
			Destroy(o);
			//jouer anim
			
			//jouer musique
			var so = GameObject.Find("sonWin");
			var so2 = GameObject.Find("tresure_boxBig");
			so.audio.Play();
			so2.audio.Play();
		}
	}
	else{
		//Debug.Log("perdu");
		//perdu
		for(var j =0;j<GameVariables.CurrentTab.length;j++)
		{
			GameVariables.CurrentTab.shift();
		}
		
		//jouer un son
		sonD.Play();
	}
	
}

function whatIsName(n)
{
	if(n=="Cube-E2")
		return 2;
	if(n=="Cube-E8")
		return 8;
	if(n=="Cube-E9")
		return 9;
	if(n=="Cube-E10")
		return 10;
	if(n=="Cube-E11")
		return 11;
	if(n=="Cube-E12")
		return 12;
	if(n=="Cube-E18")
		return 18;
	if(n=="Cube-E21")
		return 21;
	if(n=="Cube-E22")
		return 22;
	if(n=="Cube-E23")
		return 23;
	if(n=="Cube-E24")
		return 24;
	if(n=="Cube-E25")
		return 25;
	if(n=="Cube-E26")
		return 26;
	if(n=="Cube-E27")
		return 27;
	if(n=="Cube-E29")
		return 29;
	if(n=="Cube-E30")
		return 30;
	if(n=="Cube-E31")
		return 31;
	if(n=="Cube-E37")
		return 37;
	if(n=="Cube-E39")
		return 39;
		
	if(n=="Cube-E40")
		return 40;
		
	if(n=="Cube-E41")
		return 41;
	
	if(n=="Cube-E43")
		return 43;
	
	if(n=="Cube-E44")
		return 44;
	if(n=="Cube-E45")
		return 45;
	if(n=="Cube-E47")
		return 47;

}