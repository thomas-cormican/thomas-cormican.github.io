let darkmode = localStorage.getItem("darkmode")

function checkDarkmode(){
  if(darkmode === "on"){
    $("#theme").attr("href", "/css/master.css")
  } else if(darkmode === "off"){
    $("#theme").attr("href", "/css/master2.css")
  } else {
    localStorage.setItem("darkmode", "on")
    $("#theme").attr("href", "/css/master.css")
  }
}

checkDarkmode();
