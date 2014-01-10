#pragma strict
var read : boolean = false;
var F : GUIText;
var texteF : GUIText;

F.enabled = false;
texteF.enabled = false;


function Start () {
	
}

function Update () {
	if(read)
	{
		gestionAffiche();
	}
}


function gestionAffiche() 
{ 
 	if(Input.GetKey("f")) 
	{  
  			F.enabled = false;
  			texteF.enabled = true;
	}
}


function affiche()
{
	read = true;
	F.enabled = true;
	Debug.Log("affiche");
	
}

function efface()
{
	read = false;
	F.enabled = false;
	texteF.enabled = false;
	Debug.Log("enleve");
}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("entre");
		changeText();
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

function changeText()
{
	if(this.name=="objet-Temple1")
	{
		texteF.text="ok1";
	}
	if(this.name=="objet-Temple2")
	{
		texteF.text="ok2";
	}	
	if(this.name=="objet-Temple3")
	{
		texteF.text="ok1";
	}
	if(this.name=="objet-Temple4")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple5")
	{
		texteF.text="ok1";
	}
	if(this.name=="objet-Temple6")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple7")
	{
		texteF.text="ok1";
	}
	if(this.name=="objet-Temple8")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple9")
	{
		texteF.text="ok1";
	}
	if(this.name=="objet-Temple10")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple11")
	{
		texteF.text="ok1";
	}
	if(this.name=="objet-Temple12")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple13")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple14")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple15")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple16")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple17")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple19")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple20")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple21")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple22")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple23")
	{
		texteF.text="ok2";
	}
	if(this.name=="objet-Temple24")
	{
		texteF.text="ok2";
	}
}