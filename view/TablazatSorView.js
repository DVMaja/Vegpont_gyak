class TablazatSorView {

    #adat = [];

    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.TablaElem = szuloElem;
        this.#sor();
        this.sorElem = this.TablaElem.children("tr:last-child");
    }

    #sor() {
        let txt = "";
        txt += "<tr>";

        for (const key in this.#adat) {
            const element = this.#adat[key];
            txt += `<td>${element}</td>`;
        }

        txt += "</tr>";
        this.TablaElem.append(txt);
    }
}

export default TablazatSorView;