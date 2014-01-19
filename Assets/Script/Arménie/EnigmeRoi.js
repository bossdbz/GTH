#pragma strict


//private var reponse : int[];
private var reponse : String
;
private var i : int = 0;
//private var joueur : int[]; 
private var joueur : String[]; 

private var s : String[]; 

function Start () {
	//reponse = [1, 2, 3, 4, 5];
	reponse = "12345";
}

function Update () {
	if(i > 4){
	
		Debug.Log("finie");
		/*for( var s : String in joueur ){
			Debug.Log("joueur : " + s);
		}*/
		/*for(var j : int = 0;j< reponse.Length; j++){
			if(joueur)
		}//*/
	
	}
}

function OnMouseDown(){
	Debug.Log("clique");
	Debug.Log("nom : " + this.name + "   renderer : " + this.gameObject.GetComponent(ParticleSystem).renderer.enabled);
	//String 
	if( !this.GetComponent(ParticleSystem).isPlaying ){
		this.GetComponent(ParticleSystem).Play();	
		//joueur[i] = int.Parse(this.name);
		//joueur[i] =  s;
		//s[i] = this.name;	
		i++;
		
	}//*/
	
	Debug.Log("s : " + s);
	
	//if(i > 5){
		
	//}
	

}




