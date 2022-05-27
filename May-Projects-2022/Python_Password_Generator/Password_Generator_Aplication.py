# print("---------------------------Password Generator---------------------------")
# login = False
# passwordEncodedDict = {}
# username = input("Enter Username ")
# password = input("Enter Password ")

# if(username != "xyz@gmail.com" and password != "1234"):
#     print("Wrong Username or Password")
#     login = True
# else:

login=True
passwordEncodedDict = {}

while login:
    print("1. Enter Password")
    print("2. View Password")
    print("3. Delete Password")
    print("4. Logout")
    print("       ")

    optionSelected = input("Select an option ")
    optionSelected = int(optionSelected)

    if(optionSelected == 1):
        newApplicationName = input("Enter application name")
        newPassword = input("Enter Password")
        passwordEncoded = newPassword+'2'
        passwordEncodedDict[newApplicationName] = passwordEncoded
    
    elif(optionSelected == 2):
        length = len(passwordEncodedDict)
        if(length == 0):
            print("Please enter a password first")
            print(" ")
        else:
            for key in passwordEncodedDict:
                string = passwordEncodedDict[key]
                #remove character
                passwordDecoded = string[:-1]
                print(key + " " + passwordDecoded)
    
    elif(optionSelected == 3):
        keyInDictionary = input("Enter application name which needs to be deleted")
        if(keyInDictionary in passwordEncodedDict):
            passwordDecoded = ""
            for key in passwordEncodedDict:
                string = passwordEncodedDict[key]
                #remove character
                passwordDecoded = string[:-1]
            deletedPass = passwordEncodedDict.pop(keyInDictionary)
            print("Password for " + keyInDictionary + ":" + passwordDecoded + " is deleted")
        else: print("Invalid Application Name")
    
    elif(optionSelected == 4):
        login = False
        print("Logged Out")
    else:
        print("Invalid option")


