function setup(){
  createCanvas(850,600);
  input=createInput().attribute("placeholder", "Enter your name ")
  input.position(350,250)
  bP=createButton("SUBMIT")
  bP.position(400,280)
  bP.mousePressed(logic)
  
  }

  function preload(){

   bg=loadImage("bgg.png")

  }


  function draw(){
  background(bg);
  
    
  }
  function logic(){
  input.hide()
  bP.hide()
  H=createElement("h1")
  H.html("Hello! "+input.value() )
  H.position(410,10)
  A=createElement("h1")
  A.html("Let's see if you can answer this")
  A.position(230,50)
  B=createElement("h1")
  B.html("Question1")
  B.position(400,100)
  C=createElement("h2")
  C.html("Q1) Who is the president of Zimbave")
  C.position(50,200)
  D=createElement("h2")
  D.html("a) Joe Biden")
  D.position(50,250)
  E=createElement("h2")
  E.html("b) Denis Sassou Nguesso")
  E.position(50,300)
  G=createElement("h2")
  G.html("c) Emmerson Mnangagwa")
  G.position(50,350)
  I=createElement("h2")
  I.html("d) Miloš Zeman")
  I.position(50,400)
  output=createInput().attribute("placeholder", "Enter the correct option")
  output.position(50,550)   
  bp=createButton("SUBMIT")
  bp.position(600,550)
  bp.mousePressed(logic2)
  }
  function logic2(){
  H.hide()
  A.hide()
  B.hide()
  C.hide()
  D.hide()
  E.hide()
  G.hide()
  I.hide()
  bp.hide()
  output.hide()
  W=createElement("h1")
  W.html("YOUR ANSWER")
  W.position(100,100)
  Q=createElement("h2")
  Q.html("Q1) "+output.value())
  Q.position(100,150)
  S=createElement("h1")
  S.html("CORRECT ANSWER")
  S.position(100,300)
  E=createElement("h2")
  E.html("Q1) c")
  E.position(100,350)
  next=createButton("Next")
  next.position(650,450)
  next.mousePressed(logic3)
  }
  
  function logic3(){
  H.hide()
  A.hide()
  B.hide()
  C.hide()
  D.hide()
  E.hide()
  G.hide()
  I.hide()
  bp.hide()
  output.hide()
  W.hide()
  Q.hide()
  S.hide()
  E.hide()
  D.hide()
  next.hide()
  H=createElement("h1")
  H.html("Hello! "+input.value() )
  H.position(410,10)
  A=createElement("h1")
  A.html("Let's see if you can answer this")
  A.position(230,50)
  B=createElement("h1")
  B.html("Question2")
  B.position(400,100)
  C=createElement("h2")
  C.html("Q2) Who is the president of India")
  C.position(50,200)
  D=createElement("h2")
  D.html("a) Ram Nath Kovind")
  D.position(50,250)
  E=createElement("h2")
  E.html("b) Narendra Modi")
  E.position(50,300)
  G=createElement("h2")
  G.html("c) Rajnath Singh")
  G.position(50,350)
  I=createElement("h2")
  I.html("d) Pranab Mukherjee")
  I.position(50,400)
  output=createInput().attribute("placeholder", "Enter the correct option")
  output.position(50,550)   
  bp=createButton("SUBMIT")
  bp.position(600,550)
  bp.mousePressed(logic4)
  }
  
  function logic4(){
      H.hide()
      A.hide()
      B.hide()
      C.hide()
      D.hide()
      E.hide()
      G.hide()
      I.hide()
      bp.hide()
      output.hide()
      W=createElement("h1")
      W.html("YOUR ANSWER")
      W.position(100,100)
      Q=createElement("h2")
      Q.html("Q2) "+output.value())
      Q.position(100,150)
      S=createElement("h1")
      S.html("CORRECT ANSWER")
      S.position(100,300)
      E=createElement("h2")
      E.html("Q2) a")
      E.position(100,350)
      D=createElement("h1")
      D.html("THANK YOU FOR ATTENDING MY QUIZ")
      D.position(50,500)
      }
  
  
  