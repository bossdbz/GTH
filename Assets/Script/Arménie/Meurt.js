#pragma strict

private var epine : GameObject;
private var player : GameObject;

function Awake () {
	epine = GameObject.Find("Audio/Player/Meurt/Epine");
}

function Update () {

}

function OnTriggerEnter( other : Collider ) {
        if(other.gameObject.CompareTag("Player")){
                //Application.LoadLevel(EditorApplication.currentScene);
                var sceneName : int = Application.loadedLevel;
                GameVariable.nbrVie--;
				epine.GetComponent(AudioSource).Play();
				

                yield WaitForSeconds(3);
                if(GameVariable.nbrVie == 0){
                        Application.LoadLevel("GameOver");
                }        
                else if(sceneName == 3){
                        Application.LoadLevel("Arménie");
                }
                
                else if(sceneName == 7){
                        GameVariable.nbrTresorBonus=0;
                        Application.LoadLevel("Bonus Syrie");
                }
                
                else if(sceneName == 5){
                        GameVariable.nbrPiece=0;
                        Application.LoadLevel("Syrie");
                }
                
                else{
                        Application.LoadLevel("ArménieBonus");
                }
        }
}