/**
 * This function runs when loading the page
 * Displays default table and dropdown menus
 */
window.onload = function(){
    let table = document.getElementById("shipTable");
    let data = Object.keys(mockupEntries[0]); //column names for the table header
    generateTable(table, mockupEntries);
    generateTableHead(table, data);
    
    generateMenu(["dHarbour", "oHarbour"], "dropdownHarbour");
    generateMenu(["Origin", "Destination"], "dropdownCities");
    generateMenu(["Company"], "dropdownCompanies");
}
/**
 * Generates dropdown menus with different options
 * @param {*} keys keys to get data
 * @param {*} id id to get html id
 */
function generateMenu(keys, id){
    var menu = document.getElementById(id);
    var options = [];
    for(i = 0; i <keys.length; i++) {
        for(row = 0; row < mockupEntries.length; row++){
            str = keys[i]
            if(!options.includes((mockupEntries[row])[str])){
                options.push((mockupEntries[row])[str]);
            }
        }
    }
    
    for (i = 0; i < options.length; i++){
        var option = document.createElement("OPTION");
        var text = document.createTextNode(options[i]);
        option.appendChild(text);
        menu.insertBefore(option,menu.lastChild);
    }
}

// mockup data
var mockupEntries = [{"Origin": "Kiel", "Destination": "Gothenburg", "Origin Harbour": "Skandiahamnen", "Destination Harbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Germanica", "Departure": "02/09/19 16:49", "Arrival": "02/09/19 11:49"},
{"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Arendal", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Germanica", "dTime": "05/10/19 05:45", "aTime": "05/10/19 12:45"},
{"Origin": "Stockholm", "Destination": "Gothenburg", "oHarbour": "Masthuggskajen", "dHarbour": "Arendal", "Company": "Silja Line", "Ship": "Germanica", "dTime": "10/09/19 01:18", "aTime": "10/09/19 10:18"},
{"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Ryahamnen", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Fionia", "dTime": "12/06/19 05:12", "aTime": "12/06/19 12:12"},
{"Origin": "Gothenburg", "Destination": "Kiel", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Company": "Silja Line", "Ship": "Germanica", "dTime": "10/02/19 02:49", "aTime": "10/02/19 08:49"},
{"Origin": "Gothenburg", "Destination": "Kiel", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Company": "Silja Line", "Ship": "Vinga", "dTime": "06/06/19 21:29", "aTime": "06/06/19 20:29"},
{"Origin": "Gothenburg", "Destination": "Kiel", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Company": "Silja Line", "Ship": "Germanica", "dTime": "01/04/19 11:28", "aTime": "01/04/19 07:28"},
{"Origin": "Frederikshavn", "Destination": "Gothenburg", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Vinga", "dTime": "11/04/19 18:52", "aTime": "11/04/19 03:52"},
{"Origin": "Frederikshavn", "Destination": "Gothenburg", "oHarbour": "Ryahamnen", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Vinga", "dTime": "08/04/19 13:34", "aTime": "08/04/19 09:34"},
{"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Company": "Silja Line", "Ship": "Scandinavica", "dTime": "06/03/19 11:03", "aTime": "06/03/19 19:03"},
{"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Company": "Silja Line", "Ship": "Danica", "dTime": "01/06/19 12:18", "aTime": "01/06/19 00:18"},
{"Origin": "Fredrikstad", "Destination": "Gothenburg", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Jutlandica", "dTime": "12/02/19 01:12", "aTime": "12/02/19 12:12"},
{"Origin": "Frederikshavn", "Destination": "Gothenburg", "oHarbour": "Ryahamnen", "dHarbour": "Masthuggskajen", "Company": "Silja Line", "Ship": "Fionia", "dTime": "18/06/19 05:37", "aTime": "18/06/19 19:37"},
{"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Fionia", "dTime": "01/06/19 06:45", "aTime": "01/06/19 19:45"},
{"Origin": "Kiel", "Destination": "Gothenburg", "oHarbour": "Arendal", "dHarbour": "Masthuggskajen", "Company": "Silja Line", "Ship": "Jutlandica", "dTime": "11/02/19 15:29", "aTime": "11/02/19 22:29"},
{"Origin": "Gothenburg", "Destination": "Kiel", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Scandinavica", "dTime": "05/09/19 11:58", "aTime": "05/09/19 17:58"},
{"Origin": "Stockholm", "Destination": "Gothenburg", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Company": "Silja Line", "Ship": "Danica", "dTime": "06/09/19 16:35", "aTime": "06/09/19 17:35"},
{"Origin": "Stockholm", "Destination": "Gothenburg", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Vinga", "dTime": "04/05/19 22:41", "aTime": "04/05/19 18:41"},
{"Origin": "Fredrikstad", "Destination": "Gothenburg", "oHarbour": "Ryahamnen", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Vinga", "dTime": "13/05/19 06:35", "aTime": "13/05/19 04:35"}]

/**
 * Empty the table
 */
function clearTable(){
    document.getElementById("shipTable").innerHTML = "";
}

/**
 * Draw the table on the page
 * @param {*} list mockup data
 */
function drawTable(list){
    let tableElement = document.getElementById("shipTable");
    let columnNames = Object.keys(list[0]); //column names for the table header

    generateTable(tableElement, list);
    generateTableHead(tableElement, columnNames);
}

/**
 * Filter on city, harbour or company
 */
function filter(){
    clearTable()
    var cityValue = document.getElementById("dropdownCities").value
    var sortedCities = filterCity(mockupEntries, cityValue);
    
    var harbourValue = document.getElementById("dropdownHarbour").value
    var sortedHarbours = filterHarbour(sortedCities, harbourValue)

    var companyValue = document.getElementById("dropdownCompanies").value
    var sortedCompanies = filterCompany(sortedHarbours, companyValue)
    drawTable(sortedCompanies);
}

/**
 * Filter on city, displays every row that contains a cell with the requested city
 * @param {*} city 
 */
function filterCity(table, city){
    var sortedCities = [];
    if(city == "City"){
        sortedCities = table; //Display all data
    }
    else {
        table.forEach(row => {
            if(row.Origin == city || row.Destination == city)
            sortedCities.push(row);
        });
    }
    return sortedCities;
}

/**
 * Filter on harbour, displays every row that contains a cell with the requested harbour
 * @param {*} harbour 
 */
function filterHarbour(table, harbour){
    var sortedHarbours = [];
    if(harbour == "Harbour"){
        sortedHarbours = table; //Display all data
    }
    else {
        table.forEach(row => {
            if(row.oHarbour == harbour || row.dHarbour == harbour)
            sortedHarbours.push(row);
        });
    }
    return sortedHarbours;
}

/**
 * Filters on departures on specified harbours
 * @param {*} table 
 * @param {*} harbour 
 *  */
function filterHarbourDepartures(table, harbour){
    var sortedHarbours = [];
    if(harbour == "Harbour"){
        sortedHarbours = table; //Display all data
    }
    else {
        table.forEach(row => {
            if(row.oHarbour == harbour)
            sortedHarbours.push(row);
        });
    }
    return sortedHarbours;
}

/**
 * Filters on arrivals on specified harbours
 * @param {*} table 
 * @param {*} harbour 
 */
function filterHarbourArrivals(table, harbour){
    var sortedHarbours = [];
    if(harbour == "Harbour"){
        sortedHarbours = table; //Display all data
    }
    else {
        table.forEach(row => {
            if(row.dHarbour == harbour)
            sortedHarbours.push(row);
        });
    }
    return sortedHarbours;
}

/**
 * Filter on company, displays every row that contains a cell with the requested company
 * @param {*} company
 */
function filterCompany(table, company){
    var sortedCompanies = [];
    if(company == "Company"){
        sortedCompanies = table; //Display all data
    }
    else {
        table.forEach(row => {
            if(row.Company == company)
            sortedCompanies.push(row);
        });
    }
    return sortedCompanies;
}

/**
 * Generates a header for the table
 * @param {*} table 
 * @param {*} data 
 */
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    row.className = "table100-head";
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    let th = document.createElement("th");
    let text = document.createTextNode("Subscribe to a route");
    th.appendChild(text);
    row.appendChild(th);
}

/**
 * Generates the actual table and fills it with data
 * @param {*} table 
 * @param {*} data 
 */
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
        let cell = row.insertCell();
        subscribeButton = document.createElement('BUTTON');
        subscribeButton.innerHTML = "Subscribe";
        subscribeButton.className += "subscribe";

        subscribeButton.addEventListener("click", toggleModal);
        var modal = document.querySelector(".modal");
        var closeButton = document.querySelector(".close-button");
        var submitButton = document.querySelector(".submit-button");

        function toggleModal() {
            modal.classList.toggle("show-modal");
        }
        subscribeButton.addEventListener("click", toggleModal);
        closeButton.addEventListener("click", toggleModal);
        submitButton.addEventListener("click", toggleModal);
        cell.appendChild(subscribeButton);
    }
}

window.addEventListener("click", windowOnClick);
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}