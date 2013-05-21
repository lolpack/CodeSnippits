from Tkinter import *
import ttk
import MySQLdb as mdb
import sys

"""Dont forget to enter your information
con = mdb.connect('host', 'user', 'password', 'database');"""

def save(*args):
    with con:
        cur = con.cursor()
        cur.execute("CREATE TABLE IF NOT EXISTS \
            Contacts(Id INT PRIMARY KEY AUTO_INCREMENT, First VARCHAR(25), Last VARCHAR(25), Phone VARCHAR(15), Email VARCHAR(50), Other VARCHAR(25))")
        cur.execute("INSERT INTO Contacts (First,Last,Phone,Email,Other) \
            VALUES ('{}','{}','{}','{}','{}');".format(Firstent.get(),Lastent.get(),PhoneEnt.get(),Emailent.get(),Otherent.get()))

def quit_():
    quit()

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

Firstlab = ttk.Label(mainframe, text="First Name:")
Firstlab.grid(row=1,column=0)

Lastlab = ttk.Label(mainframe, text="Last Name:")
Lastlab.grid(row=2, column=0)

Phonelab = ttk.Label(mainframe, text="Phone Number:")
Phonelab.grid(row=3, column=0)

EmailLab = ttk.Label(mainframe, text="Email:")
EmailLab.grid(row=4, column=0)

Otherlab = ttk.Label(mainframe, text="Other (Spirit Animal):")
Otherlab.grid(row=5, column=0)

#Entry Boxes

Firstent = ttk.Entry(mainframe, width = 15)
Firstent.grid(row=1, column = 1)

Lastent = ttk.Entry(mainframe, width = 15)
Lastent.grid(row=2, column = 1)

PhoneEnt = ttk.Entry(mainframe, width = 15)
PhoneEnt.grid(row=3, column = 1)

Emailent = ttk.Entry(mainframe, width = 15)
Emailent.grid(row=4, column = 1)

Otherent = ttk.Entry(mainframe, width = 15)
Otherent.grid(row=5, column = 1)

#Buttons

Save = ttk.Button(mainframe, text="Save", command = save)
Save.grid(row=6, column = 0)

Quit = ttk.Button(mainframe, text = "Quit", command = quit_)
Quit.grid(row=6, column = 2)

root.mainloop()
                  
