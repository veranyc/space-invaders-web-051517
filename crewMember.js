class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

    engageWarpDrive(){
      if(this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
      }
      if(this.currentShip !== 'Looking for a Rig' && this.position === 'Pilot') {
        this.currentShip.warpDrive === 'engaged'
      }
    }

    setsInvisibility(){
      if(this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
      }
      if(this.currentShip !== 'Looking for a Rig' && this.position === 'Defender') {
        this.currentShip.cloaked === 'true'
      }
    }

    chargePhasers() {
      if(this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
      }
      if(this.currentShip !== 'Looking for a Rig' && this.position === 'Gunner') {
        this.currentShip.phasersCharge === 'charged'
      }
    }




}

/*a pilot cannot engageWarpDrive if he is not in a ship and, therefore, can't make the Kessel Run in less than twelve parsecs.
Crew members also should be unable to perform certain actions that their positions are incapable of doing.*/
// e.g. tristan = new CrewMember('Pilot')

// space invaders CrewMember should know their position:
// space invaders CrewMember should should return "Looking for a Rig" if they aren't assigned to a ship
// space invaders CrewMember should return "had no effect" when the crew member tries to use their special ability
