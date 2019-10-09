var mockupEntries = [{"Origin": "Kiel", "Destination": "Gothenburg", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Ship": "Germanica", "dTime": "02/09/19 16:49", "aTime": "02/09/19 11:49"},
    {"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Arendal", "dHarbour": "Masthuggskajen", "Ship": "Germanica", "dTime": "05/10/19 05:45", "aTime": "05/10/19 12:45"},
    {"Origin": "Stockholm", "Destination": "Gothenburg", "oHarbour": "Masthuggskajen", "dHarbour": "Arendal", "Ship": "Germanica", "dTime": "10/09/19 01:18", "aTime": "10/09/19 10:18"},
    {"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Ryahamnen", "dHarbour": "Masthuggskajen", "Ship": "Fionia", "dTime": "12/06/19 05:12", "aTime": "12/06/19 12:12"},
    {"Origin": "Gothenburg", "Destination": "Kiel", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Ship": "Germanica", "dTime": "10/02/19 02:49", "aTime": "10/02/19 08:49"},
    {"Origin": "Gothenburg", "Destination": "Kiel", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Ship": "Vinga", "dTime": "06/06/19 21:29", "aTime": "06/06/19 20:29"},
    {"Origin": "Gothenburg", "Destination": "Kiel", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Ship": "Germanica", "dTime": "01/04/19 11:28", "aTime": "01/04/19 07:28"},
    {"Origin": "Frederikshavn", "Destination": "Gothenburg", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Ship": "Vinga", "dTime": "11/04/19 18:52", "aTime": "11/04/19 03:52"},
    {"Origin": "Frederikshavn", "Destination": "Gothenburg", "oHarbour": "Ryahamnen", "dHarbour": "Masthuggskajen", "Ship": "Vinga", "dTime": "08/04/19 13:34", "aTime": "08/04/19 09:34"},
    {"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Ship": "Scandinavica", "dTime": "06/03/19 11:03", "aTime": "06/03/19 19:03"},
    {"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Ship": "Danica", "dTime": "01/06/19 12:18", "aTime": "01/06/19 00:18"},
    {"Origin": "Fredrikstad", "Destination": "Gothenburg", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Ship": "Jutlandica", "dTime": "12/02/19 01:12", "aTime": "12/02/19 12:12"},
    {"Origin": "Frederikshavn", "Destination": "Gothenburg", "oHarbour": "Ryahamnen", "dHarbour": "Masthuggskajen", "Ship": "Fionia", "dTime": "18/06/19 05:37", "aTime": "18/06/19 19:37"},
    {"Origin": "Aland", "Destination": "Gothenburg", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Ship": "Fionia", "dTime": "01/06/19 06:45", "aTime": "01/06/19 19:45"},
    {"Origin": "Kiel", "Destination": "Gothenburg", "oHarbour": "Arendal", "dHarbour": "Masthuggskajen", "Ship": "Jutlandica", "dTime": "11/02/19 15:29", "aTime": "11/02/19 22:29"},
    {"Origin": "Gothenburg", "Destination": "Kiel", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Ship": "Scandinavica", "dTime": "05/09/19 11:58", "aTime": "05/09/19 17:58"},
    {"Origin": "Stockholm", "Destination": "Gothenburg", "oHarbour": "Skandiahamnen", "dHarbour": "Masthuggskajen", "Ship": "Danica", "dTime": "06/09/19 16:35", "aTime": "06/09/19 17:35"},
    {"Origin": "Stockholm", "Destination": "Gothenburg", "oHarbour": "Bilhamnen", "dHarbour": "Masthuggskajen", "Ship": "Vinga", "dTime": "04/05/19 22:41", "aTime": "04/05/19 18:41"},
    {"Origin": "Fredrikstad", "Destination": "Gothenburg", "oHarbour": "Ryahamnen", "dHarbour": "Masthuggskajen", "Ship": "Vinga", "dTime": "13/05/19 06:35", "aTime": "13/05/19 04:35"}]

let table;
let data;
let selectedHarbour;


window.onload = function() {
    data = Object.keys(mockupEntries[0]); 
    table = document.getElementById("testTable");

    document.getElementById("view").style.visibility = 'hidden';
  

      var submitButton = document.createElement("BUTTON");
      submitButton.addEventListener("click", function(){submitted()});
      submitButton.innerHTML = "Save changes";
      document.getElementById("confirm").appendChild(submitButton);



};

function selectedLocation(selected){
    selectedHarbour = selected;
}

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
        document.getElementById("options").style.visibility = 'hidden';
        formArguments(chosenPreset);

        //drawTable(chosenDirection);
        

    }


}
function formArguments(preset){
    if(preset == "preset1"){
        //Departures - Detailed
        var firstStep = filterHarbourDepartures(mockupEntries, selectedHarbour);
        generateTable(table, firstStep);
        generateTableHead(table, Object.keys(firstStep[0]));

    }
    if(preset == "preset2"){
        //Departures - LIght


        
    }
     if(preset == "preset3"){
        //Arrivals - Detailed
        generateTable(table, filterHarbourArrivals(mockupEntries, selectedHarbour));
        generateTableHead(table, Object.keys(filterHarbourArrivals(mockupEntries, selectedHarbour)[0]))
    }
    if(preset == "preset4"){
        alert("Preset 4");
    }
}




function drawTable(selectedKey){

    console.log("Draw table called with " + selectedKey);

    
    generateTable(table, mockupEntries, selectedKey);
    
    generateTableHead(table, data, selectedKey);

}



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
 * @param {*} city Use this function to get a new display with every row related to searched city.
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
 * @param {*} harbour Use this function to get a new display with every row related to searched harbour.
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
 * @param {*} company Use this function to get a new display with every row related to searched city.
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

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}


//generateTable(table, mockupEntries);
//generateTableHead(table, data);
