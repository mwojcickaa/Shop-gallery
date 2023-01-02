const div = document.createElement("div")
fetch('https://dummyjson.com/products?limit=6')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < 6; i++) {
            const div = document.createElement("div")
            div.className = "products"
            const image = document.createElement("img")
            const paragraph = document.createElement("p")
            image.src = data.products[i].images[0];
            paragraph.innerHTML = data.products[i].title;
            div.appendChild(image);
            div.appendChild(paragraph)
            document.getElementById("shop-gallery").appendChild(div)
            console.log(data.products)
            console.log(data.products[i].images)
        }
    })



