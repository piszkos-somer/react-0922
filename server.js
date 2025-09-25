//változók létrehozása
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());

//adatbázis kapcsolat létrehozása
const db = mysql.createConnection(
    {
        user:"root",
        host:"localhost",
        port:3307,
        password:"",
        database:"fogado"
    }
);

//teszt endpoint
app.get("/", (req, res) => {
    res.send("Működik a szerver.");
});

//a) lekérdezés: A szobák adatai (szobanév, ágyak száma)
app.get("/hettorpe", (req,res) => {
    const sql = "SELECT sznev, agy FROM szobak";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});
//b) lekérdezés: A szobák kihasználtsága (vendégek száma, vendégéjszakák száma)
app.get("/kihasznaltsag", (req,res) => {
    const sql = "SELECT sznev, vendeg AS vendegek, DATEDIFF(tav, erk) AS vendegejszakak FROM szobak INNER JOIN foglalasok ON szobak.szazon = foglalasok.fsorsz ORDER BY vendegejszakak, vendegek";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});
//c) lekérdezés: A foglalások adatai (vendégek neve, érkezés, távozás)
app.get("/foglaltsag", (req,res) => {
    const sql = "SELECT vnev, erk, tav FROM foglalasok INNER JOIN vendegek ON vendegek.vsorsz = foglalasok.fsorsz ORDER BY vnev";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});


//szerver indítása
app.listen(3000, () => {

    console.log("A szerver a 3000-es porton fut.");

}); 
