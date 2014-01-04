#pragma strict

var snow : AudioClip;
var character : CharacterController;

function Update () {

if (Input.GetKeyDown ("Z") && character.isGrounded)
{
    audio.clip = snow;
 	audio.Play();
}

if (Input.GetKeyUp ("w"))
{
    audio.Stop();
}

}
