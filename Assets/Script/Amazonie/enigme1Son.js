#pragma strict

#pragma strict


var read : boolean = false;
var F1 : GUIText;
var sound : AudioSource;
public var effet: Transform;
F1.enabled = false;




function Start () {
	
}

function Update () {
	
	
	if(read)
	{
		gestionAffiche();
	}
	
	
	if(GameVariables.nbdetruit == 16)
	{
		var son :GameObject=GameObject.Find("sonWin");
		son.audio.Play();
		
		var porte :GameObject=GameObject.Find("porteET2");
		Destroy(porte);
		
		//Instantiate(effetPorte ,porte.transform.position ,  Quaternion.identity);
		
	}
	
		
}


function gestionAffiche() 
{ 
	
	
 	if(Input.GetKeyDown("f")) 
	{  
  			
  			// joue son
  			if(audio)
  			{
  				sound.Play();
  				//Debug.Log("joue le son");
  				//gestionGame(this.name);// Sphere1
  				GameVariables.Tab1.push(gameObject);
  				
  				if(GameVariables.Tab1.length ==3 ) GameVariables.Tab1.shift();//on enleve le premier
  				
  				var test=false; 
  				Debug.Log(GameVariables.Tab1.length);
  				
  				
  				if(GameVariables.Tab1.length == 2)  				
  					test = test2a2(GameVariables.Tab1[0],GameVariables.Tab1[1]);
  					
  				if( test )
  				{
  					//playAnimation(GameVariables.Tab1[0],GameVariables.Tab1[1]);
  					var obj1 : GameObject = GameVariables.Tab1[0];
  					var obj2 : GameObject = GameVariables.Tab1[1];
  					
  					Instantiate(effet , obj1.transform.position ,  Quaternion(0,-45, 0, 0));
					Instantiate(effet ,obj2.transform.position ,   Quaternion(0,-45, 0, 0));
  					
  					GameVariables.nbdetruit = GameVariables.nbdetruit + 2;
  					
  					Destroy(GameVariables.Tab1[0]);
  					Destroy(GameVariables.Tab1[1]);				
  					
  					for(var i=0; i < GameVariables.Tab1.length ; i++)
					{ 
						GameVariables.Tab1.shift();
					}
  				
  				}
  				
  				Debug.Log(GameVariables.nbdetruit);
  				  				  				
  			}
  			
  			F1.enabled = false;
	}
	//Debug.Log(GameVariables.dernier);
	//Debug.Log(Tab[0]);Debug.Log(Tab[1]);Debug.Log(Tab[2]);Debug.Log(Tab[3]);			
	
}




function test2a2(a,b)
{
	var good =false;	
	var obj1 : GameObject=a;
	var obj2 : GameObject=b;
	//var na =obj1.name+"+"+obj2.name;
	//Debug.Log(obj1.name);
	if(((obj1.name == "Sphere1" ) && (obj2.name  == "Sphere2" ))||((obj1.name == "Sphere2" ) && (obj2.name  == "Sphere1" )))
	{
		Debug.Log("ok");
		good = true;
	}
	if(((obj1.name == "Sphere3") && (obj2.name  == "Sphere4" ))||((obj1.name == "Sphere4" ) && (obj2.name  == "Sphere3" )))
	{
		good = true;
	}
	if(((obj1.name == "Sphere5") && (obj2.name  == "Sphere6" ))||((obj1.name == "Sphere6" ) && (obj2.name  == "Sphere5" )))
	{
		good = true;
	}
	if(((obj1.name  == "Sphere7") && (obj2.name  == "Sphere8" ))||((obj1.name == "Sphere8" ) && (obj2.name  == "Sphere7" )))
	{
		good = true;
	}
	if(((obj1.name == "Sphere9") && (obj2.name  == "Sphere10" ))||((obj1.name == "Sphere10" ) && (obj2.name  == "Sphere9" )))
	{
		good = true;
	}
	if(((obj1.name == "Sphere11" ) && (obj2.name  == "Sphere12" ))||((obj1.name == "Sphere12" ) && (obj2.name  == "Sphere11" )))
	{
		good = true;
	}
	if(((obj1.name == "Sphere13" ) && (obj2.name == "Sphere14" ))||((obj1.name == "Sphere14" ) && (obj2.name  == "Sphere13" )))
	{
		good = true;
	}
	if(((obj1.name == "Sphere15" ) && (obj2.name == "Sphere16" ))||((obj1.name == "Sphere16" ) && (obj2.name  == "Sphere15" )))
	{
		good = true;
	}		
	
	
	return good;
}	

function affiche()
{
	read = true;
	F1.enabled = true;
	Debug.Log("affiche");
	
}

function efface()
{
	read = false;
	F1.enabled = false;
	Debug.Log("enleve");
}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("entre");
		affiche();		
	}
	
}

function OnTriggerExit (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("sort");
		efface();		
	}
}
