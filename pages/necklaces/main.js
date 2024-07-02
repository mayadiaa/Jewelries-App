
let products=[
    // necklaces product
    {
      
      imageUrl:'photos/black\ necklace.webp',
      imgUrl:'photos/black\ necklace\ 2.webp',
      id: 1 ,
      name:'black Necklaces',
      price:78,
      incart:0
    },
    {
        imageUrl:'photos/color\ necklace1.webp',
        imgUrl:'photos/color\ necklace\ 2.webp',
        id: 2 ,
        name:'color Necklaces',
        price:80,
        incart:0
      },
      {
        imageUrl:'photos/gold\ neck\ 1.webp',
        imgUrl:'photos/gold\ neck2.webp',
        id: 3 ,
        name:'gold Necklaces',
        price:399,
        incart:0
      },
      {
        imageUrl:'photos/gold\ necklace\ 1.webp',
        imgUrl:'photos/gold\ necklace\ 2.webp',
        id: 4 ,
        name:'golden Necklaces',
        price:500,
        incart:0
      },
      {
        imageUrl:'photos/silver\ necklace\ 1.webp',
        imgUrl:'photos/silver\ necklace\ 2.webp',
        id: 5 ,
        name:'silver Necklaces',
        price:170,
        incart:0
      },
      {
        imageUrl:'photos/necklace1.webp',
        imgUrl:'photos/necklace2.webp',
        id: 6 ,
        name:'beauty necklace',
        price:315,
        incart:0
      }
     
      
    
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





