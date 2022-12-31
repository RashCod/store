const front = document.querySelector('.front')
const back = document.querySelector('.back')


const iphoneImageOne = document.querySelector('.popup__img1')
const iphoneImageTwo = document.querySelector('.popup__img2')


front.addEventListener('click',()=>{
    iphoneImageOne.classList.add('active')
    iphoneImageTwo.classList.remove('active')
    
})
back.addEventListener('click',()=>{
    iphoneImageTwo.classList.add('active')
    iphoneImageOne.classList.remove('active')
    
})