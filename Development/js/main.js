var rows = new Array(); //each element is a single, nonparsed row
//manually removed quote marks "" from input for practical reasons, function exists for removal.
var input = 
"{Origin: Kiel, Destination: Gothenburg, oHarbour: Skandiahamnen, dHarbour: Masthuggskajen, Ship: Germanica, dTime: 02/09/19 16:49, aTime: 02/09/19 11:49}{Origin: Aland, Destination: Gothenburg, oHarbour: Arendal, dHarbour: Masthuggskajen, Ship: Germanica, dTime: 05/10/19 05:45, aTime: 05/10/19 12:45}";

rows = input.split('}{'); //also removes all '}{', but not first or last
rows = removeClams(rows);

//turn rows into a 2d array, example: access Destination: with rows[i][1]
//also parses and makes every column of every row fully accessible
for (var i = 0; i < rows.length; i++) {
    rows[i] = rows[i].split(',');
    
    for(var j = 0; j < rows[i].length; j++) 
        rows[i][j] = removeDescription(rows[i][j]);
}

//removes first and last clam of whole inputstring
function removeClams(text){
    if(text[0].indexOf('{') != -1) text[0] = text[0].slice(1);
    if(text[text.length-1].indexOf('}') != -1) text[text.length-1] = text[text.length-1].slice(0,text[text.length-1].indexOf('}'));
    return text;
}

//removes description of an element, example: "Destination:" out of "Destination: Gothenburg"
function removeDescription(text) {
    return text.slice(text.indexOf(':')+2, text.length);
}

//removes quote marks ""
function removeBirds(text) {
    return text.replace(/['"]+/g, '');
}

//window.alert(rows[1][2]); //second row, third column