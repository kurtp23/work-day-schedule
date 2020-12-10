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

// saves text in a form in a variable
$.fn.saveForm = function (formEL, blockKey) {
  $(".save").on("click", function () {
    var formText = $(formEL).val();

    console.log(formText);

    storageBlocks[blockKey] = formText;
    var blockText = storageBlocks[blockKey];
    console.log(blockText);

    localStorage.setItem("timeBlocks", JSON.stringify(storageBlocks));
  });
};
$.each(storageBlocks, function (key, value) {
  console.log(key, value);

  $("#" + key + "t").val(value);
});

// runs save form for each button
$("#nine").on("click", $.fn.saveForm("#9t", 9));
$("#ten").on("click", $.fn.saveForm("#10t", 10));
$("#eleven").on("click", $.fn.saveForm("#11t", 11));
$("#twelve").on("click", $.fn.saveForm("#12t", 12));
$("#thirteen").on("click", $.fn.saveForm("#13t", 13));
$("#fourteen").on("click", $.fn.saveForm("#14t", 14));
$("#fifteen").on("click", $.fn.saveForm("#15t", 15));
$("#sixteen").on("click", $.fn.saveForm("#16t", 16));
$("#seventeen").on("click", $.fn.saveForm("#17t", 17));

const time = moment();
const date = time.format("dddd MMMM Mo YYYY");
const hour = parseInt(time.format("H"));

$("#currentDay").text(date);
// check time compared to timeblock
function changeColor() {
  $.each(storageBlocks, function (key) {
    const blockHour = parseInt(key);
    console.log(key);

    if (hour > blockHour) {
      $("#" + blockHour).css("background-color", "red");
    } else if (hour === blockHour) {
      $("#" + blockHour).css("background-color", "LightGreen");
    } else if (hour < blockHour) {
      $("#" + blockHour).css("background-color", "lightBlue");
      console.log(typeof hour, typeof blockHour);
    }
  });
}

changeColor();
// reset button localstorage.clear()
// textarea.clear when reset is pushed
