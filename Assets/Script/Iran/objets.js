#pragma strict
public var ObjetsRamasses: GUIText;


var go : GUIText;
var menuFin : GUITexture;
var menu : GUIText;

public static class GameViran
{
	public var nb : int = 0;	
}

function Start () {

}

function Update () {

	if(GameViran.nb == 6)
	{
		Time.timeScale = 0.0;
		go.enabled = true;
		menuFin.enabled = true;
		menu.enabled = true;
	
	}
}

function OnTriggerEnter( other : Collider ) {

if(other.tag == "Player")
{
	Destroy(gameObject);	
	GameViran.nb = GameViran.nb + 1;
	Debug.Log(GameViran.nb);
	ObjetsRamasses.text= GameViran.nb+" / 6 Objets ramassés";
}

}

function OnMouseDown() 
{ 
 // if we clicked the play button 
  
   if(this.name == "go") // remplacer si possible par un this.scene, triuc du genre 
  {
  			Time.timeScale = 1.0;
    		Application.LoadLevel("Angleterre");
   }
}