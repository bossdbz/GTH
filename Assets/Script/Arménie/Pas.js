#pragma strict

var soldur : AudioClip;
var saut : GameObject;


function Awake(){
	saut = GameObject.Find("Audio/Player/Saut");
}

function Update () {

	if ( Input.GetButtonDown( "Horizontal" ) || Input.GetButtonDown( "Vertical" ) )
	{
	    audio.clip = soldur;
	    audio.volume = 0.1f;
	    audio.pitch = Random.Range(0.9, 1.1);
	 	audio.Play();
	}

	if (!Input.GetButton( "Horizontal" ) && !Input.GetButton( "Vertical" ) && audio.isPlaying)
	{
	    audio.Stop();
	}

	if(Input.GetButtonDown("Jump")){
		saut.GetComponent(AudioSource).Play();
	
	}

}