// diplayDay || timeBlocks || enterEvent || saveEvent ||

// dipslayDay/time
// displays what day it is

// timeBlocks
// check to see if time block is past present or current
// color blocks based off past present or future

// enterEvent
const timeBlocks = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
};
if (localStorage.getItem("timeBlocks") === null) {
  localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
}
const storageBlocks = JSON.parse(localStorage.getItem("timeBlocks"));
console.log(storageBlocks);

// allows for an event to be entered in a time block
// saveEvent
// $(".save").on("click", function () {
//   var test = $("#test").val();
//   $(storageBlocks[9]) === test;
//   console.log(test);
//   // console.log(test);
//   storageBlocks[9] = test;
//   var nineAm = storageBlocks[9];
//   console.log(nineAm);

// });
// $(storageBlocks).each(function (x) {});
$.fn.saveForm = function (formEL, blockKey, finalText) {
  $(".save").on("click", function () {
    var formText = $(formEL).val();

    console.log(formText);
    // console.log(test);
    storageBlocks[blockKey] = formText;
    var blockText = storageBlocks[blockKey];
    console.log(blockText);

    // var textForm = $(this).
    localStorage.setItem("block", JSON.stringify(blockText));
  });
  $(formEL).text(localStorage.getItem("block"));
};

$("nine").on("click", $.fn.saveForm("#9am", 9));
$("#ten").on("click", $.fn.saveForm("#10am", 10));
$("#eleven").on("click", $.fn.saveForm("#11am", 11));
$("#twelve").on("click", $.fn.saveForm("#12pm", 12));
$("#thirteen").on("click", $.fn.saveForm("#1pm", 13));
$("#fourteen").on("click", $.fn.saveForm("#2pm", 14));
$("#fifteen").on("click", $.fn.saveForm("#3pm", 15));
$("#sixteen").on("click", $.fn.saveForm("#4pm", 16));
$("#seventeen").on("click", $.fn.saveForm("#5pm", 17));

$("#9am").val(storageBlocks[9]);
$("#10am").val(storageBlocks[10]);
// allows for entered event to be saved and stored
// shows event even if page refreshed
// use JavaScript Date to display current date in a div (#displayJsDate)

// console.log(moment());
// var testDate = "";
// moment(testDate).format("MM/DD/YYYY");
// console.log(testDate);

const time = moment();
const date = time.format("dddd MMMM Mo YYYY");

$("#currentDay").text(date);
