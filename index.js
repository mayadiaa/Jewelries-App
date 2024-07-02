let cartCount=document.querySelector('#count');
let tableBody=document.querySelector('.table tbody');
let totalPrice=document.querySelector('.totalPrice');
let cart=JSON.parse(localStorage.getItem('cart')) || [];
calcCartCount();



function addEvents(){
    let increaseQtyBtn=document.querySelectorAll(".increaseqty");
    let decreaseQtyBtn=document.querySelectorAll(".decreaseqty");
    let removeBtn=document.querySelector(".closeIcon");

    removeBtn.forEach(btn => {
    btn.addEventListener('click',()=>{
        let parent=btn.closest('.cart-product');
        let id=parent.dataset.id;
        cart=cart.filter(product=>product.id != id);
        parent.remove();
        saveCartToLS();
        calcCartCount();
       
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
           parent.querySelector('.quantity').textContent=productObj.quantity; 

        saveCartToLS();
        calcCartCount();
     
      })
    });



    decreaseqty.forEach(btn => {
      btn.addEventListener('click',()=>{
        let parent=btn.closest('.cart-product');
        let id=parent.dataset.id;
        let productObj=cart.find(product=>{
          return product.id==id;
         })
         if(productObj>1){
          productObj.quantity--;
         }
          
           parent.querySelector('.quantity').textContent=productObj.quantity; 


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



