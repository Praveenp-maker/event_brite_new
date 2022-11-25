
let Events = [];
updateIndex;
function get() {
    console.log("hiii");
    selectElement = document.querySelector('#utype');
    output = selectElement.value;
    console.log(output);
    if (output == 'viewer') {
        // showdetails();
        location.href = "viewer.html";
    }
    else {
        location.href = "insertdetails.html";
        //insertdetails();
    }
    // if(output=='viewer')
    // {
    //     $.ajax({
    //         url: "http://localhost:9090/servlet1",
    //         type: "GET",
    //         //dataType: "json",
    //         success: function (data) {
    //             console.log("success");
    //         },
    //         error: function (error) {
    //             console.log(`Error ${error}`);
    //         },
    //     });
    // }
    // else{
    // }
}
function showdetails() {
    console.log("enter into showdetails");

    $('#tb').DataTable({
        "ajax": {
            "url": "http://localhost:9090/servlet1",
            "dataSrc": ""
        },
        "columns": [
            { "data": "event_id" },
            { "data": "event_name" },
            { "data": "description" },
            { "data": "location" },
            { "data": "date" },
            { "data": "time" },
            { "data": "venue" },
            { "data": "concept" },
            { "data": "company" },
            { "data": "prize" },
            //   {"data":"",defaultContent:"<button onclick='edit()';>Book Here</button> "}

            { "data": "", "defaultContent": "<button onclick='edit(this.closest(`tr`).attr(`event_id`));'>Edit</button>" }


        ]

    }
    );

   


    // console.log(event_id);
    //         $.ajax({
    //         url: "http://localhost:9090/servlet1",
    //         type: "GET",
    //         dataType: "json",
    //         success: function (data) {
    //             console.log(data);
    //         Event=data;
    //    displayItems(data);
    //         },
    //         error: function (error) {
    //             console.log(`Error ${error}`);
    //         },
    //     });
}
function edit(data) {
    console.log("edit called");
    console.log(data);
    // jQuery('#library tr').click(function(e) {
    //     e.stopPropagation();
    //     var $this = jQuery(this);
    //     var trid = $this.closest('tr').attr('id');
    //     var x = 0, y = 0; // default values
    // x = window.screenX +5;
    // y = window.screenY +275;
    // console.log(trid);
    // window.open('../DataTables/editlibrary.php?id='+trid,'editlibrary','toolbar=0,scrollbars=1,height=600,width=800,resizable=1,left='+x+',screenX='+x+',top='+y+',screenY='+y);
    // });
}
function insertdetails() {

    // console.log(result);
    var newitem = {
        "event_id": document.getElementById("event_id").value,
        "event_name": document.getElementById("event_name").value,
        "description": document.getElementById("decs").value,
        "location": document.getElementById("location").value,
        "date": document.getElementById("date").value,
        "time": document.getElementById("time").value,
        "venue": document.getElementById("venue").value,
        "concept": document.getElementById("concept").value,
        "company": document.getElementById("company").value,
        "prize": document.getElementById("prize").value
    }
    console.log(newitem);
    $.ajax({
        type: "POST",
        url: "http://localhost:9090/servlet1",
        data: JSON.stringify(newitem),
        success: function (result) {
            //getAll();
            console.log("sucesss");
            //getnew();
        },
        error: function (result) {
            alert("msg");
        },
    });
}
function editItem(event_id) {
    sessionStorage.setItem("event_id", event_id);
    // document.getElementById("iid").style.display="none";
    //console.log(updateIndex);
    location.href = "order.html";
}
function getedit() {
    console.log(sessionStorage.getItem("event_id"));
    var newitem = {
        "event_id": sessionStorage.getItem("event_id")
    }
    $.ajax({
        type: "PUT",
        url: "http://localhost:9090/servlet1",
        data: JSON.stringify(newitem),
        success: function (data) {
            console.log("sucess");
            Events = data;
            console.log(data);
            data = JSON.parse(data);
            displayItem(data);
            //getAll();
            console.log("sucesss");
            //getnew();
        },
        error: function (data) {
            alert("msg");
        },
    });
}
// function displayItems(data){
//     //location.href="viewer.html";
//     console.log("inside the display function");
//     const tEvent = document.getElementById("tableid");
//  console.log(tEvent);
//  const button = document.createElement("button");
//   data.forEach((item) => {
//     let editButton = button.cloneNode(false);
//     editButton.innerText = "Book Here";
//     editButton.setAttribute("onclick", `editItem(${item.event_id})`);
//         console.log(item.event_id);
//         let tr = tEvent.insertRow();
//         let td1 = tr.insertCell(0);
//         let event_id = document.createTextNode(item.event_id);
//         td1.appendChild(event_id);
//         let td2 = tr.insertCell(1);
//         let event_name = document.createTextNode(item.event_name);
//         td2.appendChild(event_name);
//         let td3 = tr.insertCell(2);
//         let description = document.createTextNode(item.description);
//         td3.appendChild(description);
//         let td4 = tr.insertCell(3);
//         let location = document.createTextNode(item.location);
//         td4.appendChild(location);
//         let td5 = tr.insertCell(4);
//         let date = document.createTextNode(item.date);
//         td5.appendChild(date);
//         let td6 = tr.insertCell(5);
//         let time = document.createTextNode(item.time);
//         td6.appendChild(time);
//         let td7 = tr.insertCell(6);
//         let venue = document.createTextNode(item.venue);
//         td7.appendChild(venue);
//         let td8 = tr.insertCell(7);
//         let concept = document.createTextNode(item.concept);
//         td8.appendChild(concept);
//         let td9 = tr.insertCell(8);
//         let company = document.createTextNode(item.company);
//         td9.appendChild(company);
//         let td10 = tr.insertCell(9);
//         let prize = document.createTextNode(item.prize);
//         td10.appendChild(prize);
//         let td11= tr.insertCell(10);
//         td11.appendChild(editButton);
//     });
//     Event= data;
// }
// function getnew(){
//     showdetails();


