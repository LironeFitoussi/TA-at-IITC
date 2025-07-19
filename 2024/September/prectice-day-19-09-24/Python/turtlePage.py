from turtle import Turtle, Screen

# Set up the screen
screen = Screen()
screen.title("My First Python GUI App")
screen.bgcolor("white")

# In JavaScript, we call in object
# but in Python, we call it an dictionary

# # Create a turtle
t = Turtle()
t.shape("turtle")
t.color("green")

# # Move the turtle to the center of the screen
# t.penup()
# t.goto(0, 0)
# t.pendown()

# Keep the window open until it is closed by the user
screen.exitonclick()
