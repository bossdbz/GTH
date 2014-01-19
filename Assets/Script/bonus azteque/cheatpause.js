#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKey("p")) 
	{
		Time.timeScale = 0.0;	
	}
	
	if(Input.GetKey("m")) 
	{
		Time.timeScale = 1.0;	
	}
}


