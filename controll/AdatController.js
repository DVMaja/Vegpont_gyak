import AdatModell from "../modell/AdatModell.js";
import AdatView from "../view/AdatView.js";
import DataService from "../modell/DataService.js";

class AdatController {

    constructor() {
        console.log("Controller Const");
        this.dataService = new DataService();
        this.dataService.getdata("../adat.json", this.adatokMegj, this.hibaMegj);   //ide kéne beírni azt a végpontot amit nem tudtunk előállítani
        //nem kell a gömbölyű zárójelk mert nem azonnal akarjuk megjeleníteni ez egy callback fgvény
        //new  AdatModell();
        //new AdatView();      

    }

    adatokMegj(lista){
        console.log(lista);

    }

    hibaMegj(error){
        console.log(error);
    }
}
export default AdatController;