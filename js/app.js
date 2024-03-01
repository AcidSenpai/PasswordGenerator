const inputPassword = document.getElementById("inputPassword");
const lengthSpanValue = document.getElementById("length_span-value");
const rangePassword = document.getElementById("settings-slide_range");
const allCheckbox = document.querySelectorAll('input[type="checkbox"]')
const checkUppercase = document.getElementById("checkbutton_uppercase")
const checkLowercase = document.getElementById("checkbutton_lowercase")
const checkNumbers = document.getElementById("checkbutton_numbers")
const checkSymbols = document.getElementById("checkbutton_symbols")
const generateBtn = document.getElementById("settings_generate")
const copyKeyboard = document.getElementById("copyKeyboard")

const allBar = document.querySelectorAll(".bar")

const spanStrength = document.getElementById("strenght_span-force")

const bar1 = document.getElementById("bar1")
const bar2 = document.getElementById("bar2")
const bar3 = document.getElementById("bar3")
const bar4 = document.getElementById("bar4")

let containUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let containLowercase = "abcdefghijklmnopqrstuvwxyz";
let containNumbers = "0123456789";
let containSymbols = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"

let passwordChars = "";
let password = ""

const attLeastOnChecked = () => {
    for(const checkbox of allCheckbox) {
        if(checkbox.checked) {
            return true
        }
    }
    return false
}


rangePassword.value = 10;
lengthSpanValue.textContent = rangePassword.value;

rangePassword.addEventListener("input", () => {
    lengthSpanValue.textContent = rangePassword.value
})

const generatePassword = () => {
    passwordChars = ""
    password = ""
    inputPassword.value = ""
    if(checkUppercase.checked) {
        passwordChars += containUppercase
    }
    if(checkLowercase.checked) {
        passwordChars += containLowercase
    }
    if(checkNumbers.checked) {
        passwordChars += containNumbers
    }
    if(checkSymbols.checked) {
        passwordChars += containSymbols
    }
    if(!attLeastOnChecked()) {
        console.log("Veuillez cocher au moin un parametre");
    }else {
        for(let i = 0; i < rangePassword.value; i++) {
            let randomChars = Math.floor(Math.random() * passwordChars.length) + 1
            password += passwordChars.charAt(randomChars)
        }
        inputPassword.value = password
        rankPassword(password)
    }

}

const setBarStyle = (bar, style) => {
    bar.classList.remove("bar-low", "bar-medium", "bar-strong");
    bar.classList.add(`bar-${style}`);
}

const barReset = (bars) => {
    bars.forEach(bar => {
        bar.classList.remove("bar-medium", "bar-strong");
    })
}

const rankPassword = (p) => {
    if(p.length <= 6 && !p.includes(containNumbers) && !p.includes(containSymbols)) {
        setBarStyle(bar1, "low")
        barReset([bar2, bar3, bar4])
        spanStrength.textContent = "LOW"
    }else if(p.length <= 10 && !p.includes(containNumbers) && !p.includes(containSymbols)){
        setBarStyle(bar1, "medium")
        setBarStyle(bar2, "medium")
        barReset([bar3, bar4])
        spanStrength.textContent = "MEDIUM"
    }else if(p.length >= 14) {
        setBarStyle(bar1, "strong")
        setBarStyle(bar2, "strong")
        setBarStyle(bar3, "strong")
        setBarStyle(bar4, "strong")
        spanStrength.textContent = "STRONG"
    }
}


copyKeyboard.addEventListener("click", () => {
    inputPassword.select()
    try {
        document.execCommand("copy")
    } catch (err){
        console.error("Erreur lors de la copie du mot de pass", + err)
    }
})

generateBtn.addEventListener("click", () => {
    generatePassword()
})