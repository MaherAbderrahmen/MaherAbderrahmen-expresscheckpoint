const express = require('express');
const app = express();


app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public')); 

app.use((req, res, next)=>{
        const date = new Date();
        let jour =date.toDateString().slice(0,3);
        let heure = date.toTimeString().slice(0,2);
        let temp = false;
        switch (jour) {
            case 'Mon':
            case 'Tue':
            case 'Wed':
            case 'Thu':
            case 'Fri': temp = true;
        }
        if (temp === true && heure>=9 && heure<=17){
            next();

        } else res.render("error");
        
})
//} else res.end("Please comeback later");
//else res.render("error");

app.get('/', (req, res)=>{
    res.render("home");
})
app.get("/contactus", (req,res)=>{
    res.render("contactus");
})

app.get("/ourservices", (req,res)=>{
    res.render("ourservices")
})



// Create a server
const port = 5000;

app.listen(port, (err) => {
    if (err) console.log("Connection failed !")
    else console.log(`Server is running on port ${port}`)
})