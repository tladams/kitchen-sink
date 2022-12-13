// 1. append text to li that has which li it is on the page (i.e. 0..n-1)
// start by getting references to the relevant DOM elements
// make the specified modifications

const relevantLiDomElements = document.getElementsByTagName("li");
for (let i = 0; i < relevantLiDomElements.length; i++) 
{
    console.log(i, relevantLiDomElements[i]);
    //relevantDomElements[i].innerHTML += ` ${i}`;
    const textForI = document.createTextNode(` ${i}`);
    relevantLiDomElements[i].appendChild(textForI);
}

// 2. when click div console.log(which div it is on the page, i.e. 0..n-1)
// get a ref to each div in DOM
const relevantDivDomElements = document.getElementsByTagName("div");
Array.from(relevantDivDomElements).forEach((divElem, i) => {
    console.log(`i: ${i} relevantDivDomElements[i]: ${relevantDivDomElements[i].innerText}`);
    
});
// add event listener
// element with id "donut" is clicked, log the number of words
const donut = document.getElementById("donut");
donut.addEventListener("click", (e) => {
    console.log(donut.innerText.length);
})

// 4. when aside clicked, window.prompt then add id with
// content from prompt to aside's parent, log target

// using selector pattern A B
const aside = document.querySelector("body aside");
aside.addEventListener("click", (ev) => {
    const userEnteredId = window.prompt
    ("Enter an ID");
    console.log(`userEnteredId: ${userEnteredId}`);
    // need aside parent
    const aparent = aside.parentElement;
    // need to know what the user entered
    aparent.id = userEnteredId;
    console.log('ev: ', ev);
    console.log(`ev.target = ${ev.target}`);

    // 5. add an input with classname as the first child of preceding id's first aside
    // "id# A"
    // intended result:
    // aside
    //   input of type text with your class of choice
    //   ol
    const pattern5Result =  document.querySelector(`#${userEnteredId} aside`);
    const newInputElem = document.createElement("input");
    newInputElem.type = "text";
    newInputElem.className = "spanish-phonetics";
    pattern5Result.prepend(newInputElem);

    /*
    // 6. log cowsay for the input 
    // https://helloacm.com/api/cowsay/?msg=CowSay
    // want a ref to the input 
    const inputElemByClassname = document.querySelector(".spanish-phonetics");
    // add event listener to input for blur
    inputElemByClassname.addEventListener("blur", (ev) => {
        //  want to get the content of the input
        const req = new XMLHttpRequest();
        //  when the response is ready,
        //      we want to wait around for it's text() to be ready
        //      then log it
        HTMLTableRowElement.addEventListener("load", (response) => {
            console.log("response: ", response);
            console.log("response.target: ", response.target);
            console.log("response.target.responseText: ", req.target.responseText);
    });
    //  want to make a request to cowsay api
    req.open("GET", "https://helloacm.com/api/cowsay/?msg="+ev.target.value);
    req.send();
    */
    const inputElemByClassname = document.querySelector(".spanish-phonetics");
    inputElemByClassname.addEventListener("blur", (ev) => {
        const responsePromise = fetch("https://helloacm.com/api/cowsay/?msg="+ev.target.value);
        responsePromise
            .then((response) => {
                console.log("response: ", response);
                return response.text();
            }).then((cowText) => {
                console.log(
                    cowText
                    .replaceAll("\\n", "\n")
                    .replaceAll('"', "")
                );
            })

    });
    

});





