
$(function() {$("#tripInfo").submit(
  function addTrips(event) {
    console.log("Hi");
    event.preventDefault();
    oForm = document.forms[0];
    oText1 = oForm.elements["toLocal"].value;
    oText2 = oForm.elements["fromLocal"].value;
    oText3 = oForm.elements["earlyTime"].value;
    oText4 = oForm.elements["lateTime"].value;
    oText5 = oForm.elements["date"].value;
    var newElement = `<div class = "trip">
      <span class = "trip-part">${oText1}</span>
      <span class = "trip-part">${oText2}</span>
      <span class = "trip-part">${oText3 + " - " + oText4}</span>
      <span class = "trip-part">${oText5}</span>
    </div>`;
    console.log(newElement);
    $("#trips-container").append(newElement);
    var elements = document.getElementsByTagName("input");
    for (var i=0; i < elements.length; i++) {
      if (elements[i].type == "text") {
        elements[i].value = "";
  }
}
  })});
