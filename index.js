let darkButton=document.getElementById("darkButton");
darkspan=document.getElementById("darkspan")
darkButton.addEventListener("click",function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        darkspan.textContent="light_mode"
    }
    else{
        darkspan.textContent="dark_mode"

    }
})

let menuButton=document.getElementById("menuButton")
let menucancelButton=document.getElementById("menucancelbutton")
let navPhoneContainer=document.getElementById("navphonecontainer")
menuButton.addEventListener("click",function(){
    navPhoneContainer.style.right='0px';
})
menucancelButton.addEventListener("click",function(){
    navPhoneContainer.style.right='-120vw';
})

let complete=[
    {
    id:'c1',
    img:"imgs/complete/1.png",
    name: "SANTA CRUZ",
    price:3099+"LE"},
    {
    id:'c2',
    img:"imgs/complete/2.png",
    name: "CREATURE",
    price:2699+"LE"},
    {
    id:'c3',
    img:"imgs/complete/3.png",
    name: "CREATURE",
    price:2399+"LE"},
    {
    id:'c4',
    img:"imgs/complete/4.png",
    name: "NOMAND",
    price:3099+"LE"},
    {
    id:'c5',
    img:"imgs/complete/5.png",
    name: "CREATURE",
    price:2899+"LE"},
    {
    id:'c6',
    img:"imgs/complete/6.png",
    name: "GIRL",
    price:2099+"LE"},
     {
    id:'c7',
    img:"imgs/complete/7.png",
    name: "PRIMITIVE",
    price:2499+"LE"},
    {
    id:'c8',
    img:"imgs/complete/8.png",
    name: "SANTA CRUZ",
    price:999+"LE"},
    {
    id:'c9',
    img:"imgs/complete/9.png",
    name: "POWELL PERALTA",
    price:2199+"LE"},
    {
    id:'c10',
    img:"imgs/complete/10.png",
    name: "NOMAND",
    price:2399+"LE"},
    {
    id:'c11',
    img:"imgs/complete/11.png",
    name: "NOMAND",
    price:2099+"LE"},
    {
    id:'c12',
    img:"imgs/complete/12.png",
    name: "CREATURE",
    price:2999+"LE"},
    {
    id:'c13',
    img:"imgs/complete/13.png",
    name: "SANTA CRUZ",
    price:2099+"LE"},
    {
    id:'c14',
    img:"imgs/complete/14.png",
    name: "SANTA CRUZ",
    price:2099+"LE"},
    {
    id:'c15',
    img:"imgs/complete/15.png",
    name: "DGK",
    price:2099+"LE"},
    {
    id:'c16',
    img:"imgs/complete/16.png",
    name: "PRIMITIVE",
    price:2099+"LE"},
    {
    id:'c17',
    img:"imgs/complete/17.png",
    name: "RODRIGUEZ",
    price:2099+"LE"},
    {
    id:'c18',
    img:"imgs/complete/18.png",
    name: "SATISFY",
    price:2099+"LE"},
    {
    id:'c19',
    img:"imgs/complete/19.png",
    name: "SANTA CRUZ",
    price:2099+"LE"},
    {
    id:'c20',
    img:"imgs/complete/20.png",
    name: "SANTA CRUZ",
    price:2099+"LE"},
    {
    id:'c21',
    img:"imgs/complete/21.png",
    name: "NOMAND",
    price:2099+"LE"},
    {
    id:'c22',
    img:"imgs/complete/22.png",
    name: "GIRL",
    price:2099+"LE"}
    ]
