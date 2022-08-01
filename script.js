// first thing- User selects first number and store that number in const || let
// Second thing- User selects operator and store that operator in const || let
// thrid thing- User seclcts second number and store that number in const || let
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equlasButton = document.querySelector('[data-equals]')
const clearAllButton = document.querySelector('[data-all-clear]')
const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')
const keys = document.querySelector(".calculator_keys")


// when user clicks button display number
numberButtons.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        switch (e.target.innerHTML) {
            default:
                currentOperand.innerHTML += e.target.innerHTML
        }
    })
})



console.log(numberButtons);