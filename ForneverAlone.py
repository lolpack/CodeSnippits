from Tkinter import *
import ttk
import MySQLdb as mdb
import sys

#SQL
"""Dont forget to enter your information
con = mdb.connect('host', 'user', 'password', 'database');"""
tableName = 'Contact_List'

def getContacts():
    isTable()
    with con:
        cur = con.cursor()
        cur.execute("SELECT * FROM {}".format(tableName))
        contacts = []
        Contacts = cur.fetchall()
        for i in Contacts:
            contacts.append(i)
        return contacts

def isTable():
    with con:
        cur = con.cursor()
        cur.execute("SHOW TABLES")
        Tables = cur.fetchall()
        print Tables
        if tableName not in Tables:
            makeTable()

def makeTable():
    with con:
        cur = con.cursor()
        cur.execute("CREATE TABLE IF NOT EXISTS \
            {}(Id INT PRIMARY KEY AUTO_INCREMENT, First VARCHAR(25), Last VARCHAR(25), Phone VARCHAR(15), Email VARCHAR(50), Other VARCHAR(25))".format(tableName))
        
def save():

    with con:
        cur = con.cursor()
        cur.execute("INSERT INTO {}(First,Last,Phone,Email,Other) \
            VALUES ('{}','{}','{}','{}','{}');".format(tableName, Firstent.get(),Lastent.get(),PhoneEnt.get(),Emailent.get(),Otherent.get()))
    refreshList()

    
def search(*args):
    with con:
        pass

def quit_():
    quit()

    
    

def drawGui():
    #GUI

    root = Tk()

    #Labels

    mainframe = ttk.Frame(root, relief = "ridge", padding= "5 5 5 5")
    root.title("Fornever Alone")
    mainframe.grid(column=0, row=0, sticky=(N,W,E,S)) 
    mainframe.columnconfigure(0, weight=1)
    mainframe.rowconfigure(0, weight=1)

    Title = ttk.Label(mainframe, text="Keep track of all your friends",font = ("Heveltica", 24))
    Title.grid(row=0,column=0,columnspan=3)

    CurFriends = ttk.Label(mainframe, text="Current friends:", font = ("Heveltica, 18"))
    CurFriends.grid(row=1, column=0, columnspan=3)

    Listcontacts = Listbox(mainframe)
    Listcontacts.grid(row=3, column=0, columnspan=3)

    contacts = getContacts()
    if contacts == []:
        contacts.append('None, sad :(')
    for item in contacts:
        Listcontacts.insert(END, item)


    AddFriends = ttk.Label(mainframe, text="Add Friends:", font=("Helvetica", 18))
    AddFriends.grid(row=4, column=0, columnspan=3)

    Firstlab = ttk.Label(mainframe, text="First Name:")
    Firstlab.grid(row=5,column=0)

    Lastlab = ttk.Label(mainframe, text="Last Name:")
    Lastlab.grid(row=6, column=0)

    Phonelab = ttk.Label(mainframe, text="Phone Number:")
    Phonelab.grid(row=7, column=0)

    EmailLab = ttk.Label(mainframe, text="Email:")
    EmailLab.grid(row=8, column=0)

    Otherlab = ttk.Label(mainframe, text="Other (Spirit Animal):")
    Otherlab.grid(row=9, column=0)


    


    #Entry Boxes

    Firstent = ttk.Entry(mainframe, width = 15)
    Firstent.grid(row=5, column = 1)

    Lastent = ttk.Entry(mainframe, width = 15)
    Lastent.grid(row=6, column = 1)

    PhoneEnt = ttk.Entry(mainframe, width = 15)
    PhoneEnt.grid(row=7, column = 1)

    Emailent = ttk.Entry(mainframe, width = 15)
    Emailent.grid(row=8, column = 1)

    Otherent = ttk.Entry(mainframe, width = 15)
    Otherent.grid(row=9, column = 1)

    #Buttons

    Save = ttk.Button(mainframe, text="Save", command = save)
    Save.grid(row=10, column = 0)

    Quit = ttk.Button(mainframe, text = "Quit", command = quit_)
    Quit.grid(row=10, column = 2)

    root.mainloop()

if __name__ == "__main__":
    drawGui()
