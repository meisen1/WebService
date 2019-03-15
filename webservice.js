const express = require('express');
const app = express();
const PORT = process.env.Port || 3000;

app.listen(PORT, ()=>{
    console.log("Server listening on port "+ PORT +"...");
});

app.get('/', (req,res)=>{
    var question = req.query.q;

        if(question == "Ping"){
        res.status(200).send("OK");
        }
        if(question == "Phone"){
        res.status(200).send("(917)689-7117");
        }
        if(question == "Position"){
        res.status(200).send("Team Lead Software Engineer");
        }
        if(question == "Resume"){
        res.status(200).send("https://docs.google.com/document/d/1sGsZgz7_tu1ja3p0C2BlgYTvZIWddIh27jGF7mywXKc/edit?usp=sharing");
        }
        if(question == "Degree"){
        res.status(200).send("B.S. Computer Science from Binghamton University, Watson School of Engineering");
        }
        if(question == "Name"){
        res.status(200).send("Michael Eisenstein");
        }          
        if(question == "Referrer"){
        res.status(200).send("AngelList");
        }
        if(question == "Years"){
        res.status(200).send("10+");
        }
        if(question == "Email Address"){
        res.status(200).send("meisens1@gmail.com");
        }
        if(question == "Source"){
        res.status(200).send("https://github.com/meisen1/WebService/blob/master/webservice.js");
        }

        if(question == "Puzzle"){
            //get puzzle parts, split by new line
            var puzzle = req.query.d.substring(26,57).split("\n");
            var array = [];

            puzzle.forEach(function(item) {
                array.push(item.substring(1,5));
            });
            
            array.shift();
            array.pop();                
            console.log(array);
            /*
            var col1 = [array[0][0],array[1][0],array[2][0],array[3][0]];
            var col2 = [array[0][1],array[1][1],array[2][1],array[3][1]];
            var col3 = [array[0][2],array[1][2],array[2][2],array[3][2]];
            var col4 = [array[0][3],array[1][3],array[2][3],array[3][3]];

            var row1 = [array[0][0],array[0][1],array[0][2],array[0][3]];
            var row2 = [array[1][0],array[1][1],array[2][1],array[3][1]];
            var row3 = [array[2][0],array[2][1],array[2][2],array[2][3]];
            var row4 = [array[3][0],array[3][1],array[3][2],array[3][3]];
            columns = [col1,col2,col3,col4];
            rows = [row1,row2,row3,row4];
            
            // maybe the map function could probably work here

            // Having some difficulty with converting my array of ['->--','-=--','>---','-<--']
            // into a matrix of rows and columns but I think these are the rules:


                var answer =[[],[]];
                for (var i = 0; i < rows.length; i++){
                    for (var j = 0; j < columns.length; j++) {
                        if (rows[i] == columns[j]) {
                            answer[i][j] = "=";
                        } else if (rows[i] < columns[j]) {
                            answer[i][j] = "<";
                        } else {
                            answer[i][j] = ">";
                        }
                    }
                }
           */
        
        }

        if(question == "Status"){
        res.status(200).send("Of course I can.");
        }
     
});
