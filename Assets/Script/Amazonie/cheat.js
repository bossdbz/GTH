#pragma strict
public var i =0 ;
function Start () {

}

function Update () {

	
	if(Input.GetKey("b")){
		i=i+1;
		teleport();
	}
	if(Input.GetKey("n")){
		i=i-1;
		teleport();
	}
	
	
}

function teleport(){

var obj: GameObject = GameObject.Find("First Person Controller");
	var obj1: GameObject = GameObject.Find("objet-bleu");
	var obj2: GameObject = GameObject.Find("objet-rouge");
	var obj3: GameObject = GameObject.Find("objet-jaune");
	var obj4: GameObject = GameObject.Find("objet-vert");
	var obj5: GameObject = GameObject.Find("objet-blanc");
	var obj6: GameObject = GameObject.Find("porteRdc");
	var obj7: GameObject = GameObject.Find("objet-bleu1");
	var obj8: GameObject = GameObject.Find("objet-rouge1");
	var obj9: GameObject = GameObject.Find("objet-jaune1");
	var obj10: GameObject = GameObject.Find("objet-vert1");
	var obj11: GameObject = GameObject.Find("objet-blanc1");	//
	var obj12: GameObject = GameObject.Find("desertfortress_outpost");
	var obj13: GameObject = GameObject.Find("Sphere12");
	//Sphere12
	//Debug.Log (obj.transform.transform.position.x+" / "+obj.transform.transform.position.y+" / "+obj.transform.transform.position.z);
	
	if(( i > 1) && (i < 5))
		obj.transform.transform.position= Vector3(obj1.transform.position.x -2,obj1.transform.position.y+0.5, obj1.transform.position.z);		   
		    // obj.transform.transform.position = Vector3(obj1.transform.position.x + 2,obj1.transform.position.y,obj1.transform.position.z);
	if(( i > 5) && (i < 10))
		obj.transform.transform.position= Vector3(obj2.transform.position.x -2,obj2.transform.position.y+0.5, obj2.transform.position.z);
	if(( i > 10) && (i < 15))
		obj.transform.transform.position= Vector3(obj3.transform.position.x -2,obj3.transform.position.y+0.5, obj3.transform.position.z);
	if(( i > 15) && (i < 20))
		obj.transform.transform.position= Vector3(obj4.transform.position.x + 2,obj4.transform.position.y+0.5, obj4.transform.position.z);
	if(( i > 20) && (i < 25))
		obj.transform.transform.position= Vector3(obj5.transform.position.x + 2,obj5.transform.position.y, obj5.transform.position.z);
	if(( i > 25) && (i < 30))
		obj.transform.transform.position= Vector3(obj6.transform.position.x +40,obj6.transform.position.y, obj6.transform.position.z+15);
	if(( i > 35) && (i < 40))
		obj.transform.transform.position= Vector3(obj7.transform.position.x + 2,obj7.transform.position.y+0.5, obj7.transform.position.z);
	if(( i > 45) && (i < 50))
		obj.transform.transform.position= Vector3(obj8.transform.position.x + 2,obj8.transform.position.y+0.5, obj8.transform.position.z);
	if(( i > 55) && (i < 60))
		obj.transform.transform.position= Vector3(obj9.transform.position.x + 2,obj9.transform.position.y+0.5, obj9.transform.position.z);
	if(( i > 65) && (i < 70))
		obj.transform.transform.position= Vector3(obj10.transform.position.x + 2,obj10.transform.position.y+0.5, obj10.transform.position.z);
	if(( i > 75) && (i < 80))
		obj.transform.transform.position= Vector3(obj11.transform.position.x + 1,obj11.transform.position.y+0.5, obj11.transform.position.z);
	if(( i > 85) && (i < 100))
		obj.transform.transform.position= Vector3(obj12.transform.position.x,obj12.transform.position.y+4, obj12.transform.position.z);	
	if(( i > 100) && (i < 120))
		obj.transform.transform.position= Vector3(obj13.transform.position.x-70,obj13.transform.position.y+1, obj13.transform.position.z+0);
			
	if( i > 120)
		i = 1;

}