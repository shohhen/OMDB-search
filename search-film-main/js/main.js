
let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elList = document.querySelector(".films");




const API_KEY = "c1750d7";


function serachMovie(arr, node) {
    node.innerHTML = "";
    arr.forEach(e => {

        let newLi = document.createElement("li")
        let newTitle = document.createElement("h3")
        let newText = document.createElement("p")
        let newImg = document.createElement("img")
        let newBox = document.createElement("div")



        newTitle.textContent = e.Title
        newText.textContent = e.Type      
        
        newLi.setAttribute("class", "item")
        newTitle.setAttribute("class", "title")
        newText.setAttribute("class", "text")
        newImg.setAttribute("src", e.Poster)
        newImg.setAttribute("class", "img")
        newBox.setAttribute("class", "new-box")


        newLi.appendChild(newImg)
        newLi.appendChild(newTitle)
        newLi.appendChild(newBox)
        newBox.appendChild(newText)
        node.appendChild(newLi)
    });

}

async function getPost(value) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
    const data = await response.json()
    console.log(data);
    films =  data.Search
    serachMovie(films, elList)
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()
    let elInputValue = elInput.value;
    getPost(elInputValue);
    elInput.value = ""
})



