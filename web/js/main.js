async function sendData (func_name, row_num, inputValues = "NaN") {
    var inputClass = "inputValues " + func_name + " " + row_num;
    var input = document.getElementsByClassName(inputClass);
    var countInput = input.length;
    if (inputValues == "NaN") {
        var inputValues = new Array ();
        for (let i = 0; i < countInput; ++i) {
            inputValues.push (input[i].value);
        };
    } else {
        for (let i = 0; i < countInput; ++i) {
            input[i].value = inputValues[i];
        }
    }

    try {outputValues = await eel.schet (inputValues, func_name) ();  
    } catch (e) {}

    var outputClass = "outputValues " + func_name + " " + row_num;
    var output = document.getElementsByClassName (outputClass);

    for (let i = 0; i < output.length; ++i) {
        let elem = output [i];
        elem.innerHTML = outputValues [i];
    }

    await eel.send_to_json (func_name, String(row_num), inputValues);
}


function update_data (func_name, row_num, data) {
    if (func_name == "acceleration" || func_name == "friction" || func_name == "isobaric") {
        sendData(func_name, row_num, data);
    } else if (func_name = "amorphic"){
        var inputClass = "inputValues " + func_name + " " + row_num;
        var input = document.getElementsByClassName(inputClass);
        var countInput = input.length;

        for (let i = 0; i < countInput; ++i) {
            input[i].value = data[i];
        }
    }
}


acceleration_rows_count = 0;
isobaric_rows_count = 0;
friction_rows_count = 0;
amorphic_rows_count = 0;


function addinputcell (func_name, row, row_number, span_num = "1", style) {

    var cell = row.insertCell ();
    cell.rowSpan = span_num;
    var cell_form = document.createElement ("form");
    var cell_input = document.createElement ("input");
    cell_input.className = "inputValues " + func_name + " " + row_number;
    cell_input.size = "1";
    cell_form.appendChild (cell_input);
    cell.appendChild (cell_form);
    cell.style.cssText = style;
}


function addoutputcell (func_name, row, row_number, span_num = "1", border) {
    var cell = row.insertCell ();
    cell.rowSpan = span_num;
    var cell_div = document.createElement ("div");
    cell_div.className = "outputValues " + func_name + " " + row_number;
    cell.appendChild (cell_div);
    cell.style.cssText = border;
}


