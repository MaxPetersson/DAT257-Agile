// document.getElementById('hellotest').innerHTML = "Hello";

//window.document.getElementById('hellotest').innerHTML = "Hello";

// var mydata = JSON.parse(mockup);
// alert(mydata[0]);



// const fs = require('fs')
// function jsonReader(filePath, cb) {
//     fs.readFile(filePath, (err, fileData) => {
//         if (err) {
//             return cb && cb(err)
//         }
//         try {
//             const object = JSON.parse(fileData)
//             return cb && cb(null, object)
//         } catch(err) {
//             return cb && cb(err)
//         }
//     })
// }
// var data = ""
// jsonReader('./mockup.json', (err, trip) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(trip);
//     data = trip;
//     //console.log(trip[0].Origin) // => "Infinity Loop Drive"
// })

var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    fs.readFile('test.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);


