"""Challenge level #1.
   Returns a task in form {"task": "a +/- b = ?", "result": "x"}
"""
import random

a = random.randint(0, 9)
b = random.randint(-5, 5)


if b < 0 :
    sign = '-'
else :
    sign = '+'

x = a+b

answer = int(input(" {} {} {} = ?\n".format(a,sign,abs(b))))

if answer == x :
    print("Well Done")
else :
    print("Answer not correct")
