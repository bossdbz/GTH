#pragma strict

var soldur : AudioClip;
var character : CharacterController;

function Update () {

if (( Input.GetButtonDown( "Horizontal" ) || Input.GetButtonDown( "Vertical" ) ) && !audio.isPlaying && character.isGrounded)
{
    audio.clip = soldur;
    //audio.volume = 0.1f;
    audio.pitch = Random.Range(0.9, 1.1);
 	audio.Play();
}

if (!Input.GetButton( "Horizontal" ) && !Input.GetButton( "Vertical" ) && audio.isPlaying)
{
    audio.Stop();
}

if (!character.isGrounded)
{
	audio.mute = true;
}
else
{
	audio.mute = false;
}
}