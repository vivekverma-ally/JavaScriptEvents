var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
    ],
    description:
        "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599,
};




var productDetails = document.getElementById("productDetails");

// Add Name
document.getElementsByTagName("h1")[0].innerHTML = productData.name;
// Add Brand Name
document.getElementsByTagName("h4")[0].innerHTML = productData.brand;
// Add Price
document.getElementsByTagName(
    "h4"
)[1].innerHTML = `Price: Rs <span style="color: #009688; font-weight: bold">${productData.price}</span>`;

// Add Description

document.getElementsByTagName(
    "h4"
)[2].innerHTML = `Description <br> <span style="margin-top: 20px;font-size: 16px;font-weight: 300;color: #86939e;">${productData.description}</span>`;

document.getElementsByTagName("h4")[3].innerHTML = `Product Preview`;

// Add Product Preview Pics

var productPics = document.createElement("div");
productPics.setAttribute("id", "productPics");
productDetails.appendChild(productPics);

var activeImg = "img0";
// add pics and set Event Click listenrs
productData.photos.forEach((item, i) => {
    var img = document.createElement("img");
    img.classList.add("imageStyle");
    img.setAttribute("id", `img${i}`);
    img.src = item;
    if (i == 0) img.classList.add("active");
    document.getElementById("productPics").appendChild(img);
    img.addEventListener("click", () => {
        document.getElementById(activeImg).classList.remove("active");
        img.classList.add("active");
        document.getElementById("productView").setAttribute("src", item);
        activeImg = `img${i}`;
    });
});

// add buy butoon
var buy = document.createElement("input");
buy.setAttribute("type", "button");
buy.setAttribute("value", "Add to Cart");
buy.classList.add("buy-button");
buy.addEventListener("click", () => {
    window.alert(`${productData.name} is added to your cart`);
});
productDetails.appendChild(buy);