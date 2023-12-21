const btnEl=document.getElementById("btn");
const meaningEl=document.getElementById("meaning");
const emoji=[]; //Creating an empty array//

async function updateEmoji(){
    const response=await fetch("https://emoji-api.com/emojis?access_key=6f763090ae4e429f15bdd5befc369a776ef2c1f8");//Fetching the API of the Emojii//
    const data=await response.json();//Converting the API to json format//
    for(let i=0;i<1500;i++){//Reduicing the size of the emojji to 1500//
        emoji.push({
            emojiName:data[i].character,//storing the image to emojiName//
            emojiCode:data[i].unicodeName,//storing the image name to emojicode//
        })
    }
   
}
updateEmoji()
console.log(emoji);

btnEl.addEventListener("click",()=>{
    const randomNum=Math.floor(Math.random()*emoji.length);//randome number creating//
    btnEl.innerText=emoji[randomNum].emojiName;//Changing the button element to image//
    meaningEl.innerText=emoji[randomNum].emojiCode;//Showing the name of image//
    

})

