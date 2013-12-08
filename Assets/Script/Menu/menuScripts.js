#pragma strict

var anim1=0;
var anim2=0;
var anim3=0;
var anim4=0;
var anim5=0;
var anim6=0;
var	x =0;
function Start () {

}

function Update () {

//joue la musique

	


	var Cam:  GameObject = GameObject.FindGameObjectWithTag("MainCamera");
	if(anim1==1)
	{
		if(Cam.transform.position.x < 81)
		{
			var	x =	Time.deltaTime	*	(90);
			Cam.transform.Translate(x,0,0);			
		}else anim1=0;
	}
	if(anim2==1)
	{
		if(Cam.transform.position.y < 21)
		{
			x =	Time.deltaTime	*	(50);
			Cam.transform.Translate(0,x,0);			
		}else anim2=0;
	}
	if(anim3==1)
	{
		if(Cam.transform.position.x > -81)
		{
			x =	Time.deltaTime	*	(90);
			Cam.transform.Translate(-x,0,0);		
		}else anim3=0;
	}
	if(anim4==1)
	{
		if(Cam.transform.position.y > 0)
		{
			x =	Time.deltaTime	*	(50);
			Cam.transform.Translate(0,-x,0);			
		}else anim4=0;
	}
	if(anim5==1)
	{
		if(Cam.transform.position.x > 0)
		{
			x =	Time.deltaTime	*	(90);
			Cam.transform.Translate(-x,0,0);			
		}else anim5=0;
	}
	if(anim6==1)
	{
		if(Cam.transform.position.x < 0)
		{
			x =	Time.deltaTime	*	(90);
			Cam.transform.Translate(x,0,0);	
		}else anim6=0;
	}
}

function OnMouseDown()
{	
	// if we clicked the play button
	if (this.name == "help")anim1=1;	
	if (this.name == "credit")anim2=1;	
	if (this.name == "play")anim3=1;	
	if (this.name == "back1")anim4=1;	
	if (this.name == "back2")anim5=1;	
	if (this.name == "back3")anim6=1;
	
	//les levels
	if (this.name == "niveau1")Application.LoadLevel("Temple Aztèque");;	
	if (this.name == "niveau2")Application.LoadLevel("Angleterre");;	
	if (this.name == "niveau3")Application.LoadLevel("Arménie");;	
	if (this.name == "niveau4")Application.LoadLevel("Syrie");;	
	if (this.name == "niveau5")Application.LoadLevel("Iran");;	
	if (this.name == "niveauBonus")Application.LoadLevel("Chine");;
}