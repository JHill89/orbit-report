export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string; 

    shouldShowWarning():boolean {
        // TODO read ang part 3 to figure out step 6
        //Is line 17 accessing what type is set to in the HTML file??? or just reading that type is set to type from the constructor???
        if(this.type.toLowerCase() === "space debris") {
            return true;
        } else {
            return false;
        }
    }
 constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
     this.name = name,
     this.orbitType = orbitType,
     this.type = type,
     this.operational = operational,
     this.launchDate = launchDate;
 
 }
}