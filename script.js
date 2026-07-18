// Welcome Message
console.log("Welcome to Nelli Prasad Digital");

// Smooth Fade Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("fade");
        }
    });
});

document.querySelectorAll(".card,.about,.hero,.contact-section").forEach((el)=>{
    observer.observe(el);
});

// Back To Top Button
const topBtn=document.createElement("button");
topBtn.innerHTML="⬆";
topBtn.id="topBtn";
document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="90px";
topBtn.style.right="20px";
topBtn.style.display="none";
topBtn.style.padding="12px 16px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.zIndex="999";
topBtn.style.background="#0d6efd";
topBtn.style.color="white";

window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }
});

topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// Greeting
const hour=new Date().getHours();

if(hour<12){
    console.log("Good Morning");
}else if(hour<18){
    console.log("Good Afternoon");
}else{
    console.log("Good Evening");
}
const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){
    darkBtn.addEventListener("click",()=>{
        document.body.classList.toggle("dark");
    });
}
