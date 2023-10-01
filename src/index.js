let amountResultDOM = document.querySelector('#amount-result')
let totalResultDOM = document.querySelector('#total-result')

function errorBill(borderconfig, classIndex, display) {
    document.getElementsByClassName('error')[classIndex].style.display = display
    document.querySelector('#billinput').style.border = borderconfig
}

function errorPeople(borderconfig, classIndex, display) {
    document.getElementsByClassName('error')[classIndex].style.display = display
    document.querySelector('#numberpeopleinput').style.border = borderconfig
}

document.querySelector('#five').addEventListener('click', function(){
    let billInput = parseFloat(document.querySelector('#billinput').value)
    let numberPeopleInput = parseFloat(document.querySelector('#numberpeopleinput').value)
    document.querySelector('#custominput').value = ''

    if(isNaN(billInput) && isNaN(numberPeopleInput)){
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
       errorBill('', 0, 'none')
       errorPeople('', 1, 'none')
    }

    if (isNaN(billInput) || billInput <=0) {
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        return
    } else {
        errorBill('', 0, 'none')
    }

    if(isNaN(numberPeopleInput) || numberPeopleInput <=0) {
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
        errorPeople('', 1, 'none')
    }

    let calculate = (billInput * 0.05)
    let tip = (calculate / numberPeopleInput).toFixed(2)
    let accountValue = ((billInput + calculate) / numberPeopleInput).toFixed(2)


    amountResultDOM.textContent = tip
    totalResultDOM.textContent = accountValue
})

document.querySelector('#ten').addEventListener('click', function(){
    let billInput = parseFloat(document.querySelector('#billinput').value)
    let numberPeopleInput = parseFloat(document.querySelector('#numberpeopleinput').value)
    document.querySelector('#custominput').value = ''

    if(isNaN(billInput) && isNaN(numberPeopleInput)){
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
       errorBill('', 0, 'none')
       errorPeople('', 1, 'none')
    }

    if (isNaN(billInput) || billInput <=0) {
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        return
    } else {
        errorBill('', 0, 'none')
    }

    if(isNaN(numberPeopleInput) || numberPeopleInput <=0) {
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
        errorPeople('', 1, 'none')
    }

    let calculate = (billInput * 0.1)
    let tip = (calculate / numberPeopleInput).toFixed(2)
    let accountValue = ((billInput + calculate) / numberPeopleInput).toFixed(2)

    amountResultDOM.textContent = tip
    totalResultDOM.textContent = accountValue
})

document.querySelector('#fifteen').addEventListener('click', function(){
    let billInput = parseFloat(document.querySelector('#billinput').value)
    let numberPeopleInput = parseFloat(document.querySelector('#numberpeopleinput').value)
    document.querySelector('#custominput').value = ''

    if(isNaN(billInput) && isNaN(numberPeopleInput)){
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
       errorBill('', 0, 'none')
       errorPeople('', 1, 'none')
    }

    if (isNaN(billInput) || billInput <=0) {
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        return
    } else {
        errorBill('', 0, 'none')
    }

    if(isNaN(numberPeopleInput) || numberPeopleInput <=0) {
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
        errorPeople('', 1, 'none')
    }

    let calculate = (billInput * 0.15)
    let tip = (calculate / numberPeopleInput).toFixed(2)
    let accountValue = ((billInput + calculate) / numberPeopleInput).toFixed(2)

    amountResultDOM.textContent = tip
    totalResultDOM.textContent = accountValue
})

document.querySelector('#twenty-five').addEventListener('click', function(){
    let billInput = parseFloat(document.querySelector('#billinput').value)
    let numberPeopleInput = parseFloat(document.querySelector('#numberpeopleinput').value)
    document.querySelector('#custominput').value = ''

    if(isNaN(billInput) && isNaN(numberPeopleInput)){
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
       errorBill('', 0, 'none')
       errorPeople('', 1, 'none')
    }

    if (isNaN(billInput) || billInput <=0) {
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        return
    } else {
        errorBill('', 0, 'none')
    }

    if(isNaN(numberPeopleInput) || numberPeopleInput <=0) {
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
        errorPeople('', 1, 'none')
    }

    let calculate = (billInput * 0.25)
    let tip = (calculate / numberPeopleInput).toFixed(2)
    let accountValue = ((billInput + calculate) / numberPeopleInput).toFixed(2)

    amountResultDOM.textContent = tip
    totalResultDOM.textContent = accountValue
})

document.querySelector('#fifty').addEventListener('click', function(){
    let billInput = parseFloat(document.querySelector('#billinput').value)
    let numberPeopleInput = parseFloat(document.querySelector('#numberpeopleinput').value)
    document.querySelector('#custominput').value = ''

    if(isNaN(billInput) && isNaN(numberPeopleInput)){
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
       errorBill('', 0, 'none')
       errorPeople('', 1, 'none')
    }

    if (isNaN(billInput) || billInput <=0) {
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        return
    } else {
        errorBill('', 0, 'none')
    }

    if(isNaN(numberPeopleInput) || numberPeopleInput <=0) {
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
        errorPeople('', 1, 'none')
    }

    let calculate = (billInput * 0.5)
    let tip = (calculate / numberPeopleInput).toFixed(2)
    let accountValue = ((billInput + calculate) / numberPeopleInput).toFixed(2)

    amountResultDOM.textContent = tip
    totalResultDOM.textContent = accountValue
})

document.querySelector('#custominput').addEventListener('input', function(){
    let billInput = parseFloat(document.querySelector('#billinput').value)
    let numberPeopleInput = parseFloat(document.querySelector('#numberpeopleinput').value)
    let customInput = parseFloat(document.querySelector('#custominput').value)

    if (document.querySelector('#custominput').value <=0) {
        amountResultDOM.textContent = '0.00'
        totalResultDOM.textContent = '0.00'
        return
    }

    if(customInput <=0 && isNaN(billInput) || isNaN(numberPeopleInput)) {
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        document.querySelector('#custominput').value = ''
        return
    } //Prevents the user from entering the custom amount before the bill amount and number of people
     
    if(isNaN(billInput) && isNaN(numberPeopleInput)){
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
       errorBill('', 0, 'none')
       errorPeople('', 1, 'none')
    }

    if (isNaN(billInput) || billInput <=0) {
        errorBill('2px solid hsl(7, 65%, 61%)', 0, 'block')
        return
    } else {
        errorBill('', 0, 'none')
    }

    if(isNaN(numberPeopleInput) || numberPeopleInput <=0) {
        errorPeople('2px solid hsl(7, 65%, 61%)', 1, 'block')
        return
    } else {
        errorPeople('', 1, 'none')
    }


    let porcent = 100
    let result = customInput / porcent

    let calculate = billInput * result
    let tip = (calculate / numberPeopleInput).toFixed(2)
    let accountValue = ((billInput + calculate) / numberPeopleInput).toFixed(2)
    
    amountResultDOM.textContent = tip
    totalResultDOM.textContent = accountValue
})

document.querySelector('#reset').addEventListener('click', function(){
    amountResultDOM.textContent = '0.00'
    totalResultDOM.textContent = '0.00'
    document.querySelector('#billinput').value = ''
    document.querySelector('#numberpeopleinput').value = ''
    document.querySelector('#custominput').value = ''
})