let decks=[
    {
    id:'d1',
    img:"imgs/decks/1.png",
    name: "TEMPLE",
    price:1099+"LE"},
    {
    id:'d2',
    img:"imgs/decks/2.png",
    name: "TEMPLE POUND",
    price:1299+"LE"},
    {
    id:'d3',
    img:"imgs/decks/3.png",
    name: "TEMPLE POUND",
    price:1199+"LE"},
    {
    id:'d4',
    img:"imgs/decks/4.png",
    name: "MAURIG MCCOY",
    price:1099+"LE"},
    {
    id:'d5',
    img:"imgs/decks/5.png",
    name: "SANTA CRUZ",
    price:1099+"LE"},
    {
    id:'d6',
    img:"imgs/decks/6.png",
    name: "DEATH WISH",
    price:1099+"LE"},
     {
    id:'d7',
    img:"imgs/decks/7.png",
    name: "REAL",
    price:899+"LE"},
    {
    id:'d8',
    img:"imgs/decks/8.png",
    name: "BLIND",
    price:999+"LE"},
    {
    id:'d9',
    img:"imgs/decks/9.png",
    name: "DEATH WISH",
    price:1199+"LE"},
    {
    id:'d10',
    img:"imgs/decks/10.png",
    name: "BREAK",
    price:1299+"LE"},
    {
    id:'d11',
    img:"imgs/decks/11.png",
    name: "CREATURE",
    price:1099+"LE"},
    {
    id:'d12',
    img:"imgs/decks/12.png",
    name: "CREATURE",
    price:999+"LE"},
    {
    id:'d13',
    img:"imgs/decks/13.png",
    name: "CREATURE",
    price:1199+"LE"},
     {
    id:'d14',
    img:"imgs/decks/14.png",
    name: "SANTA CRUZ",
    price:1299+"LE"},
     {
    id:'d15',
    img:"imgs/decks/15.png",
    name: "CREATURE",
    price:119+"LE"},
     {
    id:'d16',
    img:"imgs/decks/16.png",
    name: "GIRL",
    price:799+"LE"},
     {
    id:'d17',
    img:"imgs/decks/17.png",
    name: "CREATURE",
    price:899+"LE"},
     {
    id:'d18',
    img:"imgs/decks/18.png",
    name: "NOMAND",
    price:1299+"LE"},
     {
    id:'d19',
    img:"imgs/decks/19.png",
    name: "CREATURE",
    price:999+"LE"}
    ]
