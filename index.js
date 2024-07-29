const settingsdiv = document.querySelector(".setting");
const btn4 = document.getElementById("4");
const btn6 = document.getElementById("6");
const startbtn = document.querySelector(".startbtn");
const maingrid = document.querySelector(".maingrid");
var gridcount = 0
const Colors = [
    "#FF6961",
    "#AEC6CF",
    "#77DD77",
    "#FDFD96",
    "#FFB347",
    "#CBAACB",
    "#FFD1DC",
    "#CFCFC4",
    "#A9A9A9",
    "#F8F8FF",
    "#D3D3D3",
    "#A7E9AF",
    "#FF9AA2",
    "#B2FBA5",
    "#C4AEAD",
    "#778899",
    "#C4DFAA",
    "#99C5C4"
  ];
  const colorpalette = [...Colors, ...Colors]

function choosegrid(value){
    gridcount = value;
    console.log(gridcount);
    return gridcount;
    
}
function startgame(){
    const gridcontainer = document.querySelector(".gridcontainer");
    const settingsdiv = document.querySelector(".setting");

    if(gridcount == 0){
        console.log("no value");
        alert("Choose the number of Grid")
    }else{
        console.log(gridcount);
        gridcontainer.style.display ="block";
        settingsdiv.style.display ="none";
        console.log(colorpalette);

        const tile = document.createElement("div");
        tile.className = tile;
        gridcontainer.appendChild(tile)

    }
}