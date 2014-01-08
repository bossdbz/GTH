#pragma strict

var son1 : AudioSource;
var son2 : AudioSource;
var son3 : AudioSource;
var son4 : AudioSource;
var son5 : AudioSource;
var son6 : AudioSource;
var son7 : AudioSource;
var son8 : AudioSource;
var son9 : AudioSource;
var son10 : AudioSource;
var son11: AudioSource;
var son12 : AudioSource;
var son13 : AudioSource;

var debut = 0;
var fin = 13700 ;
var avancement = debut+0.5;

public var infoSounds:GUIText;

function Start () {
	son1.volume=0.0;
	son2.volume=0.6;
	son3.volume=0.0;
	son4.volume=0.5;
	son5.volume=0.0;
	son6.volume=0.0;
	son7.volume=0.0;
	son8.volume=0.0;
	son9.volume=0.0;
	son10.volume=0.0;
	son11.volume=0.0;
	son12.volume=0.0;
	son13.volume=0.0;
}

function Update () 
{
	var avion = GameObject.Find("avion");	
	avancement=avion.transform.position.x/137;
	
	//debug x = -0.5
	//Debug.Log( "Pourcentage :"+avancement/137+"%" );
	
	if((avancement >= 0)&& (avancement < 20 ))
	{
		//ArpBass 1 /  Emphaser 1
		//son2.volume=1.0;//
		TransitionSons(0.6 , son2);
	}
	else son2.volume=0.0;//TransitionSons(0.0 , son2)
	
	if((avancement >= 0)&& (avancement < 40 ))//ajouter vie
	{
		//Choir 1
		if( AvionVariables.vie == 3 )		
			//son5.volume=0.0;//
			TransitionSons(0.4 , son5);
		if( AvionVariables.vie == 2 )
			//son5.volume=0.5;//
			TransitionSons(0.7 , son5);
		if( AvionVariables.vie == 1 )
			//son5.volume=0.8;//
			TransitionSons(1.0 , son5);
	}
	else //son5.volume=0.0;//
		TransitionSons(0.0 , son5);
	
	if((avancement >= 40)&& (avancement < 70 )) // ajouter vie
	{		
		//Flute_Stacc 1
		if(AvionVariables.vie > 2 )	
			//son9.volume=0.6;//
			TransitionSons(0.6 , son9);
		else //son9.volume=0.0;//
			TransitionSons(0.0 , son9);
	}else //son9.volume=0.0;//
		TransitionSons(0.0 , son9);
	
	if((avancement >= 15)&& (avancement < 65 ))
	{
		//Feisty Drums B
		//son8.volume=0.6;//
		TransitionSons(0.8, son8);
	}else //son8.volume=0.0;//
		TransitionSons(0.0 , son8);
	
	if((avancement >= 60)&& (avancement < 80 ))//ajouter vie
	{
		//Action drums B
		if(AvionVariables.vie > 3 )	
			//son1.volume=0.0;//
			TransitionSons(0.0 , son1);
		if(AvionVariables.vie == 3 )	
			//son1.volume=0.25;//
			TransitionSons(0.25 , son1);
		if(AvionVariables.vie == 2 )	
			//son1.volume=0.50;//
			TransitionSons(0.50 , son1);
		if(AvionVariables.vie == 1 )	
			//son1.volume=0.75;//
			TransitionSons(0.75 , son1);
		
	}else //son1.volume=0.0;//
		TransitionSons(0.0 , son1);
	
	if((avancement >= 60)&& (avancement < 80 ))
	{	
		//ViolinUpdn
		//son13.volume=0.5;//
		TransitionSons(0.0 , son13);
	}else //son13.volume=0.0;//
		TransitionSons(0.0 , son13);
	
	if((avancement >= 75)&& (avancement < 85 ))
	{		
		//Gloomy Strings 1
		//son10.volume=0.5;//
		TransitionSons(0.5 , son10);
	}else //son10.volume=0.0;//
		TransitionSons(0.0 , son10);
	
	if((avancement >= 85)&& (avancement < 95 ))
	{
		//Fairytails Clarinet 1
		//son7.volume=0.5;//
		TransitionSons(0.5 , son7);
	}else //son7.volume=0.0;//
		TransitionSons(0.0 , son7);
	
	if((avancement >= 70)&& (avancement < 100 ))
	{
		if((avancement >= 70)&& (avancement < 90 ))
		{	
			//Combative Choir 1
			//son6.volume=0.6;//
			TransitionSons(0.6 , son6);
		}
		if((avancement >= 90)&& (avancement < 100 ))
		{
			//Combative Choir 1
			//son6.volume=0.8;//
			TransitionSons(0.8 , son6);
		}
	}else son6.volume=0.0;//TransitionSons(0.0 , son6)
	
	if((avancement >= 90)&& (avancement < 100 ))
	{
		//Meek Glock 1
		//son11.volume=0.5;//
		TransitionSons(0.5 , son11);
	}else //son11.volume=0.0;//
		TransitionSons(0.0 , son11);
	
	if((avancement >= 80)&& (avancement < 100 )&& ( AvionVariables.vie == 0 )) // ajouter vie
	{
		//BrusqueViolon
		//son3.volume=0.5;//
		TransitionSons(0.5 , son3);
	}else //son3.volume=0.0;//
		TransitionSons(0.0 , son3);
	
	//munitions 
	//AvionVariables.munitions
	
	if((AvionVariables.munitions > 0 ))
	{
		//Cello_Stacc 1
		//son4.volume=0.0;//
		TransitionSons(0.5 , son4);
	}else TransitionMunitions(0.0 , son4);
	
	if((AvionVariables.munitions <= 0 ))
	{
		//StringEns_Stacc 1
		//son12.volume=1.0;//
		TransitionSons(0.5 , son12);
	}else TransitionMunitions(0.0 , son12);
	
	
	//afficher dans le menu
	var sonJoue ="";
	if (son1.volume!=0.0) sonJoue += "Action drums B - (vie <= 3, avancement > 60% ) Volume  "+ son1.volume * 100 + " %  /";
	if (son2.volume!=0.0) sonJoue += "ArpBass 1 et  Emphaser 1 - ( avancement < 20% ) Volume "+ son2.volume * 100 + " %  /";
	if (son3.volume!=0.0) sonJoue += "BrusqueViolon - ( vie <=2, avancement 80% ) Volume "+ son3.volume * 100 + " %  /";
	if (son4.volume!=0.0) sonJoue += "Cello_Stacc 1 - ( assez munitions ) Volume  "+ son4.volume * 100 + " %  /";
	if (son5.volume!=0.0) sonJoue += "Choir 1 - Volume (vie <= 3 et avancement < 40% ) "+ son5.volume * 100 + " %  /";
	if (son6.volume!=0.0) sonJoue += "Combative Choir 1 - ( avancement > 70% ) Volume  "+ son6.volume * 100 + " %  /";
	if (son7.volume!=0.0) sonJoue += "Fairytails Clarinet 1 ( 85% < avancement < 95 %) - Volume "+ son7.volume * 100 + " %  /";
	if (son8.volume!=0.0) sonJoue += "Feisty Drums B - ( 20% < avancement < 60% ) Volume "+ son8.volume * 100 + " %  /";
	if (son9.volume!=0.0) sonJoue += "Flute_Stacc 1 - ( avancement > 40%, vie > 3 ) Volume "+ son9.volume * 100 + " %  /";
	if (son10.volume!=0.0) sonJoue += "Gloomy Strings 1 - ( 75% < avancement < 85% ) Volume "+ son10.volume * 100 + " %  /";
	if (son11.volume!=0.0) sonJoue += "Meek Glock 1 - ( 90% < avancement < 100% ) Volume "+ son11.volume * 100 + " %  /";
	if (son12.volume!=0.0) sonJoue += "StringEns_Stacc 1 - ( muntions épuisées ) Volume  "+ son12.volume * 100 + " %  /";
	if (son13.volume!=0.0) sonJoue += "ViolinUpdn - ( 60% < avancement < 80% ) Volume "+ son13.volume * 100 + " %  /";	
	Debug.Log(sonJoue);
	infoSounds.text =sonJoue;
	
	//Transition Son
	
	
}

function TransitionSons(destination:float , sonOrigine: AudioSource)
{
		//calcul de la différence
		var volumeActuel : float = sonOrigine.volume ;
		var volumeAjouteePlus = volumeActuel + 0.005;
		var volumeAjouteeMoins = volumeActuel - 0.005;
		
		if( volumeActuel > destination )
		{
			sonOrigine.volume = volumeAjouteeMoins;
			 
		}
		if( volumeActuel < destination )
		{
			sonOrigine.volume = volumeAjouteePlus; 
		}
	
}

function TransitionMunitions(destination:float , sonOrigine: AudioSource)
{
		//calcul de la différence
		var volumeActuel : float = sonOrigine.volume ;
		var volumeAjouteePlus = volumeActuel + 0.1;
		var volumeAjouteeMoins = volumeActuel - 0.1;
		
		if( volumeActuel > destination )
		{
			sonOrigine.volume = volumeAjouteeMoins;
			 
		}
		if( volumeActuel < destination )
		{
			sonOrigine.volume = volumeAjouteePlus; 
		}
}	


