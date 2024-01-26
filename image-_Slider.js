let left = document.querySelector('.left');
let right = document.querySelector('.right');
let slider_ =document.querySelector('.slider');
let cluster__ = 1;
let images = document.querySelectorAll('.image');
const Total_images = images.length
const bottom_ = document.querySelector('.bottom');

// Dot_buttons code :

for(let i=0; i<Total_images; i++){
    const my_div = document.createElement('div');
    my_div.className = 'button';
     bottom_.appendChild(my_div);
 }
 
 const Dot_buttons = document.querySelectorAll('.button');
 
 Dot_buttons[0].style.backgroundColor = '#fff';
 
 const Reset_Dot_buttons = ()=>{
     Dot_buttons.forEach((e)=>{
         e.style.backgroundColor = 'transparent'
     })
 }
 
 Dot_buttons.forEach((val, i)=>{
     val.addEventListener('click',()=>{
         Reset_Dot_buttons();
         slider_.style.transform = `translateX(-${i*750}px)`;
         cluster__ = i + 1;
         val.style.backgroundColor = '#fff'
     })
 });

// Code for sync Dot_buttons & left, right buttons

const Sync_Button = ()=>{
    Reset_Dot_buttons();
    Dot_buttons[cluster__ - 1].style.backgroundColor = '#fff';
}
 // Code for sync Dot_buttons & left, right buttons ends

 // Dot_buttons code ends :


const next_Slide = ()=>{
    slider_.style.transform = `translateX(-${cluster__*750}px)`;
    cluster__++;
}

const getFirst_Slide = ()=>{
    slider_.style.transform = `translateX(0px)`;
    cluster__ = 1;
}

const prev_Slide = ()=>{
    slider_.style.transform = `translateX(-${(cluster__-2)*750}px)`;
    cluster__--;
}

const getLast_Slide = ()=>{
    slider_.style.transform = `translateX(-${(Total_images - 1)*750}px)`;
    cluster__ = Total_images;
}

right.addEventListener('click',()=>{

    cluster__ < Total_images ? next_Slide() : getFirst_Slide()
    Sync_Button();
})

left.addEventListener('click',()=>{

    cluster__ > 1 ? prev_Slide() : getLast_Slide()
    Sync_Button();
})


