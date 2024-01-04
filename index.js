const Feature = [
    {
        id: 1,
        label: "Gift for All"
    },
    {id: 2,
    label: "Gift for Him"}
]
const product = [
    {
        id: 1,
        productname: "Tenda Type A",
        price: 150000,
        image:"https://e7.pngegg.com/pngimages/999/204/png-clipart-tent-tent.png",
        description:"kualitas tenda terjamin bagus dan awet",
    },
    {
        id: 2,
        productname: "Tenda Type B",
        price: 200000,
        image:"https://e7.pngegg.com/pngimages/709/228/png-clipart-tent-tent.png",
        description:"kualitas tenda terjamin bagus dan awet",
    },
    {
        id: 3,
        productname: "Tenda Type C",
        price: 100000,
        image:"https://e7.pngegg.com/pngimages/806/818/png-clipart-product-design-tent-6-man-tent-sale-tent.png",
        description:"kualitas tenda terjamin bagus dan awet",
    },
    {
        id: 4,
        productname: "Tenda Type D",
        price: 125000,
        image:"https://e7.pngegg.com/pngimages/759/682/png-clipart-product-design-tent-carnival-tent-tent-camping.png",
        description:"kualitas tenda terjamin bagus dan awet",
    },
    {
        id: 5,
        productname: "Tenda Type E",
        price: 180000,
        image:"https://w7.pngwing.com/pngs/966/237/png-transparent-tent-camping-travel-adventure-outdoors.png",
        description:"kualitas tenda terjamin bagus dan awet",
    },
    {
        id: 6,
        productname: "Tenda Type F",
        price: 180000,
        image:"https://kemahbarengprinces.shop/images/img-6.png",
        description:"kualitas tenda terjamin bagus dan awet",
    },
    
];

document.getElementById("product").innerHTML = product.map(
    (item) =>
    `<div class="col">
            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 20rem; min-Height: 450px">
            <img src=${item.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.productname}</h5>
            <p class="card-text fs-6">${item.description}</p>
            <h5>RP.${item.price}</h5>
            </div>
          </div>
    </div>`
);

window.onscroll = function(){scrollButton()}
function scrollButton(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        document.getElementById('backToTop').style.display =""
    } else{
        document.getElementById('backToTop').style.display ='none'
    }
}
function scrollToTop(){
    window.scroll(0,0)
}