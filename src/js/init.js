//require('!style-loader!css-loader!./hello.css')
//require("./style.css");
//const content = require('./content')
//import './hello.css'
import { add, content } from './content'
import { sub } from './multicalc'
//require('./hello.css')

// document.write(content)

$(document).ready(function () {
    $("#jscontent").text(content + ' AAA')

    let count = 0;

    $("#calc").click(() => {
        let number1 = $("#number1").val()
        let number2 = $("#number2").val();
        let sum = 0;
        if (count % 2 == 0)
            sum = add(parseFloat(number1), parseFloat(number2))
        else
            sum = sub(parseFloat(number1), parseFloat(number2))

        $("#sum").val(sum);
        count++;
    })
})