const btn = document.querySelector('.btn');
const img = document.querySelector('.imag');
const imgName = document.querySelector(".imgName");
const pic = document.querySelector('.pic-container');

const url = "https://api.catboys.com/img"
btn.addEventListener('click', async ()=>{
    try{

        pic.classList.remove('hidden');
        imgName.classList.remove('hidden');
        imgName.innerText = "Loading...";
        img.src = "spinner.svg";  
        const obj = await fetch(url);
        const mainimg = await obj.json();
        img.src = await mainimg.url;
        imgName.innerText = mainimg.artist;
        console.log(img.src);
    }catch(e){
        imgName.innerText = "Some error occure!";
        
    }
     
})
 