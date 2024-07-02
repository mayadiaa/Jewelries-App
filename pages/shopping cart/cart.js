let cartCount=document.querySelector('#count');
let tableBody=document.querySelector('.table tbody');
let totalPrice=document.querySelector('.totalPrice');
let cart=JSON.parse(localStorage.getItem('cart')) || [];
calcCartCount();
renderProducts();
calcTotalPrice();


function renderProducts(){
    tableBody.innerHTML='';
   cart.forEach(product => {
    tableBody.innerHTML +=`
    <tr class="cart-product" data-id="${product.id}">
      <td>
        <img src="${product.imageUrl}">
      </td>
      <td>$${product.price}.00</td>
    <td>
      <div class="col-12 QtyControl">
        <i class="fa-solid fa-circle-minus decreaseqty"></i>
        <p class="quantity">${product.quantity}</p>
        <i class="fa-solid fa-circle-plus increaseqty"></i>
       
      </div>
    </td>
   <td>
      <i class="fa-solid fa-circle-xmark closeIcon"></i>
     </td>
    </tr>`
    
   });
   addEvents();
}

function addEvents(){
    let increaseQtyBtn=document.querySelectorAll(".increaseqty");
    let decreaseQtyBtn=document.querySelectorAll(".decreaseqty");
    let removeBtn=document.querySelectorAll(".closeIcon");

    removeBtn.forEach(btn => {
    btn.addEventListener('click',()=>{
        let parent=btn.closest('.cart-product');
        console.log(parent);
        let id=parent.getAttribute('data-id');
        cart=cart.filter(product=>product.id != id);
        console.log(cart);
        parent.remove();
        saveCartToLS();
        calcCartCount();
        calcTotalPrice();
    })
});
  
increaseQtyBtn.forEach(btn => {
      btn.addEventListener('click',()=>{
        let parent=btn.closest('.cart-product');
        let id=parent.dataset.id;
        let productObj=cart.find(product=>{
          return product.id==id;
         })
           productObj.quantity++;
           parent.querySelector('.quantity').textContent=productObj.quantity+0; 

        saveCartToLS();
        calcCartCount();
        calcTotalPrice();
      })
    });



    decreaseQtyBtn.forEach(btn => {
      btn.addEventListener('click',()=>{
        let parent=btn.closest('.cart-product');
        let id=parent.dataset.id;
        let productObj=cart.find(product=>{
          return product.id==id;
         })
           productObj.quantity--;
           parent.querySelector('.quantity').textContent=productObj.quantity-0; 
        saveCartToLS();
        calcCartCount();
        calcTotalPrice();
      })
    });


}

function saveCartToLS(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

function calcCartCount(){
    cartCount.textContent=cart.length;
}


 function calcTotalPrice(){
   totalPrice.textContent= '$' + cart.reduce((acc,ele)=>{
     return acc + (ele.quantity*ele.price);
   },0);
  }




































// let cartCount=document.querySelector('#count');
// let tableBody=document.querySelector('.table tbody');
// let totalPrice=document.querySelector('.totalPrice');
// let cart=JSON.parse(localStorage.getItem('cart')) || [];
// calcCartCount();
// renderProducts();
// calcTotalPrice();
// // addEvents();

// function renderProducts(){
//     tableBody.innerHTML='';
//    cart.forEach(product => {
//     tableBody.innerHTML +=`
//     <tr class="cart-product" data-id="${product.id}">
//       <td>
//         <img src="${product.imageUrl}">
//       </td>
//       <td>$${product.price}.00</td>
//     <td>
//       <div class="col-12 QtyControl">
//         <i class="fa-solid fa-circle-minus decreaseqty"></i>
//         <p class="quantity">${product.quantity}</p>
//         <i class="fa-solid fa-circle-plus increaseqty"></i>
       
//       </div>
//     </td>
//     <div>
     
//       <i class="fa-solid fa-circle-xmark closeIcon"></i>
//       </div>
//     </tr>`
    
//    });
// }

// function addEvents(){
//     let increaseQtyBtn=document.querySelectorAll(".increaseqty");
//     let decreaseQtyBtn=document.querySelectorAll(".decreaseqty");
//     let removeBtn=document.querySelector(".closeIcon");

//     removeBtn.forEach(btn => {
//     btn.addEventListener('click',()=>{
//         let parent=btn.closest('.cart-product');
//         const id =parent.getAttribute('data-id');
//         // let id=parent.dataset.id;
//         cart=cart.filter(product=>{
//          return  product.id != id
//         });
//         parent.remove();
//         saveCartToLS();
//         calcCartCount();
//         calcTotalPrice();
//     })
// });
  
// increaseQtyBtn.forEach(btn => {
//       btn.addEventListener('click',()=>{
//         let parent=btn.closest('.cart-product');
//         let id=parent.dataset.id;
//         let productObj=cart.find(product=>{
//           return product.id==id;
//          })
//            productObj.quantity++;
//            parent.querySelector('.quantity').textContent=productObj.quantity+0; 

//         saveCartToLS();
//         calcCartCount();
//         calcTotalPrice();
//       })
//     });



//     decreaseQtyBtn.forEach(btn => {
//       btn.addEventListener('click',()=>{
//         let parent=btn.closest('.cart-product');
//         let id=parent.dataset.id;
//         let productObj=cart.find(product=>{
//           return product.id==id;
//          })
//          if(productObj.quantity>1){
//           productObj.quantity--;
//          }
          
//            parent.querySelector('.quantity').textContent=productObj.quantity-0; 


//         saveCartToLS();
//         calcCartCount();
//         calcTotalPrice();
//       })
//     });

// }

// function saveCartToLS(){
//     localStorage.setItem('cart',JSON.stringify(cart));
// }

// function calcCartCount(){
//     cartCount.textContent=cart.length;
// }
// function calcTotalPrice(){
//   totalPrice.textContent= '$' + cart.reduce((acc,ele)=>{
//     return acc + (ele.quantity*ele.price);
//   },0);
// }