let trucks=[
    {
    id:'t1',
    img:"imgs/trucks/1.png",
    name: "V-LIGHTS",
    price:1099+"LE"},
    {
    id:'t2',
    img:"imgs/trucks/2.png",
    name: "MANIUM",
    price:1299+"LE"},
    {
    id:'t3',
    img:"imgs/trucks/3.png",
    name: "MANIUM",
    price:1399+"LE"},
    {
    id:'t4',
    img:"imgs/trucks/4.png",
    name: "INDEPENDANT",
    price:899+"LE"},
    {
    id:'t5',
    img:"imgs/trucks/5.png",
    name: "HOLLOW",
    price:1099+"LE"},
    {
    id:'t6',
    img:"imgs/trucks/6.png",
    name: "INDEPENDANT",
    price:999+"LE"},
    {
    id:'t7',
    img:"imgs/trucks/7.png",
    name: "HOLLOW",
    price:999+"LE"},
    {
    id:'t8',
    img:"imgs/trucks/8.png",
    name: "INDEPENDANT",
    price:1299+"LE"},
    {
    id:'t9',
    img:"imgs/trucks/9.png",
    name: "MANIUM",
    price:1199+"LE"}
]
let wheels=[
    {
    id:'w1',
    img:"imgs/wheels/11.png",
    name: "SPARX",
    price:1099+"LE"},
    {
    id:'w2',
    img:"imgs/wheels/2.png",
    name: "KRUX",
    price:1299+"LE"},
    {
    id:'w3',
    img:"imgs/wheels/3.png",
    name: "INDEPENDANT",
    price:1199+"LE"},
    {
    id:'w4',
    img:"imgs/wheels/4.png",
    name: "SLIME BALLS",
    price:1099+"LE"},
    {
    id:'w5',
    img:"imgs/wheels/5.png",
    name: "NOMAND",
    price:1099+"LE"},
    {
    id:'w6',
    img:"imgs/wheels/6.png",
    name: "RICTA",
    price:1099+"LE"},
     {
    id:'w7',
    img:"imgs/wheels/7.png",
    name: "OJZ",
    price:899+"LE"},
    {
    id:'w8',
    img:"imgs/wheels/8.png",
    name: "OJZ",
    price:999+"LE"},
    {
    id:'w9',
    img:"imgs/wheels/9.png",
    name: "RICTA",
    price:1199+"LE"},
    {
    id:'w10',
    img:"imgs/wheels/10.png",
    name: "SANTA CRUZ",
    price:1299+"LE"},
    {
    id:'w11',
    img:"imgs/wheels/11.png",
    name: "SPARX",
    price:1099+"LE"},
    {
    id:'w12',
    img:"imgs/wheels/12.png",
    name: "KRUX",
    price:1299+"LE"},
    {
    id:'w13',
    img:"imgs/wheels/13.png",
    name: "INDEPENDANT",
    price:1199+"LE"},
    {
    id:'w14',
    img:"imgs/wheels/14.png",
    name: "SLIME BALLS",
    price:1099+"LE"},
    {
    id:'w15',
    img:"imgs/wheels/15.png",
    name: "NOMAND",
    price:1099+"LE"},
    {
    id:'w16',
    img:"imgs/wheels/16.png",
    name: "RICTA",
    price:1099+"LE"},
     {
    id:'w17',
    img:"imgs/wheels/17.png",
    name: "OJZ",
    price:899+"LE"}
]
let griptapes=[
    {
    id:'g1',
    img:"imgs/griptape/1.png",
    name: "SHAKE JUNT",
    price:399+"LE"},
    {
    id:'g2',
    img:"imgs/griptape/2.png",
    name: "SHAKE JUNT",
    price:1299+"LE"},
    {
    id:'g3',
    img:"imgs/griptape/3.png",
    name: "DGK",
    price:1199+"LE"},
    {
    id:'g4',
    img:"imgs/griptape/4.png",
    name: "TRASHER",
    price:1099+"LE"},
    {
    id:'g5',
    img:"imgs/griptape/5.png",
    name: "DGK",
    price:699+"LE"},
    {
    id:'g6',
    img:"imgs/griptape/6.png",
    name: "SHAKE JUNT",
    price:1199+"LE"},
    {
    id:'g7',
    img:"imgs/griptape/7.png",
    name: "MOB",
    price:1099+"LE"},
    {
    id:'g8',
    img:"imgs/griptape/8.png",
    name: "NOMAND",
    price:699+"LE"}
]
let categories=['COMPLETE','DECKS','TRUCKS','WHEELS','GRIP TAPES']

let cart=[];
let products;

categories.forEach(function(item){
    if(item=="COMPLETE"){
        products=complete;
    }
    if(item=='DECKS'){
        products=decks;
    }
    if(item=='TRUCKS'){
        products=trucks;
    }
    if(item=='WHEELS'){
        products=wheels;
    }
    if(item=='GRIP TAPES'){
        products=griptapes;
    }
    //initialize categories
        let productsCategory=document.createElement("div")
        productsCategory.classList.add("productsCategory")
        productsCategory.id=`${item}`;
        let categoryName=document.createElement("h6")
        categoryName.classList.add("productCategorytext")
        let productList=document.createElement("div")
        productList.classList.add("productList")
        let productsContainer=document.getElementById("productsContainer");
        productsContainer.appendChild(productsCategory)
        productsCategory.appendChild(categoryName)
        productsCategory.appendChild(productList)
        categoryName.innerHTML=item;
        //initialize products
        products.forEach(function(product){
        let Product=document.createElement("div")
        Product.classList.add("product")
        let productImg=document.createElement("img")
        productImg.classList.add("productimg")
        let productName=document.createElement("h6")
        productName.classList.add("productname")
        let ProductPrice=document.createElement("h6")
        ProductPrice.classList.add("productprice")
        let ProductButton=document.createElement("button")
        ProductButton.classList.add("productButton")
            
        productList.appendChild(Product)
        Product.appendChild(productImg)
        Product.appendChild(productName)
        Product.appendChild(ProductPrice)
        Product.appendChild(ProductButton)

        productImg.src=product.img;
        productName.innerHTML=product.name;
        ProductPrice.innerHTML=product.price;
        ProductButton.innerHTML="ADD TO CART"
    })
})