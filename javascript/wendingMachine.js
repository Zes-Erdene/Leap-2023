let baraa = window.prompt(
  "Baraagaa songono uu:\n 1. Cola 1200 \n2. Sprite 1500 \n3. Alpen gold 2000 \n4. Suu 2200\n5. Talh 1000 \n6. Zairmag 500 \n7. Bohi 150 \n8. Arhi 15000"
);
switch (baraa) {
  case "1":
    baraa = "Cola 1200";
    break;
  case "2":
    baraa = "Sprite 1500";
    break;
  case "3":
    baraa = "Alpengold + 2000";
    break;
  case "4":
    baraa = "Svv 2200";
    break;
  case "5":
    baraa = "Talh 1000";
    break;
  case "6":
    baraa = "Zairmag 500";
    break;
  case "7":
    baraa = "Bohi 150";
    break;
  case "8":
    baraa = "Arhi 15000";
    break;
  default:
    window.alert("Baihgvi baraa");
}

let devsgert = window.prompt("Mongoo hiine uu:\n 5000 \n 10000\n 20000");
switch (devsgert) {
  case "5000":
    devsgert = "5000";
    break;
  case "10000":
    devsgert = "10000";
    break;
  case "20000":
    devsgert = "20000";
    break;
  default:
    window.alert("Baihgvi devsgert");
}
