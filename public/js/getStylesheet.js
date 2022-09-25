function getStylesheet() {
    const currentTime = new Date().getHours();
    if (currentTime > 18 || currentTime < 6) {
        document.write("<link rel='stylesheet' href='/css/night.css' type='text/css'>");
    }
    else{
        document.write("<link rel='stylesheet' href='/css/day.css' type='text/css'>");
    }
}
getStylesheet();