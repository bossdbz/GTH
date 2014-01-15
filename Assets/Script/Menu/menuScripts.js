#pragma strict

var anim1=0;
var anim2=0;
var anim3=0;
var anim4=0;
var anim5=0;
var anim6=0;
var	x =0;

public var creditContenu: Transform;
public var po;
public var ro;




public static class Anim 
{ 
	//le rdc
	var beginAnim = 0;
}


//var animation;
function Start () {

	var obj1 = GameObject.Find("creditContenu");
	po = obj1.transform.position; 
	ro = obj1.transform.rotation;
}

function Update () {

//joue la musique
	/*var obj2 = GameObject.Find("creditContenu");
	obj2.animation.Stop("générique");	
		
	Debug.Log("pos : "+ obj2.transform.position.x+","+obj2.transform.position.y+","+obj2.transform.position.z);*/

	if(Time.timeScale == 0.0) Time.timeScale = 1.0;
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
		if(Cam.transform.position.x < -1)
		{
			x =	Time.deltaTime	*	(90);
			Cam.transform.Translate(x,0,0);	
		}else anim6=0;
	}
	
	
	if(Anim.beginAnim == 0)
	{
		var obj = GameObject.Find("creditContenu");
		obj.animation.Stop("générique");
	}
}

function playanimation()
{
	var obj = GameObject.Find("creditContenu");
	obj.animation.Play("générique");
	Anim.beginAnim = 1;
	
}

function OnMouseDown()
{	
	// if we clicked the play button
	Debug.Log("son joué");
	var son = GameObject.Find("son");
	son.audio.Play();
	
	if (this.name == "help")anim1=1;	
	if (this.name == "creditP")
	{
		anim2=1;	
		//jouer l'animation générique.anim
		playanimation();
		//anim = GameObject.name("creditContenu");
		//anim.animation.Play("générique");
	}
	if (this.name == "play")anim3=1;	
	if (this.name == "back1")
	{	
		anim4=1;	
		// annuler l'animation du générique
		var obj = GameObject.Find("creditContenu");
		obj.animation.Stop("générique");	
	
		//on revient a la pos de base
		obj.transform.position.y=-39.77003;
		
		/*var o = Instantiate(creditContenu ,po,ro) ;	
		Destroy(obj);*/
		Anim.beginAnim = 0;
	}
	if (this.name == "back2")anim5=1;	
	if (this.name == "back3")anim6=1;
	
	//les levels
	if (this.name == "niveau1")Application.LoadLevel("Temple Aztèque");	
	if (this.name == "niveau2")Application.LoadLevel("Angleterre");	
	if (this.name == "niveau3")Application.LoadLevel("Arménie");	
	if (this.name == "niveau4")Application.LoadLevel("Syrie");
	if (this.name == "niveau5")Application.LoadLevel("Iran");	
	if (this.name == "niveauBonus")Application.LoadLevel("Chine");
	if (this.name == "niveauBonus1")Application.LoadLevel("bonus azteque");
	if (this.name == "niveauBonus2")Application.LoadLevel("ArménieBonus");
	if (this.name == "niveauBonus3")Application.LoadLevel("Bonus Syrie");
	if (this.name == "niveauBonus5")Application.LoadLevel("Grotte");
	if (this.name == "niveauBonus6")Application.LoadLevel("IleTresor");
	if (this.name == "niveauBonus7")Application.LoadLevel("Labyrinthe");
}