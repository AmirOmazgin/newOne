'use strict'
console.log('yes')
var car = {type:"Fiat", model:"500", color:"white"};
console.log(car)
var toggle = true

var sum = 40
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
        elDiv2.style.backgroundImage = 'linear-gradient(blue, yellow, blue)'
        elImage.style.backgroundImage = 'linear-gradient(grey, blue, grey)'
        toggle = false

    } else if (sum < 150) {
        elImage.style.marginLeft = sum + 'px'
        elImage.style.width = '100px'
        elImage.style.backgroundColor = 'yellow'
        elDiv.style.visibility = 'visible'
        elDiv.style.backgroundColor = 'yellow'
        elDiv.style.marginLeft = sum + 'px'
        elDiv2.style.marginLeft = sum + 'px'
        elDiv2.style.width = '100px'
        elDiv2.style.backgroundImage = 'linear-gradient(red, yellow, green)'
        elImage.style.backgroundImage = 'linear-gradient(blue, grey, white)'
        sum += 40
        toggle = true
    } else {
        sum = 0
        sumUp = 0
        

        return values
    }
}
var values = disapear
function buttom (values)  {
    // debugger
 
}

    

