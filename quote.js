const quote=document.querySelector(".quote_line");
const quoteby=document.querySelector(".quoteby");
const button=document.querySelector("button");
const volume=document.querySelector(".fa-volume-up");
const copy=document.querySelector(".fa-copy");
const facebook=document.querySelector(".fa-facebook");
console.log(quote.textContent);
console.log(quoteby.textContent);
function randomquote()
{
    fetch("https://api.quotable.io/random").then(response=>response.json()).then(result=>
    {
        console.log(result);
        quote.textContent=result.content;
        quoteby.textContent=`--${result.author}`;

    });
}
button.addEventListener("click",randomquote);
volume.addEventListener("click",()=>
{
    let utter=new SpeechSynthesisUtterance(`${quote.textContent} by ${quoteby.textContent}`);
    speechSynthesis.speak(utter)
})
copy.addEventListener("click",()=>
{
    navigator.clipboard.writeText(quote.textContent);
})
facebook.addEventListener("click",()=>
{
    let fb=`https://www.facebook.com/?url=${quote.textContent}`;
    window.open(fb,"_blank");
})