// console.log("hai");
// $('#tableid').DataTable( {
//     "ajax": {
//         "url": "http://localhost:9090/servlet1",
//         "dataSrc": ""
//     },
//     "columns": [
//         { "data": "event_id" },
//         { "data": "event_name" },
//         { "data": "description" },
//         { "data": "location" },
//         { "data": "date" },
//         { "data": "time" },
//         { "data": "venue" },
//         { "data": "concept" },
//         { "data": "company" }
//     ]
// } );
//}
// function displayItem(data){
//     //location.href="viewer.html";
//     console.log("inside the display2 function");
//     const tEvents = document.getElementById("order");
// //  const button = document.createElement("button");
//   data.forEach((item) => {
//     // let editButton = button.cloneNode(false);
//     // editButton.innerText = "Book Here";
//     // editButton.setAttribute("onclick", `editItem(${item.event_id})`);
//         console.log(item.event_id);
//         let tr = tEvents.insertRow();
//         let td1 = tr.insertCell(0);
//         let event_id = document.createTextNode(item.event_id);
//         td1.appendChild(event_id);
//         let td2 = tr.insertCell(1);
//         let event_name = document.createTextNode(item.event_name);
//         td2.appendChild(event_name);
//         let td3 = tr.insertCell(2);
//         let description = document.createTextNode(item.description);
//         td3.appendChild(description);
//         let td4 = tr.insertCell(3);
//         let location = document.createTextNode(item.location);
//         td4.appendChild(location);
//         let td5 = tr.insertCell(4);
//         let date = document.createTextNode(item.date);
//         td5.appendChild(date);
//         let td6 = tr.insertCell(5);
//         let time = document.createTextNode(item.time);
//         td6.appendChild(time);
//         let td7 = tr.insertCell(6);
//         let venue = document.createTextNode(item.venue);
//         td7.appendChild(venue);
//         let td8 = tr.insertCell(7);
//         let concept = document.createTextNode(item.concept);
//         td8.appendChild(concept);
//         let td9 = tr.insertCell(8);
//         let company = document.createTextNode(item.company);
//         td9.appendChild(company);
//         let td10 = tr.insertCell(9);
//         let prize = document.createTextNode(item.prize);
//         td10.appendChild(prize);
//         // let td11= tr.insertCell(10);
//         // td11.appendChild(editButton);
//     });
//     Events= data;
// }
function getorder() {
    console.log("hai");
    displayItem(data);
}
function pay() {
    location.href = "payment.html";
}
function finish() {
    location.href = "finalpage.html";
}
function cl() {
    location.href = "index.jsp";
}


