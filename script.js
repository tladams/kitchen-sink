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