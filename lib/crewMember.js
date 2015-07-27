function CrewMember(position){
  this.position = position
  this.currentShip = "Looking for a Rig"
  this.engageWarpDrive = function(){
    if(this.currentShip === "Looking for a Rig"){
      return "had no effect"
    } else if(this.currentShip.warpDrive === "disengaged" && this.position === "Pilot"){
      this.currentShip.warpDrive = "engaged!"
    } else {
      this.currentShip.warpDrive = "disengaged"
    }
  }
  this.setsInvisibility = function(){
    if(this.currentShip === "Looking for a Rig"){
      return "had no effect"
    } else if(this.currentShip.cloaked === false && this.position === "Defender"){
      this.currentShip.cloaked = true
    } else {
      this.currentShip.cloaked = false
    }
  }
  this.chargePhasers = function(){
    if(this.currentShip === "Looking for a Rig"){
      return "had no effect"
    } else if(this.currentShip.phasersCharge === "uncharged" && this.position === "Gunner"){
      this.currentShip.phasersCharge = "charged!"
    } else {
      this.currentShip.phasersCharge = "uncharged"
    }
  }

}
