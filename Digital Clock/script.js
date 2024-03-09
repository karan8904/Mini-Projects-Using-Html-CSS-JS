const time = () => {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDay();
    switch (d) {
        case 1:
            d = "Mon";
            break;
        case 2:
            d = "Tue";
            break;
        case 3:
            d = "Wed";
            break;
        case 4:
            d = "Thu";
            break;
        case 5:
            d = "Fri";
            break;
        case 6:
            d = "Sat";
            break;
        case 7:
            d = "Sun";
            break;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    day.innerHTML = d + "<br>";
    hour.innerHTML = h + "<br>";
    minute.innerHTML = m + "<br>";
    seconds.innerHTML = s + "<br>";
}
setInterval(time, 1000);