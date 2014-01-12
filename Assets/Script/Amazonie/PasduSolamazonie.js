#pragma strict


var soldur : AudioSource;
var character : CharacterController;

function Start () {

}

function Update () {

if (( Input.GetButtonDown( "Horizontal" ) || Input.GetButtonDown( "Vertical" ) )  && character.isGrounded)
{
   // audio.clip = soldur;
    //audio.volume = 0.1f;
    soldur.pitch = Random.Range(0.9, 1.1);
 	soldur.Play();
}

if (!Input.GetButton( "Horizontal" ) && !Input.GetButton( "Vertical" ) )
{
	soldur.Stop();
}

if (!character.isGrounded)
{
	soldur.mute = true;
}
else
{
	soldur.mute = false;
}
}