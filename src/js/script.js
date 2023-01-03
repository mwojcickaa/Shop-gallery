const button = document.getElementById("button")
button.addEventListener("click", function () {
    document.getElementById("shop-gallery").innerHTML = "";
    const inputValue = document.getElementById("input").value
    const link = 'https://dummyjson.com/products?limit=' + inputValue
    fetch(link)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < inputValue; i++) {
                const div = document.createElement("div")
                div.className = "products"
                const image = document.createElement("img")
                const paragraph = document.createElement("p")
                const price = document.createElement("h4")
                image.src = data.products[i].images[0]
                paragraph.innerHTML = data.products[i].title
                price.innerHTML = data.products[i].price + ".00" + " " + "$"
                div.appendChild(image)
                div.appendChild(paragraph)
                div.appendChild(price)
                document.getElementById("shop-gallery").appendChild(div)
            }
        })
})
