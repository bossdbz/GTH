#pragma strict

private var i : int = 0;
private var player : GameObject;
private var pas : boolean = false;


private var action1 : GameObject;
private var action2 : GameObject;

var declencher : boolean = false;
var chronoTime : int; 
private var tempsInitiale : int;
private var chronoGT : GUIText;

private var plus : int = 0;

private var j : int = 0;
private var k : int = 0;
private var compl : GameObject[];
private var joueMusique : boolean = false;


public var infoQuiz : GameObject;

public var info : GameObject;



function Awake () {
	
	player = GameObject.Find("First Person Controller");
	
	action1 =  GameObject.Find("Audio/Music/Action1");
	action2 =  GameObject.Find("Audio/Music/Action2");
	compl = GameObject.FindGameObjectsWithTag("compl");
	
	chronoGT = GameObject.Find("Chrono").GetComponent(GUIText);
	tempsInitiale = chronoTime;
	
	
	
	
	
	
}

function Update () {


	plus++;
	

	/*if(Input.GetKey("a")){
		i++;
		if( i > 3 ){
			i = 0;
		}
		changePosition();
	}//*/


		

	if(Input.GetKey("t")){
		i++;
		if( i > 2 ){
			i = 1;
		}
		changePosition();
	}
	
	if (GameVariable.nbrQuiz == 5){
		Application.LoadLevel("Syrie");
	}
	
	if(Input.GetKey("q") || ( (GameVariable.nbrTresor == 4)  )){
		infoQuiz.active = true;
		k++;
		player.transform.position.x = 735.0872;
		player.transform.position.y = 1.05;
		player.transform.position.z = 759.7963;
		if(!declencher){
			
			action1.GetComponent(AudioSource).Play(); 
			action2.GetComponent(AudioSource).Play(); 
			GameObject.Find("Audio/Music/Douce").GetComponent(AudioSource).Stop();
			
			declencher = true;
			StartChrono();
		}
	}
	
	if(Input.GetKey("b")){
		player.transform.position.x = 768.9639;
		player.transform.position.y = 6.251025;
		player.transform.position.z = 787.0493;
		if(!declencher){
		
			action1.GetComponent(AudioSource).Play(); 
			action2.GetComponent(AudioSource).Play(); 
			GameObject.Find("Audio/Music/Douce").GetComponent(AudioSource).Stop();
		
			declencher = true;
			StartChrono();
		}
	}
	
	
	

}

function changePosition(){
	if(i == 1 ){
		player.transform.position.x = 537.4236;
		player.transform.position.y = 1.05;
		player.transform.position.z = 1195.409;
	}
	if(i == 2 ){
		player.transform.position.x = 596.1756;//21.12354
		player.transform.position.y = 1.231298;//-1.963691
		player.transform.position.z = 1305.597;//593.2549//*/
	}
	
	/*if(i == 3 ){
		player.transform.position.x = 942.2211;
		player.transform.position.y = 942.2211;
		player.transform.position.z = 1119.401;
	}//*/
	
	player.transform.rotation.x = player.transform.rotation.y = player.transform.rotation.z = 0;
	//player.transform.rotation = Quaternion()
}



function StartChrono()
{
	
	// retrieve the GUIText Component and set the text
	chronoGT.enabled = true;
	//textfield = chronoGT.GetComponent(GUIText);
	UpdateTimerText();
	// start the timer ticking
	TimerTick();
}


function UpdateTimerText()
{
	// update the textfield
	chronoGT.text = "time:" + chronoTime.ToString();
}

function TimerTick()
{
	// while there are seconds left
	while(chronoTime > 0)
	{	
	
		if ( declencher ){
			
			if(chronoTime == 0)
				Application.LoadLevel("Arménie");
			
			if( j < compl.Length){
				Debug.Log("j : " + j);
				if(chronoTime % 10 == 0){
					compl[j].gameObject.GetComponent(AudioSource).Play();
					Debug.Log("joue : " + compl[j].name);
					j++;
				}
				
			}
		}
		
		// wait for 1 second
		yield WaitForSeconds(1);
		// reduce the time
		chronoTime--;
		UpdateTimerText();
	}
	
}//*/
