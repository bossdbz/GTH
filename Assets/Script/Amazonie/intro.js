#pragma strict

function Start () {
	
	//obj.renderer.enabled = false;
	
	
}

function Update () {
	
}

function OnMouseDown() 
{ 
	var obj: GameObject = GameObject.Find("instructions");
	var obj2: GameObject = GameObject.Find("ok");
	Destroy(obj);
	Destroy(obj2);
}


function OnTriggerEnter( other : Collider ) { 
	
	//obj.guiTexture.active
	//renderer.enabled=true;
	// On récupère l'objet
	//var clone : GameObject = PrefabUtility.InstantiatePrefab(Selection.activeObject as GameObject) as GameObject; 
	//var pintro = Instantiate(Prefab.Find("intro"), transform.position, transform.rotation);
	//var prefab: GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	//var obj: GameObject = GameObject.Find("intro");
	//if(obj)Destroy (obj);*/
	
	
	//Destroy (gameObject);
}