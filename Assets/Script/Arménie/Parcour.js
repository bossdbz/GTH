#pragma strict




function Start () {

}

function Update () {

}

private var nomObjectParent : String;
private var tresor : Transform[];
private var pere : GameObject;

function OnTriggerEnter( other : Collider ) {
	if(other.gameObject.CompareTag("Player")){
		/*Minuteur();
		world.SendMessage("AddTresor");
		if( audio ){
			audio.Play();
		}
		*/
		//nomObjectParent = transform.gameObject.transform.parent.gameObject.name;
		
		//pere = transform.gameObject.name;
		tresor = transform.parent.gameObject.GetComponentsInChildren(typeof(Transform));
		//tresor =  GameObject.Find(nomObjectParent+"/Tresor");
		for(var obj : Transform in tresor){
			Debug.Log(obj.gameObject.name);
			//obj.gameObject.r	enderer.enabled = true;
			//obj.gameObject.collider.enabled = true;
		}//*/
			
	}
}




/*function Minuteur()
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

