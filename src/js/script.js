const button = document.getElementById("button")
button.addEventListener("click", function () {
    const inputValue = document.getElementById("input").value
    const link = 'https://dummyjson.com/products?limit'
    const text = link.replace('https://dummyjson.com/products?limit', 'https://dummyjson.com/products?limit=' + inputValue)
    fetch(text)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < 31; i++) {
                const div = document.createElement("div")
                div.className = "products"
                const image = document.createElement("img")
                const paragraph = document.createElement("p")
                image.src = data.products[i].images[0];
                paragraph.innerHTML = data.products[i].title;
                div.appendChild(image);
                div.appendChild(paragraph)
                document.getElementById("shop-gallery").appendChild(div)
            }
        })
})
