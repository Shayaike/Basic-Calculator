window.onload = function() {
    const display = document.getElementById("result")

    document.getElementById('AC').addEventListener('click', function() {
        display.value = ""
    })
    document.getElementById('1').addEventListener('click', function() {
        display.value += '1'
    })
    document.getElementById('2').addEventListener('click', function() {
        display.value += '2'
    })
    document.getElementById('3').addEventListener('click', function() {
        display.value += '3'
    })
    document.getElementById('4').addEventListener('click', function() {
        display.value += '4'
    })
    document.getElementById('5').addEventListener('click', function() {
        display.value += '5'
    })
    document.getElementById('6').addEventListener('click', function() {
        display.value += '6'
    })
    document.getElementById('7').addEventListener('click', function() {
        display.value += '7'
    })
    document.getElementById('8').addEventListener('click', function() {
        display.value += '8'
    })
    document.getElementById('9').addEventListener('click', function() {
        display.value += '9'
    })
    document.getElementById('0').addEventListener('click', function() {
        display.value += '0'
    })
    document.getElementById('+').addEventListener('click', function() {
        display.value += "+"
    })
    document.getElementById('-').addEventListener('click', function() {
        display.value += '-'
    })
    document.getElementById('*').addEventListener('click', function() {
        display.value += '*'
    })
    document.getElementById('/').addEventListener('click', function() {
        display.value += '/'
    })
    document.getElementById('%').addEventListener('click', function() {
        display.value += '%'
    })
    document.getElementById('.').addEventListener('click', function() {
        display.value += '.'
    })
    document.getElementById('=').addEventListener('click', function() {
        display.value = eval(display.value)
    })
    document.getElementById('DEL').addEventListener('click', function() {
        display.value = display.value.substring(0, display.value.length - 1)
    })
    document.getElementById('X').addEventListener('click', function() {
        var alrt
        if (confirm("ready to Close?")) {
            alrt = window.close()
        }
    })

}