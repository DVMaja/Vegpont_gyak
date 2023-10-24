class DataService {
    constructor() {

    }
    getdata(apiVegpont) {//ez lesz az url
        //most nem a fetcet nézzük hanem az axiost
        //https://www.npmjs.com/package//axios
        //asszinkron hívás
        axios.get(apiVegpont)
            .then(function (response) {
                // handle success               
                console.log("Válasz objektum: ", response);
                console.log("Adatok: ", response.data);
                console.log("Státusz: ", response.status);
                console.log("Státusz szöveg: ", response.statusText);
                console.log("Válasz fejléc: ", response.headers);
                console.log("Válasz config: ", response.config);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }
}
export default DataService;