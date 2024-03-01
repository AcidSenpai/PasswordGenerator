const inputPassword = document.getElementById("inputPassword");
const lengthSpanValue = document.getElementById("length_span-value");
const rangePassword = document.getElementById("settings-slide_range");
const allCheckbox = document.querySelectorAll('input[type="checkbox"]')
const checkUppercase = document.getElementById("checkbutton_uppercase")
const checkLowercase = document.getElementById("checkbutton_lowercase")
const checkNumbers = document.getElementById("checkbutton_numbers")
const checkSymbols = document.getElementById("checkbutton_symbols")
const generateBtn = document.getElementById("settings_generate")

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
    }

}

generateBtn.addEventListener("click", () => {
    generatePassword()
})