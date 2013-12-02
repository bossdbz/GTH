#pragma strict

function Start () {

}

function Update () {

}


/*
function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		Minuteur();
		world.SendMessage("AddTresor");
		if( audio ){
			audio.Play();
		}
	}
}




function Minuteur()
{
	// retrieve the GUIText Component and set the text
	textfield = GameObject.Find("GUIPanel/TxtTimer").GetComponent(GUIText);
	UpdateTimerText();
	// start the timer ticking
	TimerTick();
}

function UpdateTimerText()
{
	// update the textfield
	textfield.text = "time:" + currentTime.ToString();
}

function TimerTick()
{
	// while there are seconds left
	while(currentTime > 0)
	{
		// wait for 1 second
		yield WaitForSeconds(1);
		// reduce the time
		currentTime--;
		UpdateTimerText();
	}
	
	// game over and restart
	Application.LoadLevel("Intro");
}
//*/

