#pragma strict

var musiqueNiveaux : AudioClip;

function Start () {

audio.clip = musiqueNiveaux;
audio.volume = 0.3f;
audio.PlayDelayed(3);

}

