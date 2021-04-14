'use strict'
console.log('yes')
var car = {type:"Fiat", model:"500", color:"white"};
console.log(car)
var toggle = true

var sum = 200
var sumUp = 0

function disapear() {
    // debugger
    var elDiv = document.querySelector('div')
    var elDiv2 = document.querySelector('.unique')
    var elImage = document.querySelector('.gili')


    if (toggle) {
        elDiv.style.visibility = 'hidden'
        elDiv2.style.width = '180px'
        elImage.style.width = '200px'
        elImage.style.backgroundColor = 'green'
        elDiv2.style.backgroundColor = 'blue'
        toggle = false

    } else if (sum < 1500) {
        elImage.style.marginLeft = sum + 'px'
        elImage.style.width = '100px'
        elImage.style.backgroundColor = 'yellow'
        elDiv.style.visibility = 'visible'
        elDiv.style.backgroundColor = 'yellow'
        elDiv.style.marginLeft = sum + 'px'
        elDiv2.style.marginLeft = sum + 'px'
        elDiv2.style.width = '100px'
        elDiv2.style.backgroundColor = 'pink'
        sum += 200
        toggle = true
    } else {
        sum = 0
        sumUp = 0
        

        return values
    }
}

function buttom (values)  {
    // debugger
 
}

    

