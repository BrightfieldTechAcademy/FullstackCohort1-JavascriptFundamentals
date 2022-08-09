"use strict";

const DATA = [
    {
        name: "Baptist Preparatory School",
        image: "./images/img1.jpeg",
        description: "Baptist was established in 1990 by Mr blah blah. So far we have enrolled 2000 students in Sefwi Bekwai and its environs.",
        verified: false
    },
    {
        name: "Saviour Preparatory School",
        image: "./images/img2.jpeg",
        description: "Saviour was established in 1995 by Mr blah blah. So far we have enrolled 2000 students in Sefwi Bekwai and its environs.",
        verified: true
    },
    {
        name: "Korsa Preparatory School",
        image: "./images/img3.jpg",
        description: "Korsah was established in 1995 by Mr blah blah. So far we have enrolled 2000 students in Sefwi Bekwai and its environs.",
        verified: true
    },
]

let cardContents = document.getElementById("cardContents");

for(let cardContent of DATA){
    let cardDiv = document.createElement('div');
    cardDiv.className = "card";
    cardDiv.style.width = "18rem";

    let cardImage = document.createElement('img');
    cardImage.src = cardContent.image;
    cardImage.className = "card-img-top"

    let cardBody = document.createElement('div');
    cardBody.className = "card-body";
    
    let cardTitle = document.createElement('h5');
    cardTitle.className = "card-title";
    cardTitle.innerHTML = cardContent.name

    let cardText = document.createElement('p');
    cardText.className = "card-text";
    cardText.innerHTML = cardContent.description
    
    cardDiv.append(cardImage)
    cardBody.append(cardTitle)
    cardBody.append(cardText)
    if(cardContent.verified){
        let cardVerified = document.createElement('a');
        cardVerified.className = "btn btn-primary";
        cardVerified.innerHTML = "Verified" 
        cardBody.append(cardVerified)
    }
    cardDiv.append(cardBody)

    cardContents.append(cardDiv)
    console.log(cardContent)
}