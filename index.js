const settingsdiv = document.querySelector(".setting");
const btn4 = document.getElementById("4");
const btn6 = document.getElementById("6");
const startbtn = document.querySelector(".startbtn");
const maingrid = document.querySelector(".maingrid");
var gridcount = 0
const Colors6 = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FFB533",
    "#33FFF5",
    "#A833FF",
    "#F5FF33",
    "#FF6F61",
    "#6B5B95",
    "#88B04B",
    "#F7CAC9",
    "#92A8D1",
    "#955251",
    "#B565A7",
    "#009B77",
    "#DD4124",
    "#45B8AC"
  
  ];
const colors4 = ["#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FFB533",
    "#33FFF5",
    "#A833FF",
    "#F5FF33"

]
  const colorpalette6 = [...Colors6, ...Colors6]
  const colorpalette4 = [...colors4, ...colors4]
  
  let awaitendOfMove = false;
  let activeTile = null;
  let revealecount=0;
  let movecount = 0;
  var movenumber = 0;
  var counts = 0

function choosegrid(value){
    gridcount = value;
    console.log(gridcount);
    return gridcount;
    
}
function buldtile(colors,count){
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-color",colors)
    element.setAttribute("revealed-data","false");
   

    element.addEventListener("click", () =>{
        if(element.getAttribute("revealed-data") != "true" && element!=activeTile){
        counts +=1;
        console.log(counts);
        
        if(counts % 2 === 0   ){
            // movenumber = Math.floor(counts/2)
            document.getElementById("moves").innerHTML = counts/2
        }
    }
        
        if(
            awaitendOfMove ||
            element == activeTile ||
        element.getAttribute("revealed-data") == "true"
            
        ){
            return
        }

        element.style.backgroundColor = colors
       
        if(!activeTile){
            activeTile = element
            return
        }
        const colordata = activeTile.getAttribute("data-color")
        
        if(colordata == colors){
            activeTile.setAttribute("revealed-data","true")
            element.setAttribute("revealed-data","true")
            revealecount +=2
            awaitendOfMove = false
            activeTile = null
            if(revealecount == count){
                alert("You won the game..! Refresh to re-start")
            }
            return
        }
        

        awaitendOfMove = true
        setTimeout(()=>{

            element.style.backgroundColor = null
            activeTile.style.backgroundColor = null
            activeTile = null
            awaitendOfMove = false
        },500)

       

    })

    return element
}
function startgame(){
    const gridcontainer = document.querySelector(".gridcontainer");
    const settingsdiv = document.querySelector(".setting");
    const maingrid = document.querySelector(".maingrid");
    maingrid.innerHTML="";
    maingrid.style.gridTemplateColumns = `repeat(${gridcount}, 100px)`;
    maingrid.style.gridTemplateRows = `repeat(${gridcount}, 100px)`;


    if(gridcount == 0){
        alert("Choose the number of Grid")
    }else if(gridcount == 4){
        // console.log(gridcount);
        // console.log(colorpalette4.length);
        gridcontainer.style.display ="block";
        settingsdiv.style.display ="none";
        const count = colorpalette4.length
        for(let i = 0;i< 16;i++){
            const randomIndex = Math.floor(Math.random()*colorpalette4.length);
            const colors = colorpalette4[randomIndex]
            colorpalette4.splice(randomIndex,1)
            const tile = buldtile(colors, count);
            maingrid.appendChild(tile);
        }

    }else{
            // console.log(gridcount);
            gridcontainer.style.display ="block";
            settingsdiv.style.display ="none";
            // console.log(colorpalette6);
            // console.log(colorpalette6.length);
            const count = colorpalette6.length
            for(let i = 0;i < 6*6;i++){
                const randomIndex = Math.floor(Math.random()*colorpalette6.length);
                const colors = colorpalette6[randomIndex]
                colorpalette6.splice(randomIndex,1)
                const tile = buldtile(colors, count);
                maingrid.appendChild(tile);
            }
        }
}