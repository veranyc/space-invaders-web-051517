class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = true
      if(crew.length > 0) {
        this.docked === false
      }
    this.phasersCharge = 'uncharged'
    this.assignCrew(function(crew) {
      // iterate through the crew hash and take each object's first key and set it as the position value
      new CrewMember()
    })
  }

  assignCrew(crew) {
    this.crew.forEach((crewmember) => this.crew.currentShip = this)
  }

}

// spaceship = new Spaceship('The Krestel', ['Roger','Vera', 'Rod'], 5,4)
/* Space ship will be inactive if it is created without a crew.
And a crew member by default will be hanging out in the Cantina
  looking for a ride if they were not put inside a ship when it is initialized.*/
// e.g : spaceship = new Spaceship('The Krestel', [], 5,4) where [] is crew

// space invaders Spaceship should know its own name
// space invaders Spaceship should have the correct number of phasers (5)
// space invaders Spaceship should have the correct layer of shields (4)
// space invaders Spaceship should have its cloaking set to false by default
// space invaders Spaceship should have its warp drive set to "disengaged" by default
// space invaders Spaceship should be docked if it has no crew
// space invaders Spaceship should have its `phasers` charge set to "uncharged" by default
// space invaders Ship with a crew `docked` should return false for ships with a crew
// space invaders Ship with a crew should charge its phasers when a gunner calls `chargePhasers
// space invaders Ship with a crew a crew member should return their ship when `currentShip` is called on them
// space invaders Ship with a crew should have its warp drive set to "engaged" only when the pilot uses `engageWarpDrive
// space invaders Ship with a crew should cloak when a defender `setsInvisibility`
