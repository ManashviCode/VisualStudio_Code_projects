import turtle

t=turtle.Turtle()
turtle.title("For girlfriend")

screen=turtle.Screen()
screen.bgcolor("black")

#Drawing heart
t.color("red")
t.fillcolor("red")
t.begin_fill()

t.left(140)
t.forward(180)
t.circle(-90,200)
t.setheading(60)
t.circle(-90,200)
t.forward(180)

t.end_fill()

#Writing text
t.up()
t.setpos(-65,150)
t.down()
t.color('lightgreen')
t.write("I Love You",font=("Verdana",20,bold))

t.ht()
turtle.mainloop()

        
