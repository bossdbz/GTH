#pragma strict
public var textfield:GUIText;
public var textfield2:GUIText;
public var textfield3:GUIText;
public var textfield4:GUIText;

public static class AvionVariables 
{ 
	//le rdc
	public var distance = 0;
	public var vie = 5;
	public var nbDetruits = 0;
	public var munitions = 200; 
}

function Start () {

}

function Update () {
	distance();
	vies();
	score();
	munitions();
}

function distance()
{
	yield WaitForSeconds(1); 
	AvionVariables.distance = AvionVariables.distance + 1;
	textfield = GameObject.Find("distance").GetComponent(GUIText); 
	textfield.text = "Distance : " + AvionVariables.distance+ "m ";
	
}


function vies()
{
	textfield2 = GameObject.Find("vies").GetComponent(GUIText); 
	textfield2.text = "" + AvionVariables.vie;  
}

function score()
{
	textfield3 = GameObject.Find("score").GetComponent(GUIText); 
	textfield3.text = ""+ AvionVariables.nbDetruits;
}

function munitions()
{
	textfield4 = GameObject.Find("munitions").GetComponent(GUIText); 
	textfield4.text = "" + AvionVariables.munitions;
}