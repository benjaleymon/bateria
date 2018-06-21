// var audioElement = document.createElement('audio')
var n1= document.createElement("a1")
var n2= document.createElement("a2")
var n3= document.createElement("a3")
var n4= document.createElement("a4")


parche1.addEventListener ("click",function(){
    n1.setAttribute("src", "tambor1.mp3")
    document.getElementById("parche1").addEventListener("click",function(){
        a1.play()
    })
})
parche2.addEventListener ("click",function(){
    n2.setAttribute("src", "tambor2.mp3")
    document.getElementById("parche2").addEventListener("click",function(){
        a2.play()
    })
})
platillo.addEventListener ("click",function(){
    n3.setAttribute("src", "platillo.mp3")
    document.getElementById("platillo").addEventListener("click",function(){
        a3.play()
    })
})
bombo.addEventListener ("click",function(){
    n4.setAttribute("src", "bombo.mp3")
    document.getElementById("bombo").addEventListener("click",function(){
        a4.play()
    })
})

    
	