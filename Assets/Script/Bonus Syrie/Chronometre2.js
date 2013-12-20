#pragma strict



var numParcour : int;
var nombrePoint : int;
var chronoTime : int; 


private var nomParcour : String;
private var tresorCur : GameObject; 
private var declencher : boolean;
private var i : int = 1;

private var chronoGT : GUIText;

private var FinChrono : GUIText;

private var textfield : String;
private var gagner : boolean;





//var FinChrono : GameObject;

function Awake(){
	chronoGT = GameObject.Find("Chrono").GetComponent(GUIText);
	//FinChrono = GameObject.Find("GameOver/FinTemps").GetComponent(GUIText);
}



function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
	Debug.Log("collision parcour");
		StartChrono();
		nomParcour = transform.gameObject.name;
		//tresorCur = GameObject.Find(nomParcour+ "/Tresor" + numParcour + "-" + i);
		declencher = true;
		
	
	}
}




function StartChrono()
{
	
	// retrieve the GUIText Component and set the text
	chronoGT.enabled = true;
	//texture.enabled = true;
	//textfield = chronoGT.GetComponent(GUIText);
	UpdateTimerText();
	// start the timer ticking
	TimerTick();
}

function UpdateTimerText()
{
	// update the textfield
	chronoGT.text =  chronoTime.ToString();
}

function TimerTick()
{
	// while there are seconds left
	while(chronoTime > 0)
	{
		// wait for 1 second
		yield WaitForSeconds(1);
		// reduce the time
		chronoTime--;
		UpdateTimerText();
	}
}
	
function Update(){
if (chronoTime==0) {

//FinChrono.enabled = true;


GameVariable.nbrVie--;




Application.LoadLevel("Syrie");

}
}