function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
var enameErr = eidErr= desErr=locErr=datErr=timErr=venErr=conErr=comErr=priErr=true;
function validateeid(){
    console.log("hello");
    var eid=document.getElementById("event_id").value;
    if(eid == "") {
        printError("eidErr", "Please enter event_id");
    } else {
        var regex ='^[0-9]$';
        if(regex.test(eid) === false) {
            printError("eidErr", "Please enter valid event_id");
        } else{
          
            eidErr = false;
            printError("eidErr", "");
          
        }
    }
}

function validateename(){
var ename=document.getElementById("event_name").value;
if(ename == "") {
    printError("enameErr", "Please enter  event name");
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(ename) === false) {
        printError("enameErr", "Please enter  valid event name");
    } else {
        printError("enameErr", "");
        enameErr = false;
    }
}

}

function validdes(){
    var des=document.getElementById("decs").value;
    if(des == "") {
        printError("desErr", "Please enter event description");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(des) === false) {
            printError("desErr", "Please enter valid event description");
        } else {
            printError("desErr", "");
            desErr = false;
        }
    }
}

function validloc(){
    
var loc=document.getElementById("location").value;
    if(loc == "") {
        printError("locErr", "Please enter event location");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(loc) === false) {
            printError("locErr", "Please enter valid event location");
        } else {
            printError("locErr", "");
            locErr = false;
        }
    }

}
function validdat(){
    var date=document.getElementById("date").value;
    if(date == "") {
        printError("datErr", "Please enter event date");
    } else {
        var regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
        if(regex.test(date) === false) {
            printError("datErr", "Please enter valid event date");
        } else{
            printError("datErr", "");
            datErr = false;
        }
    }
}

function validtim(){
    var time=document.getElementById("time").value;
    if(time == "") {
        printError("timErr", "Please enter event time");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("timErr", "Please enter valid event time");
        } else{
            printError("timErr", "");
            timErr = false;
        }
    }
}

function validven(){
    var venue=document.getElementById("venue").value;
    if(venue== "") {
        printError("venErr", "Please enter event venue");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(venue) === false) {
            printError("venErr", "Please enter valid event venue");
        } else {
            printError("venErr", "");
            venErr = false;
        }
    }
}

function validcon(){
    var concept=document.getElementById("concept").value;
    if(concept== "") {
        printError("conErr", "Please enter event concept");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(concept) === false) {
            printError("conErr", "Please enter valid event concept");
        } else {
            printError("conErr", "");
            conErr = false;
        }
    }

}
function validcom(){
    var company=document.getElementById("company").value;
    if(company== "") {
        printError("comErr", "Please enter company");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(company) === false) {
            printError("comErr", "Please enter  valid company");
        } else {
            printError("comErr", "");
            comErr = false;
        }
    }

}
function validpri(){
    var prize=document.getElementById("prize").value;
    if(prize== "") {
        printError("priErr", "Please enter prize");
    } else {
        var regex = /^[1-9]\d{9}$/;                
        if(regex.test(prize) === false) {
            printError("priErr", "Please enter valid prize");
        } else {
            printError("priErr", "");
            priErr = false;
        }
    }

}





    



