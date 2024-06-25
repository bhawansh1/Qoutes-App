const btn= document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
   " Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","Life isn’t about finding yourself. Life is about creating yourself.”― George Bernard Shaw","Keep your face always toward the sunshine, and shadows will fall behind you.","Nothing is impossible. The word itself says ‘I’m possible!"
   ,"Happiness is not something readymade. It comes from your own actions.","It is during our darkest moments that we must focus to see the light."
]

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
})