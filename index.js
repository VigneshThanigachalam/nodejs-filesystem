import express from "express";
import fs from "fs";
const app = express();
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const content = new Date().toLocaleString();
const file_name = `${year}-${month}-${day} @ ${hour}-${minute}-${second}.txt`;
console.log(file_name);
const PORT = 4000;

app.get("/add-file", function (request, response) {
    let folderName = "Text Files";
    fs.writeFileSync(`${folderName}/${file_name}`, "content");
    console.log("hi");
    response.send("file added");
});

app.get("/get-files", function (request, response) {
    let folderName = "Text Files";
    let entireFiles = [];
    fs.readdirSync(folderName).forEach((file) => {
        entireFiles.push(file);
    });
    response.send(entireFiles);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));