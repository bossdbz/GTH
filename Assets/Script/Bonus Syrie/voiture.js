#pragma strict

function Start () {

}

    var frontrightcol : WheelCollider;
    var frontleftcol : WheelCollider;
    var motorpower : int = 100;
    var volant : int = 20;

    function Update () {
        frontrightcol.motorTorque = motorpower * Input.GetAxis ("Vertical");
        frontleftcol.motorTorque = motorpower * Input.GetAxis ("Vertical");

        frontrightcol.steerAngle = volant * Input.GetAxis ("Horizontal");
        frontleftcol.steerAngle = volant * Input.GetAxis ("Horizontal");

        if (Input.GetKeyDown ("space") ) {
            frontrightcol.brakeTorque = 500;
            frontleftcol.brakeTorque = 500;
        }
        else {
            frontrightcol.brakeTorque = 0;
            frontleftcol.brakeTorque = 0;
        }
    }