function adrow(func_name, row_number) {
    var table = document.getElementById (func_name);
    var row_num = Number(row_number);
    if (func_name == "acceleration") {
        
        var row = table.insertRow (-1);
        row.className = "row acceleration " + row_num;

        addinputcell ("acceleration", row, row_num);
        addinputcell ("acceleration", row, row_num);
        addinputcell ("acceleration", row, row_num);
        addoutputcell ("acceleration", row, row_num);
        addinputcell ("acceleration", row, row_num);
        addinputcell ("acceleration", row, row_num);
        addoutputcell ("acceleration", row, row_num);
        addoutputcell ("acceleration", row, row_num);
        sendData ("acceleration", row_num);
        set_command ("acceleration", row_num);
    } else if (func_name == "isobaric") {

        var row = table.insertRow (-1);
        row.className = "row isobaric " + row_num;

        addinputcell ("isobaric", row, row_num);
        addinputcell ("isobaric", row, row_num);
        addoutputcell ("isobaric", row, row_num);
        addinputcell ("isobaric", row, row_num);
        addoutputcell ("isobaric", row, row_num);
        addoutputcell ("isobaric", row, row_num);
        addinputcell ("isobaric", row, row_num);
        addoutputcell ("isobaric", row, row_num);
        addoutputcell ("isobaric", row, row_num);

        sendData ("isobaric", row_num);
        set_command ("isobaric", row_num);
    } else if (func_name == "friction") {
        
        var table_insert = document.createElement("table");
        table_insert.className = "row friction " + row_num;
        document.getElementById("friction_div").appendChild(table_insert);
        
        var row_1 = table_insert.insertRow (-1);
        addinputcell ("friction", row_1, row_num, "3");
        addinputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addinputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addoutputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addoutputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addoutputcell ("friction", row_1, row_num, "3");
        addoutputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addoutputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addoutputcell ("friction", row_1, row_num, '3');
        
        var row_2 = table_insert.insertRow (-1);
        addinputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0; border-left: 3px solid");
        addinputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addoutputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addoutputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addoutputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0;");
        addoutputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0; border-right: 3px solid");
        
        var row_3 = table_insert.insertRow (-1);
        addinputcell ("friction", row_3, row_num, "1", "border-radius: 0; border-left: 3px solid");
        addinputcell ("friction", row_3, row_num);
        addoutputcell ("friction", row_3, row_num);
        addoutputcell ("friction", row_3, row_num);
        addoutputcell ("friction", row_3, row_num);
        addoutputcell ("friction", row_3, row_num, "1", "border-radius: 0; border-right: 3px solid");

        sendData ("friction", row_num);
        set_command ("friction", row_num);
    } else if (func_name == "amorphic") {

        var row = table.insertRow (-1);
        row.className = "row amorphic " + row_num;

        var className = "inputValues " + func_name + " " + row_num;
        var elements = document.getElementsByClassName(className);
        row.addEventListener('click', function () {
            var elementsValues = new Array();
                for (let i = 0; i < elements.length; ++i) {
                    elementsValues.push (Number(elements[i].value));
                };
            var chart = document.getElementById("curve_chart").hidden = false;
            drawChart(elementsValues)});

        var cell = row.insertCell ();
        cell.innerHTML = "t, &#176;C";

        addinputcell ("amorphic", row, row_num);
        addinputcell ("amorphic", row, row_num);
        addinputcell ("amorphic", row, row_num);
        addinputcell ("amorphic", row, row_num);
        addinputcell ("amorphic", row, row_num);
        addinputcell ("amorphic", row, row_num);
        addinputcell ("amorphic", row, row_num);
        addinputcell ("amorphic", row, row_num);

        setGraphCommand ("amorphic", row_num);
    };
    add_menu();
};


