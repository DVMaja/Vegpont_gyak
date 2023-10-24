import AdatModell from "../modell/AdatModell.js";
import AdatView from "../view/AdatView.js";
import DataService from "../modell/DataService.js";

class AdatController {

    constructor() {
        console.log("Controller Const");
        this.dataService = new DataService();
        this.dataService.getdata("../adat.json");   //ide kéne beírni azt a végpontot amit nem tudtunk előállítani
        //new  AdatModell();
        //new AdatView();
       

    }
}
export default AdatController;