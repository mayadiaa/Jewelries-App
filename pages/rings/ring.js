let products=[
    {
           imageUrl:'photos/green\ 1.jpg',
           imgUrl:'photos/green2.jpg',
             id: 1,
             name:'green ring',
             price:99,
             incart:0
           },
           {
             imageUrl:'photos/red1.jpg',
             imgUrl:'photos/red2.jpg',
             id: 2,
             name:'red ring',
             price:115,
             incart:0
           },
           {
             imageUrl:'photos/black1.jpg',
             imgUrl:'photos/black2.jfif',
             id: 3,
             name:'black ring',
             price:290,
             incart:0
           },
           {
             imageUrl:'photos/blue1.jfif',
             imgUrl:'photos/blue2.jpg',
             id: 4,
             name:'blue ring',
             price:200,
             incart:0
           },
           {
             imageUrl:'photos/R.jfif',
             imgUrl:'photos/r2.jpg',
             id: 5,
             name:'silver ring',
             price:270,
             incart:0
           },
           {
             imageUrl:'photos/black\ collection\ 1.jpg',
             imgUrl:'photos/black\ collection2.jpg',
             id: 6,
             name:'Black1 ring',
             price:290,
             incart:0
          },
          
];
let rightDiv=document.querySelector('#RightDiv');
let cartCount=document.querySelector('#count');
let cart=JSON.parse(localStorage.getItem('cart')) || [];
renderProducts();
addEvent();
calcCartCount();

function renderProducts(){
    products.forEach(product => {
        rightDiv.innerHTML +=`
        <div class="col-4 col-md-3 RDiv Images" id="${product.id}">
        <img class="image1" src='${product.imageUrl}'onmouseover="this.src='${product.imgUrl}'" onmouseout="this.src='${product.imageUrl}'"/>
           <div class="ImgContent">
           <h3>$${product.price}.00</h3>
           <p>Bling Jewelry Great Gatsby Inspired CZ Vintage Style Full Finger Armor Ring</p>
       </div>
       <div class="BtN">
         <button class="addCart" data-target='${product.id}'>ADD TO CART</button>
       </div> 
       `
    });
   
}



function addEvent(){
  let buttons=document.querySelectorAll(".BtN");
  let addToCartBtns=document.querySelectorAll('.addCart');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
       let id= btn.dataset.target;
       let productObj=products.find(product=>{
        return product.id==id;
       })
       let quantity=1; 
       cart.push({...productObj , quantity});
       saveCartToLS();
       calcCartCount();
    })
  });
}



function saveCartToLS(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

function calcCartCount(){
    cartCount.textContent=cart.length;
}





