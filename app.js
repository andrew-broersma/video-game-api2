const baseURL = "https://api.rawg.io/api/"
const key = "fc2c8fa4fe62473b812f5ee68d98d5a5"
let url;
let date = new Date().toISOString().slice(0, 10)
let lastTwoWeek = () => {
    var today = new Date();
    var lastTwoWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()-14);
    return lastTwoWeek.toISOString().slice(0,10);
}
// let twoWeeks = lastTwoWeek().slice(0, 10)

// url = baseURL + "games" + "?key=" + key + "&dates=" + date + "," + lastTwoWeek() + "&ordering=-added"
url = baseURL + "games" + "?key=" + key + "&dates=" + lastTwoWeek() + "," + date + "&platforms=4" + "&ordering=-metacritic"

console.log(url)

function mapData (data) {
    console.log(data)
    let firstDive = data.results.map(index => index)
    let cardData = firstDive.forEach(index => {
        console.log(index)

        let h5 = document.createElement("h5")
        let img = document.createElement("img")
        let link = document.createElement("a")
        let span = document.createElement("span")
        let span2 = document.createElement("span")
        let div = document.createElement("div")
        let div2 = document.createElement("div2")
        let br = document.createElement("br")
        // let card = document.getElementById("firstCard") // needs to be different
        let wrapper = document.getElementById("cardWrapper")

        let gName = index.name
        console.log(gName)
        let mScore = index.metacritic
        console.log(mScore)
        let genre = index.genre // can't get inside of array
        console.log(genre)
        let background = index.background_image
        console.log(background)
        let stores = index.stores.name // can't get inside of array
        console.log(stores)
        let linkName = index.slug

        img.src = background
        img.className = "card-img-top"
        img.alt = gName

        span.innerText = genre
        span.id = "genreSpan"
        span2.innerText = mScore
        span.id = "metaSpan"

        h5.innerText = gName
        h5.className = "card-title"

        link.href = "https://rawg.io/games/" + linkName
        link.target = "_blank"
        link.className = "btn btn-primary"
        link.innerText = "Go to RAWG"

        div.className = "card"
        div2.className = "card-body"
        div.style = "width: 18rem;"

        wrapper.appendChild(div)
        div.appendChild(img)
        div.appendChild(div2)
        div2.appendChild(h5)
        div2.appendChild(span)
        div2.appendChild(br)
        div2.appendChild(link)
        div2.appendChild(span2)

    })
}


async function getInfo() {
    await fetch (url)
        .then(res => res.json())
        .then(data => mapData(data))
}
getInfo()