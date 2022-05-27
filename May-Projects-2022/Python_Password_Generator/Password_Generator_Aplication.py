print("---------------------------Password Generator---------------------------")
#Maintain a variable login to check whether user is logged in or not 
login = False
#Maintain a dictionary to store values of application names and password entered by user
passwordEncodedDict = {}
username = input("Enter Username ")
password = input("Enter Password ")
print("")

#Check if user is valid or not
if(username != "xyz@gmail.com" or password != "1234"):
    print("Wrong Username or Password")
else:
    #Make login true if username and password is valid 
    login = True
    #Apply while loop until login is true. 
    #This funtionality is used to show the options again and again to user until he/she logs out by option 4
    while login:
        print("1. Enter Password")
        print("2. View Password")
        print("3. Delete Password")
        print("4. Logout")
        print("       ")

        optionSelected = input("Select an option ")
        optionSelected = int(optionSelected)

        #option 1 is selected
        if(optionSelected == 1):
            newApplicationName = input("Enter application name ")
            newPassword = input("Enter Password ")
            print("")
            #Encode password by adding any string to the end of it
            passwordEncoded = newPassword+'2'
            #Put password in dictionary mapping application name to password entered 
            passwordEncodedDict[newApplicationName] = passwordEncoded

        #option 2 is selected
        elif(optionSelected == 2):
            #check if dictionary length is 0 then there is nothing to show to user
            length = len(passwordEncodedDict)
            if(length == 0):
                print("Please enter a password first")
                print(" ")
            else:
                for key in passwordEncodedDict:
                    #extract password using key value from dictionary
                    string = passwordEncodedDict[key]
                    #remove character from last of the password string
                    passwordDecoded = string[:-1]
                    print("Application name is " + key + " and password is " + passwordDecoded)
                    print("")

            #option 3 is selected
        elif(optionSelected == 3):
            keyInDictionary = input("Enter application name which needs to be deleted ")
            #search for application name in python dictionary
            if(keyInDictionary in passwordEncodedDict):
                #Maintain a password decoded variable which will store original password value by decoding it removing 2 from last of the string
                passwordDecoded = ""
                #Apply for loop for searching
                for key in passwordEncodedDict:
                    if(key == keyInDictionary):
                        string = passwordEncodedDict[key]
                        #remove character
                        passwordDecoded = string[:-1]
                #pop out password from dictionary
                deletedPass = passwordEncodedDict.pop(keyInDictionary)
                print("Password for " + keyInDictionary + ":" + passwordDecoded + " is deleted")
                print("")
            else:
                print("Invalid Application Name")
                print("")

        elif(optionSelected == 4):
            login = False
            print("Logged Out")
        else:
            print("Invalid option")


