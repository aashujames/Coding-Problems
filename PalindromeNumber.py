num = input("Enter a number: ")
revnum=""
for x in num[::-1]:
    revnum+= x
if (num==revnum):
    print("It is a palindrome number")
else:
    print("Not a palindrome number")
