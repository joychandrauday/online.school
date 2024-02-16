const courses=document.querySelectorAll('.singleCourse')
let itemCounter=1
let subTotalPrize=0;
for (let i = 0; i < courses.length; i++) {
    
    //button 
    const course=courses[i];
    const addToCartBtn=course.querySelector('a');
    
    //images
    const courseBanner=course.querySelector('img');
    const courseUrl=courseBanner.src;
    
    //title
    const courseTitleElement=course.querySelector('h3');
    const courseTitle=courseTitleElement.innerText;
    
    //price
    const coursePrizeText=course.querySelector('h4').innerText.split(' ')[0];
    const coursePrize=parseInt(coursePrizeText);
    
    //total price
    const totalPrizeText=document.getElementById('subtotal').innerText.split(' ')[0];
    const totalPrize=parseInt(totalPrizeText);
    
    //course seat
    
    const courseSeatText=course.querySelector('.seatLeft').innerText.split(' ')[0];
    let seatLeft=parseInt(courseSeatText);
    
    

    addToCartBtn.addEventListener('click',function() {

        const emptyCart=document.getElementById('emptyCart')
        emptyCart.style.display='none'


        const parentDetails=document.getElementById('itemDetails')
        const h4=document.createElement('h4')
        h4.innerText=courseTitle;
        h4.classList.add('cartTtile');
        // h4.classList.add('marginBottom');
        parentDetails.appendChild(h4);

        const h3=document.createElement('h3')
        h3.innerText=coursePrize+' tk.';
        h3.classList.add('cartPrice');
        h3.classList.add('marginBottom');
        parentDetails.appendChild(h3);
        
        const cartBanner=document.getElementById('cart-banner')
        const img=document.createElement('img',);
        
        img.src = courseUrl;
        cartBanner.appendChild(img);
        img.classList.add('marginBottom');
        
        
        

        
        const itemsNumberContainer=document.getElementById('itemsNumber');
        itemsNumberContainer.innerText=itemCounter;
        itemCounter++
        

        seatLeft=updateCourseSeat(seatLeft,1);
        const seatNumberContainer=course.querySelector('p');
        seatNumberContainer.innerText=seatLeft+' seats left';

       
        
        subTotalPrize=updateFinalPrice(subTotalPrize,coursePrize);
        const totalPrizeText=document.getElementById('subtotal');
        // subTotalPrize=+coursePrize;
        // console.log(subTotalPrize)
        totalPrizeText.innerText=subTotalPrize +' tk';

        
    })
}


// log in notification
function notify(){
    setTimeout(function(){
        document.getElementById('notificationAddMovie').style.display = 'block'
    }, 1500);
    
    setTimeout(function(){
        document.getElementById('notificationAddMovie').style.display = 'none'
    }, 3000);
}