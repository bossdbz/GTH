﻿#pragma strict

var PauseSerious : boolean ;
var menuSeriousObjet : GUITexture;
var nomObjet : GUIText;
var Reprendre : GUIText;
var texteSerious : GUIText;
var image: GUITexture;
var image2: GUITexture;
var image3: GUITexture;
var image4: GUITexture;
var image5: GUITexture;

function Start () {

}

function Update () {

}

function OnMouseDown() 
{ 
 // if we clicked the play button 
  
  if( this.name == "Reprendre-Serious") 
  {

	Debug.Log("bonjour");
	PauseSerious = false;
	menuSeriousObjet.enabled = false;
	nomObjet.enabled = false;
	Reprendre.enabled = false;
	Time.timeScale = 1.0;
	texteSerious.enabled= false;
	image.enabled= false;
	image2.enabled= false;
	image3.enabled= false;
	image4.enabled= false;
	image5.enabled= false;
  }
	
}