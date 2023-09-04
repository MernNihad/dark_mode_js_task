const theme = document.getElementById("theme");

theme.addEventListener("change",(event)=>{
    console.log(event.target.checked);
    document.body.classList.toggle("dark")
})