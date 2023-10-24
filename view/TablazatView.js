import TablazatSorView from "./TablazatSorView.js";

class TablazatView {
    #list = [];

    constructor(list, szuloElem) {
        //console.log("Látható a TablazatView");
        this.#list = list;
        szuloElem.append(`<table class="table table-striped table-bordered">`);
        this.tablaElem = szuloElem.children("table");
        this.TablazatViewes();
    }

    TablazatViewes() {
        let txt = "";

        this.#list.forEach(elem => {
            new TablazatSorView(elem, this.tablaElem);
        });
    }

}
export default TablazatView;