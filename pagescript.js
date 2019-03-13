//document.getElementById('submit').addEventListener('click', studentData);

var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function (event) {
    var data = new FormData(form);
    var output = {};
    for (const entry of data) {
        output[entry[0]] = entry[1]
    };
    
    Object.keys(output).forEach(key => {
        if (!output[key]) {
            delete output[key];
        }
    });

    
    console.log(output)
    // console.log(output.EE_core3)
    
    // let math_term=output.math_term

    var doc=new jsPDF();
    // doc.text(10, 10, JSON.stringify(output.math_term));
    //var test = JSON.stringify(output.math);
    //test.replace(/['"]+/g, '')
    // doc.text(10, 10, output.EE_core3);
    doc.text(30, 10, output.EE_core4);
    if(output.EE_core5)
    doc.text(50, 10, output.EE_core5);
    doc.text(60, 10, output.EE_core6);
    doc.save('test.pdf');

    event.preventDefault();
}, false);
