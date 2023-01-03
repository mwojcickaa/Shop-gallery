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
        }
        const button = document.getElementById("button")
        button.addEventListener("click", function () {
            const input = document.getElementById("input").value
            console.log(input)
            if (input == 1) {
                console.log("1221")
            }
        })
    })



