print("-----------------------Menu-----------------------")
print("1.Factorial")
print("2.Palindrome")
print("3.Fibonacci")
print("4.Table of a given number")
number = input("Input a number: ")
option = input("Select an option: ")

number = int(number)
option = int(option)

def calculateFactorial(number):
    factorial = 1
    # check if the number is negative, positive or zero
    if number < 0: print("Sorry, factorial does not exist for negative numbers")
    elif number == 0: print("The factorial of 0 is 1")
    else: 
        for i in range(1,number + 1): factorial = factorial*i

    print("The factorial of",number,"is",factorial)


def calculatePalindrome(number):
    temp = number
    reverse = 0
    while(number > 0):
        remainder = number % 10
        reverse = reverse * 10 + remainder
        number = number // 10

    if(temp == reverse):
        print("This value is a palindrome number!")  
    else:  
        print("This value is not a palindrome number!")  


def calculateFibonacci(number):
    a = 0
    b = 1
    # Check is n is less
    # than 0
    if number < 0:
        print("Incorrect input")
    # Check is n is equal
    # to 0
    elif number == 0:
        return 0

    # Check if n is equal to 1
    elif number == 1:
        return b
    else:
        for i in range(1, number):
            c = a + b
            a = b
            b = c
        return b

def calculateTable(number):
    for i in range(1,11):
        print(i * number)


if(option == 1) : calculateFactorial(number)
elif(option == 2) : calculatePalindrome(number)
elif(option == 3) : print(calculateFibonacci(number))
elif(option == 4) : calculateTable(number)
else :  print("Invalid Option")











