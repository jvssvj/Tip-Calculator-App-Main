const billInput = document.querySelector('#bill--input')
const peopleInput = document.querySelector('#people--input')

function error(errorId, textContent, inputId, borderConfig) {
    document.getElementById(errorId).textContent = textContent
    document.getElementById(inputId).style.border = borderConfig
}

billInput.addEventListener('input', () => {
    if(billInput.value == '') {
        error('error--bill', `Can't be zero`, 'bill--input', '2px solid hsl(7, 65%, 61%)')
    } else {
        error('error--bill', ``, 'bill--input', '')
    }
})

peopleInput.addEventListener('input', () => {
    if(peopleInput.value == '') {
        error('error--people', `Can't be zero`, 'people--input', '2px solid hsl(7, 65%, 61%)')
    } else {
        error('error--people', ``, 'people--input', '')
    }
})

function calculate(buttonPercentageId, percentage) {
    let btn = document.getElementById(buttonPercentageId)
    let percentageValue = percentage / 100
 
    btn.addEventListener('click', () => {
        const billInput = parseFloat(document.querySelector('#bill--input').value)
        const peopleInput = parseFloat(document.querySelector('#people--input').value)

        if(billInput > 0 && peopleInput > 0) {

            let calc = (billInput * percentageValue)
            let tipPerson = (calc / peopleInput).toFixed(2)
            let accountTotal = ((billInput + calc) / peopleInput).toFixed(2)
            document.querySelector('#tip--result').textContent = `$${tipPerson}`
            document.querySelector('#total--result').textContent = `$${accountTotal}`
        }
        
        if (isNaN(billInput)){
            error('error--bill', `Can't be zero`, 'bill--input', '2px solid hsl(7, 65%, 61%)')
        }
        
        if (isNaN(peopleInput)) {
            error('error--people', `Can't be zero`, 'people--input', '2px solid hsl(7, 65%, 61%)')
        }
    })
}

function reset() {
    document.querySelector('#reset').addEventListener('click', function(){
        document.querySelector('#tip--result').textContent = '$0.00'
        document.querySelector('#total--result').textContent = '$0.00'
        billInput.value = ''
        peopleInput.value = ''
        document.querySelector('#custom--percentage').value = ''
    })
}

reset()
calculate('five--percentage', 5)
calculate('ten--percentage', 10)
calculate('fifteen--percentage', 15)
calculate('twenty-five--percentage', 25)
calculate('fifty--percentage', 50)
document.getElementById('custom--percentage').addEventListener('input', () => {
    const customPercentage = parseFloat(document.querySelector('#custom--percentage').value) / 100
    const billInput = parseFloat(document.querySelector('#bill--input').value)
    const peopleInput = parseFloat(document.querySelector('#people--input').value)

    if(billInput > 0 && peopleInput > 0) {
        let calc = (billInput * customPercentage)
        let tipPerson = (calc / peopleInput).toFixed(2)
        let accountTotal = ((billInput + calc) / peopleInput).toFixed(2)
        document.querySelector('#tip--result').textContent = `$${tipPerson}`
        document.querySelector('#total--result').textContent = `$${accountTotal}`
    }

    if(isNaN(customPercentage)) {
        document.querySelector('#tip--result').textContent = '$0.00'
        document.querySelector('#total--result').textContent = '$0.00'
    }

    if (isNaN(billInput)){
        error('error--bill', `Can't be zero`, 'bill--input', '2px solid hsl(7, 65%, 61%)')
        document.querySelector('#custom--percentage').value = ''
    }
    
    if (isNaN(peopleInput)) {
        error('error--people', `Can't be zero`, 'people--input', '2px solid hsl(7, 65%, 61%)')
        document.querySelector('#custom--percentage').value = ''
    }
})