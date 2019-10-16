
//Mockup data
var mockupEntries = [{"Origin": "Kiel", "Destination": "Gothenburg", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Company": "Stena Line", "Ship": "Germanica", "dTime": "02/09/19 16:49", "aTime": "02/09/19 11:49"},
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
let table;
let data;
let selectedHarbour;

/**
 * Runs when loading page
 */
window.onload = function() {
    data = Object.keys(mockupEntries[0]); 
    table = document.getElementById("testTable");

    document.getElementById("view").style.visibility = 'hidden';
  

      var submitButton = document.createElement("BUTTON");
      submitButton.addEventListener("click", function(){submitted()});
      submitButton.innerHTML = "Save changes";
      document.getElementById("confirm").appendChild(submitButton);



};

/**
 * Stores selected location
 * @param {*} selected 
 */
function selectedLocation(selected){
    selectedHarbour = selected;
}

/**
 * Keeps track on the radio button that is checked
 */
function submitted(){
    var chosenPreset = null;

    var radios = document.getElementsByName('directions');

    for (var i = 0, length = radios.length; i < length; i++)
    {
     if (radios[i].checked)
     {     
      chosenPreset = radios[i].value;
      break;
     }
    }


    if(chosenPreset==null){
        alert("Please chose location and preset");
    }
    else{

        document.getElementById("view").style.visibility = 'visible';
        document.getElementById("options").remove();
        formArguments(chosenPreset);

    }


}

/**
 * Stores data and draws the table depending on which preset that is checked
 * @param {*} preset 
 */
function formArguments(preset){
    if(preset == "preset1"){
        //Departures - Detailed
        var firstStep = filterHarbourDepartures(mockupEntries, selectedHarbour);
        var secondStep = removeColumns("Origin", firstStep);
        var thirdStep = removeColumns("oHarbour", secondStep);
        generateTable(table, thirdStep);
        generateTableHead(table, Object.keys(thirdStep[0]));

    }
    if(preset == "preset2"){
        //Departures - LIght
        var firstStep = filterHarbourDepartures(mockupEntries, selectedHarbour);
        var secondStep = removeColumns("Origin", firstStep);
        var thirdStep = removeColumns("oHarbour", secondStep);
        var fourthStep = removeColumns("Ship", thirdStep);
        var fifthStep = removeColumns("aTime", fourthStep);
        var sixthStep = removeColumns("Company", fifthStep);
        generateTable(table, sixthStep);
        generateTableHead(table, Object.keys(sixthStep[0]));
        
    }
     if(preset == "preset3"){
        //Arrivals - Detailed
        var firstStep = filterHarbourArrivals(mockupEntries, selectedHarbour);
        var secondStep = removeColumns("Destination", firstStep);
        var thirdStep = removeColumns("dHarbour", secondStep);
        generateTable(table, thirdStep);
        generateTableHead(table, Object.keys(thirdStep[0]));
    }
    if(preset == "preset4"){
    	//Arrivals - Light
        var firstStep = filterHarbourArrivals(mockupEntries, selectedHarbour);
        var secondStep = removeColumns("Destination", firstStep);
        var thirdStep = removeColumns("dHarbour", secondStep);
        var fourthStep = removeColumns("Ship", thirdStep);
        var fifthStep = removeColumns("dTime", fourthStep);
        var sixthStep = removeColumns("Company", fifthStep);
        generateTable(table, sixthStep);
        generateTableHead(table, Object.keys(sixthStep[0]));
    }
}

/**
 * Removes a selected column
 * @param {*} toBeRemoved 
 * @param {*} data 
 */
function removeColumns(toBeRemoved, data) {
    data.forEach(row => {
        delete row[toBeRemoved];
    })
    return data;
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
 */
function filterHarbourDepartures(table, harbour){
    var sortedHarbours = [];
    if(harbour == "Harbour"){
        sortedHarbours = table; //Display all data
    }
    else {
        table.forEach(row => {
            if(row.oHarbour == harbour){
            	sortedHarbours.push(row);
            }
            
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
}

/**
 * Generates the actual table and fills it with data
 * @param {*} table
 * @param {*} data
 */
function generateTable(table, data) {
	let i = 0;
    for (let element of data) {
        let row = table.insertRow();
        
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
        i++;
        if(i >= 8){
        	break;
        }
    }
}
