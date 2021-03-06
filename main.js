
let index = 0
 let hexColor=''
const currentTime = setInterval(time, 1000)

function time() {

// for the current time display 
    const curDate = new Date()

// convert to standard format time
    let cHour = curDate.getHours()
    if (cHour===0) {
        cHour = 12
    } else if (cHour>12) {
        cHour = cHour - 12
    } 
    const curHour = cHour < 10 ? '0' + cHour : cHour
    const curMinute = curDate.getMinutes() < 10 ? '0' + curDate.getMinutes() : curDate.getMinutes()
    const curSecond = curDate.getSeconds() < 10 ? '0' + curDate.getSeconds() : curDate.getSeconds()
    const cTime = `${curHour}:${curMinute}:${curSecond}`
    document.querySelector('#curTime').innerHTML = cTime

// for the bckground color changing
    hexColor=Array(Math.max(6 - String(index).length + 1, 0)).join(0) + index
    document.querySelector('#bodyColor').style.backgroundColor = '#' + hexColor
    document.querySelector('#curBGC').innerHTML =  '#' + hexColor
    index++
}

// setting color font size and alignment for the clock
 document.querySelector('#curTime').style.color = 'gray'
 document.querySelector('#curTime').style.fontFamily = 'Cursive'
 document.querySelector('#curTime').style.fontSize = '100px'
 document.querySelector('#curTime').style.textAlign = 'center'
 document.querySelector('#curTime').style.marginTop = '100px'

// setting color font size and alignment for the background color
document.querySelector('#curBGC').style.color = 'gray'
 document.querySelector('#curBGC').style.fontFamily = 'Cursive'
 document.querySelector('#curBGC').style.fontSize = '80px'
 document.querySelector('#curBGC').style.textAlign = 'center'