//adds command to button with inputted name
function addrow (func_name) {
    var id = "button_" + func_name;
    document.getElementById (id).onclick = function () {
        var table = document.getElementById (func_name);
        if (func_name == "acceleration") {
            acceleration_rows_count += 1;
            var row_num = acceleration_rows_count;
            
            var row = table.insertRow (-1);
            row.className = "row acceleration " + row_num;

            addinputcell ("acceleration", row, row_num);
            addinputcell ("acceleration", row, row_num);
            addinputcell ("acceleration", row, row_num);
            addoutputcell ("acceleration", row, row_num);
            addinputcell ("acceleration", row, row_num);
            addinputcell ("acceleration", row, row_num);
            addoutputcell ("acceleration", row, row_num);
            addoutputcell ("acceleration", row, row_num);

            sendData ("acceleration", row_num);
            set_command ("acceleration", row_num);
        } else if (func_name == "isobaric") {
            isobaric_rows_count += 1;
            var row_num = isobaric_rows_count;

            var row = table.insertRow (-1);
            row.className = "row isobaric " + row_num;

            addinputcell ("isobaric", row, row_num);
            addinputcell ("isobaric", row, row_num);
            addoutputcell ("isobaric", row, row_num);
            addinputcell ("isobaric", row, row_num);
            addoutputcell ("isobaric", row, row_num);
            addoutputcell ("isobaric", row, row_num);
            addinputcell ("isobaric", row, row_num);
            addoutputcell ("isobaric", row, row_num);
            addoutputcell ("isobaric", row, row_num);

            sendData ("isobaric", row_num);
            set_command ("isobaric", row_num);
        } else if (func_name == "friction") {
            friction_rows_count += 1;
            var row_num = friction_rows_count;

            var table_insert = document.createElement("table");
            table_insert.className = "row friction " + row_num;
            document.getElementById("friction_div").appendChild(table_insert);

            var row_1 = table_insert.insertRow (-1);
            addinputcell ("friction", row_1, row_num, "3");
            addinputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addinputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addoutputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addoutputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addoutputcell ("friction", row_1, row_num, "3");
            addoutputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addoutputcell ("friction", row_1, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addoutputcell ("friction", row_1, row_num, '3');
            
            var row_2 = table_insert.insertRow (-1);
            addinputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0; border-left: 3px solid");
            addinputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addoutputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addoutputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addoutputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0;");
            addoutputcell ("friction", row_2, row_num, "1", "border-bottom: 0px; border-radius: 0; border-right: 3px solid");
            
            var row_3 = table_insert.insertRow (-1);
            addinputcell ("friction", row_3, row_num, "1", "border-radius: 0; border-left: 3px solid");
            addinputcell ("friction", row_3, row_num);
            addoutputcell ("friction", row_3, row_num);
            addoutputcell ("friction", row_3, row_num);
            addoutputcell ("friction", row_3, row_num);
            addoutputcell ("friction", row_3, row_num, "1", "border-radius: 0; border-right: 3px solid");

            sendData ("friction", row_num);
            set_command ("friction", row_num);
        } else if (func_name == "amorphic") {
            amorphic_rows_count += 1;
            var row_num = amorphic_rows_count;

            var row = table.insertRow (-1);
            row.className = "row amorphic " + row_num;
            
            var className = "inputValues " + func_name + " " + row_num;
            var elements = document.getElementsByClassName(className);
            row.addEventListener('click', function () {
            var elementsValues = new Array();
            for (let i = 0; i < elements.length; ++i) {
                elementsValues.push (Number(elements[i].value));
            };
            var chart = document.getElementById("curve_chart").hidden = false;
            drawChart(elementsValues)});

            var cell = row.insertCell ();
            cell.innerHTML = "t, &#176;C";

            addinputcell ("amorphic", row, row_num);
            addinputcell ("amorphic", row, row_num);
            addinputcell ("amorphic", row, row_num);
            addinputcell ("amorphic", row, row_num);
            addinputcell ("amorphic", row, row_num);
            addinputcell ("amorphic", row, row_num);
            addinputcell ("amorphic", row, row_num);
            addinputcell ("amorphic", row, row_num);

            setGraphCommand ("amorphic", row_num);
        };
        add_menu();
    };
};


addrow ("acceleration");
addrow ("isobaric");
addrow ("friction");
addrow ("amorphic");


function set_command (func_name, row_num) {
    var class_name = "inputValues " + func_name + " " + row_num;
    var elements = document.getElementsByClassName(class_name);
    var countElements = elements.length;
    for (let i = 0; i < countElements; ++i) {
        elements[i].addEventListener('input', function () {
        sendData (func_name, row_num);})
    }
};


function setGraphCommand (func_name, row_num) {
    var className = "inputValues " + func_name + " " + row_num;
    var elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; ++i) {
        elements[i].addEventListener('input', function () {
        var elementsValues = new Array();

        for (let i = 0; i < elements.length; ++i) {
            elementsValues.push (Number(elements[i].value));
        };
        eel.send_to_json(func_name, String(row_num), elementsValues);
        drawChart(elementsValues)});
    }
}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function hide() {
    var chart = document.getElementById("curve_chart").hidden = true;
}


function show() {
    var chart = document.getElementById("curve_chart").hidden = false;
}


function resizeChart() {
    drawChart(elements);
}


if (document.addEventListener) {
    window.addEventListener('resize', resizeChart);
} else if (document.attachEvent) {
    window.attachEvent('onresize', resizeChart);
} else {
    window.resize = resizeChart;
}


$(function(){
    $(window).resize(function(){
        $('#menu').css({'height':($(document).height()) + 'px'});
    });
});


$('#menu').css({'height':($(document).height()) + 'px'});


function drawChart(elementsValues) {
    var data = google.visualization.arrayToDataTable([
    ['t', 'temp'],
    [0.5,  elementsValues[0]],
    [1,    elementsValues[1]],
    [1.5,  elementsValues[2]],
    [2,    elementsValues[3]],
    [2.5,  elementsValues[4]],
    [3,    elementsValues[5]],
    [3.5,  elementsValues[6]],
    [4,    elementsValues[7]]
    ]);

    var options = {
    title: 'Изобарный процесс',
    legend: { position: 'bottom' },
    'width': '74%',
    series: {
        0: {color: '#08d9d6'}
    }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
};