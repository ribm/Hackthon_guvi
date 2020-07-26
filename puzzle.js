
let unshuffled = ["1","2","3","4","5","6","7","8"," "]

var points = 0

var shuffled=[]
var start_postion= ""
var serial = ["1st1","1st2","1st3","1st4","1st5","1st6","1st7","1st8","1st9"]



function initial_process(){
    document.getElementById("start").disabled=true
    document.getElementById("reset").disabled=false
    for (let index = 0; index < serial.length; index++) {
        document.getElementById(serial[index]).disabled=false
        
    }
    
    
  shuffled = unshuffled
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)
     var k = document.getElementById("1st1")
     k.innerHTML=shuffled[0]
     if(shuffled[0]==" "){start_postion ="1st1" }
     var k = document.getElementById("1st2")
     k.innerHTML=shuffled[1]
     if(shuffled[1]==" "){start_postion ="1st2" }
     var k = document.getElementById("1st3")
     k.innerHTML=shuffled[2]
     if(shuffled[2]==" "){start_postion ="1st3" }
     var k = document.getElementById("1st4")
     k.innerHTML=shuffled[3]
     if(shuffled[3]==" "){ start_postion ="1st4" }
     var k = document.getElementById("1st5")
     k.innerHTML=shuffled[4]
     if(shuffled[4]==" "){ start_postion ="1st5" }
     var k = document.getElementById("1st6")
     k.innerHTML=shuffled[5]
     if(shuffled[5]==" "){start_postion ="1st6" }
     var k = document.getElementById("1st7")
     k.innerHTML=shuffled[6]
     if(shuffled[6]==" "){start_postion ="1st7" }
     var k = document.getElementById("1st8")
     k.innerHTML=shuffled[7]
     if(shuffled[7]==" "){start_postion ="1st8" }
     var k = document.getElementById("1st9")
     k.innerHTML=shuffled[8]
     if(shuffled[8]==" "){start_postion ="1st9"}
     var enabled_buttons1 = ret(start_postion)
    for (let index = 0; index < enabled_buttons1.length; index++) {
        document.getElementById(enabled_buttons1[index]).disabled=true
        
    }
     setTimeout(over,60000)
}


function touch(id){
    points+=1
    var k1 = document.getElementById(id)
    var to_exchange = k1.innerHTML
    var blank_index_befor_click = shuffled.indexOf(" ")
    console.log(blank_index_befor_click)
    var tab_postion_beforeclick = serial[blank_index_befor_click]
    var k2 = document.getElementById(tab_postion_beforeclick)
    k2.innerHTML=to_exchange
    k1.innerHTML=" "
    shuffled[shuffled.indexOf(to_exchange)]=" "
    shuffled[blank_index_befor_click]=to_exchange
    for (let index = 0; index < serial.length; index++) {
        document.getElementById(serial[index]).disabled=false
        
    }
    
    var enabled_buttons = ret(String(serial[shuffled.indexOf(" ")]))
    for (let index = 0; index < enabled_buttons.length; index++) {
        document.getElementById(enabled_buttons[index]).disabled=true
    }
    check_win(shuffled,a2)
  }
  function point(){
     var k = document.getElementById(points)
     k.innerText=points
  }



function ret(tiles){
    if(tiles=="1st1"){
        console.log("enabled")
        return ["1st1", "1st3","1st5", "1st7","1st6", "1st9","1st8"]
        
    }
    if(tiles=="1st2"){
        console.log("enabled")
        return ["1st2", "1st4","1st6","1st7", "1st9","1st4","1st8"]
        
    }
    if(tiles=="1st3"){
        console.log("enabled")
        return ["1st4", "1st1","1st3", "1st5","1st7", "1st8","1st9"]
        
    }
    if(tiles=="1st4"){
        console.log("enabled")
        return ["1st4", "1st6","1st2","1st3", "1st9","1st8"]
        
    }
    if(tiles=="1st5"){
        console.log("enabled")
        return ["1st1", "1st3","1st5","1st9","1st7", "1st9"]
        
    }
    if(tiles=="1st6"){
        console.log("enabled")
        return ["1st1", "1st2","1st4","1st6", "1st7","1st8"]
        
    }
    if(tiles=="1st7"){
        console.log("enabled")
        return ["1st1", "1st2","1st3", "1st5","1st6", "1st9"]
        
    }
    if(tiles=="1st8"){
        console.log("enabled")
        return ["1st1", "1st2", "1st3","1st4", "1st6"]
        
    }
    if(tiles=="1st9"){
        console.log("enabled")
        return ["1st1", "1st2","1st3", "1st4","1st5", "1st7"]
        
    }
    
}
var a2 = ["1","2","3","4","5","6","7","8"," "]
function check_win(a1,a2) {
      if (JSON.stringify(a1)==JSON.stringify(a2)) {
        alert("congratulations you won . score "+points)
        
    }
}

function over() {
    alert('Try again time over your point is '+ points );
  }



