#pragma strict
var son : AudioSource;

function Start () {
	//initilatisation enigme 2
	
	GameVariables.TabEnigme3.push(2);
	GameVariables.TabEnigme3.push(8);
	GameVariables.TabEnigme3.push(9);
	GameVariables.TabEnigme3.push(10);
	GameVariables.TabEnigme3.push(11);
	GameVariables.TabEnigme3.push(12);
	GameVariables.TabEnigme3.push(18);
	GameVariables.TabEnigme3.push(24);
	GameVariables.TabEnigme3.push(30);
	GameVariables.TabEnigme3.push(29);
	GameVariables.TabEnigme3.push(23);
	GameVariables.TabEnigme3.push(22);
	GameVariables.TabEnigme3.push(21);
	GameVariables.TabEnigme3.push(27);
	GameVariables.TabEnigme3.push(26);
	GameVariables.TabEnigme3.push(25);
	GameVariables.TabEnigme3.push(31);
	GameVariables.TabEnigme3.push(37);
	GameVariables.TabEnigme3.push(43);
	GameVariables.TabEnigme3.push(44);
	GameVariables.TabEnigme3.push(45);
	GameVariables.TabEnigme3.push(39);
	GameVariables.TabEnigme3.push(40);
	GameVariables.TabEnigme3.push(41);
	GameVariables.TabEnigme3.push(47);
	
	
	
}

function Update () {

}

function OnTriggerEnter( other : Collider ) 
{
	son.Play();
	
	

}