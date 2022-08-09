"use strict";

const STUDENTS = [
    {
        name: "John Mintah",
        class: "BS2"
    },
    {
        name: "Ishmael Latey",
        class: "BS5"
    },
    {
        name: "Nana Adwoa Owusu Darko",
        class: "BS2"
    },
    {
        name: "Peter Kwan",
        class: "BS5"
    },
    {
        name: "Patience Fosu",
        class: "BS6"
    }
]
const CLASSES = {
    BS1: 'BS1',
    BS2: 'BS2',
    BS3: "BS3"

};
  
let BS1 = [], BS2 =[], BS3 = [], BS4 = [], BS5 = [], BS6 = [], BS7 = [], BS8 = [], BS9 = [];
for(let student of STUDENTS){
    switch(student.class){
        case CLASSES.BS1:
            BS1.push(student.name)
            break;
        case CLASSES.BS2:
            BS2.push(student.name)
            break;
        case CLASSES.BS3:
            BS3.push(student.name)
            break;
        
        default:
            break
    }

}
function createAccordion(classData, classTitle, accordionShow="", buttonCollapsed ="", ariaExpanded ="false"){
    let accordionItem = document.createElement('div')
    accordionItem.className = "accordion-item"
    let accordionItemHeading = document.createElement('h2')
    accordionItemHeading.className ="accordion-header"
    accordionItemHeading.id = `heading${classTitle}`
    let accordionItemButton = document.createElement("button");
    accordionItemButton.className = `accordion-button ${buttonCollapsed}`
    accordionItemButton.type ="button" 
    accordionItemButton.dataset.bsToggle = "collapse" 
    accordionItemButton.dataset.bsTarget  =`#collapse${classTitle}`
    accordionItemButton.dataset.ariaExpanded  =`${ariaExpanded}` 
    accordionItemButton.dataset.ariaControls =`#collapse${classTitle}`
    accordionItemButton.innerHTML = classTitle

    let accordionItemBody = document.createElement('div')
    accordionItemBody.className = `accordion-collapse collapse ${accordionShow}`
    accordionItemBody.id = `collapse${classTitle}`
    accordionItemBody.dataset.ariaLabelledby = `heading${classTitle}`
    accordionItemBody.dataset.bsParent = "#accordionExample"
    let accordionItemBodyContent = document.createElement('div')
    accordionItemBodyContent.className = "accordion-body"
    let ul = document.createElement("ul");
    for(let data of classData){
        let li = document.createElement('li');
        li.innerHTML = data
        ul.appendChild(li)
    }
    accordionItemBodyContent.append(ul)

    accordionItemHeading.append(accordionItemButton)
    accordionItem.append(accordionItemHeading)
    accordionItemBody.append(accordionItemBodyContent)
    accordionItem.append(accordionItemBody)


    document.getElementById("accordionExample").append(accordionItem)
}

createAccordion(BS1, CLASSES.BS1, "show", "", "true")
createAccordion(BS2, CLASSES.BS2, "", "collapsed")
createAccordion(BS3, CLASSES.BS3, "", "collapsed")