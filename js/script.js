// Function to Get Random Celebrity
function getRandomCelebrity() {
    // Set Up Variable
    let txt = "";
    // Get the List Items
    const listItems = document.getElementsByTagName("li");
    // Create a New Array
    const listItemsArr = Array(listItems.length).fill("").map((_,i) => listItems[i].innerHTML);
    // Get the Random Index
    const randomIndex = Math.floor(Math.random() * listItems.length);
    // Get the Random Celebrity
    const celebrity = listItems[randomIndex].innerHTML;
    // Build the Information
    txt += `There are ${listItems.length} celebrities.<p>`;
    txt += `The celebrities are ${listItemsArr}.<p>`;
    txt += `${celebrity} is selected at random.`
    // Display the Information in the Browser
    document.getElementById("displayinfo").innerHTML = txt;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("displayinfo").innerHTML = txt;
}