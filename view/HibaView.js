class HibaView {

    constructor(error, szuloElem) {
        this.szuloElem = szuloElem;
        this.szuloElem.html(error);
        console.log(error);
    }

}
export default HibaView;