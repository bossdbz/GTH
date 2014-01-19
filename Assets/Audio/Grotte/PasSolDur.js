#pragma strict

var soldur : AudioClip;
var saut : AudioClip;
var character : CharacterController;
var test : float = 0;


function Update () {

if (( Input.GetButtonDown( "Horizontal" ) || Input.GetButtonDown( "Vertical" ) ) && !audio.isPlaying && character.isGrounded)
{
    audio.clip = soldur;
    //audio.volume = 0.1f;
    audio.pitch = Random.Range(0.9, 1.1);
 	audio.Play();
}

if (( Input.GetButtonDown("Jump") && (test == 0)))
{
	
	PlayClipAt(saut, character.transform.position);
}


if (!Input.GetButton( "Horizontal" ) && !Input.GetButton( "Vertical" ) && audio.isPlaying)
{
    audio.Stop();
}


if (!character.isGrounded)
{
	audio.mute = true;
	test = 1;
}
else
{
	audio.mute = false;
	test = 0;
}
}



function PlayClipAt(clip: AudioClip, pos: Vector3): AudioSource {
  var tempGO = GameObject("TempAudio"); // create the temp object
  tempGO.transform.position = pos; // set its position
  var aSource = tempGO.AddComponent(AudioSource); // add an audio source
  aSource.clip = clip; // define the clip
  // set other aSource properties here, if desired
  aSource.pitch = Random.Range(0.9, 1.1);
  aSource.volume = 0.5f;
  aSource.Play(); // start the sound
  Destroy(tempGO, clip.length); // destroy object after clip duration
  return aSource; // return the AudioSource reference
}