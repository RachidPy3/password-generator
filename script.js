const btn = document.querySelector("button")
const display = document.querySelector("h3")
const input = document.querySelector("input")

const generatePass = (length)=>{
    const characters = "abcdefgijklmnopqrstuvxyz0123456789"
    let pass = ""
    if(length >= 8 && length <= 16){
        for(let i = 0; i < length; i++){
            pass += characters.charAt(Math.floor(Math.random() * characters.length))
        }
    }else{
        return "length must be between 8 and 16"
    }
    return pass
}

btn.addEventListener("click", ()=>{
    let pass = generatePass(input.value)
    display.innerText = "Your Password: " + pass
})