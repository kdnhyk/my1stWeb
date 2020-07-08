const textarea = document.getElementById('textarea');
const addB = document.getElementById('addB');
const table = document.getElementById('table');
//const del = document.getElementById('del').cloneNode(true);

var month = 7;

addB.addEventListener("click", addRow);


function addRow() {
  var contents = textarea.value;
  var contArray = contents.split(" ");

  if (contArray.length == 4) {
    var row = table.insertRow(table.length);
    //날짜
    var c0 = row.insertCell(0);
    c0.innerHTML = month+"/"+contArray[0];

    var c1 = row.insertCell(1);
    c1.innerHTML = numberWithCommas(contArray[1]);

    var c2 = row.insertCell(2);
    c2.innerHTML = contArray[2];

    var c3 = row.insertCell(3);
    c3.innerHTML = contArray[3];

    var c4 = row.insertCell(4);
    c4.innerHTML = '<input type="checkbox" name="checkbox" value="">';

    textarea.value = "";

  } else {
    //console.log("Error");
    alert("띄어쓰기 3개로 구분해주세요");
  }

}

function delRow() {
  table.deleteRow();
}

function sort() {

}

function pressEnter(){
        if(event.keyCode == 13){
            addRow();
        }
    }

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
