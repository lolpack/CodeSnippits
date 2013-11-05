from Tkinter import *
import ttk
import MySQLdb as mdb
import sys

class contacts:
    #SQL
    #Dont forget to enter your information
    def __init__(self):
        self.con = mdb.connect('host', 'user', 'password', 'database');
        self.tableName = 'Contact_List'
    
    def drawGui(self):
        #GUI

        root = Tk()

        #Labels

        self.mainframe = ttk.Frame(root, relief = "ridge", padding= "5 5 5 5")
        root.title("Fornever Alone")
        self.mainframe.grid(column=0, row=0, sticky=(N,W,E,S)) 
        self.mainframe.columnconfigure(0, weight=1)
        self.mainframe.rowconfigure(0, weight=1)

        Title = ttk.Label(self.mainframe, text="Keep track of all your friends",font = ("Heveltica", 24))
        Title.grid(row=0,column=0,columnspan=3)

        CurFriends = ttk.Label(self.mainframe, text="Current friends:", font = ("Heveltica, 18"))
        CurFriends.grid(row=1, column=0, columnspan=3)

        self.Listcontacts = Listbox(self.mainframe)
        self.Listcontacts.grid(row=3, column=0, columnspan=3)
        
        if self.isTable():
            contacts = self.getContacts()
        else:
            contacts = []
            self.makeTable()
        if not contacts:
            contacts.append('None, sad :(')
        for item in contacts:
            self.Listcontacts.insert(END, item)


        AddFriends = ttk.Label(self.mainframe, text="Add Friends:", font=("Helvetica", 18))
        AddFriends.grid(row=4, column=0, columnspan=3)

        Firstlab = ttk.Label(self.mainframe, text="First Name:")
        Firstlab.grid(row=5,column=0)

        Lastlab = ttk.Label(self.mainframe, text="Last Name:")
        Lastlab.grid(row=6, column=0)

        Phonelab = ttk.Label(self.mainframe, text="Phone Number:")
        Phonelab.grid(row=7, column=0)

        EmailLab = ttk.Label(self.mainframe, text="Email:")
        EmailLab.grid(row=8, column=0)

        Otherlab = ttk.Label(self.mainframe, text="Other (Spirit Animal):")
        Otherlab.grid(row=9, column=0)


        


        #Entry Boxes

        self.Firstent = ttk.Entry(self.mainframe, width = 15)
        self.Firstent.grid(row=5, column = 1)

        self.Lastent = ttk.Entry(self.mainframe, width = 15)
        self.Lastent.grid(row=6, column = 1)

        self.PhoneEnt = ttk.Entry(self.mainframe, width = 15)
        self.PhoneEnt.grid(row=7, column = 1)

        self.Emailent = ttk.Entry(self.mainframe, width = 15)
        self.Emailent.grid(row=8, column = 1)

        self.Otherent = ttk.Entry(self.mainframe, width = 15)
        self.Otherent.grid(row=9, column = 1)

        #Buttons

        Save = ttk.Button(self.mainframe, text="Save", command = self.save)
        Save.grid(row=10, column = 0)

        Quit = ttk.Button(self.mainframe, text = "Quit", command = self.quit_)
        Quit.grid(row=10, column = 2)
        
        root.mainloop()

        
    def refresh_Contacts(self):
        self.Listcontacts.destroy()
        self.Firstent.destroy()
        self.Lastent.destroy()
        self.PhoneEnt.destroy()
        self.Emailent.destroy()
        self.Otherent.destroy()
        
        self.Listcontacts = Listbox(self.mainframe)
        self.Listcontacts.grid(row=3, column=0, columnspan=3)
        
        if self.isTable():
            contacts = self.getContacts()
        else:
            contacts = []
        if not contacts:
            contacts.append('None, sad :(')
        for item in contacts:
            print item
            self.Listcontacts.insert(END, item)

        self.Firstent = ttk.Entry(self.mainframe, width = 15)
        self.Firstent.grid(row=5, column = 1)

        self.Lastent = ttk.Entry(self.mainframe, width = 15)
        self.Lastent.grid(row=6, column = 1)

        self.PhoneEnt = ttk.Entry(self.mainframe, width = 15)
        self.PhoneEnt.grid(row=7, column = 1)

        self.Emailent = ttk.Entry(self.mainframe, width = 15)
        self.Emailent.grid(row=8, column = 1)

        self.Otherent = ttk.Entry(self.mainframe, width = 15)
        self.Otherent.grid(row=9, column = 1)

            
    def getContacts(self):
        if self.isTable() == False:
            self.makeTable()
        with self.con:
            cur = self.con.cursor()
            cur.execute("SELECT * FROM {}".format(self.tableName))
            self.contacts = []
            Contacts = cur.fetchall()
            for i in Contacts:
                self.contacts.append(i)
            return self.contacts
        

    def isTable(self):
        with self.con:
            cur = self.con.cursor()
            cur.execute("SHOW TABLES")
            Tables = cur.fetchall()
            for table in Tables:
                if self.tableName in list(table):
                    return True
                    

    def makeTable(self):
        with self.con:
            cur = self.con.cursor()
            cur.execute("CREATE TABLE IF NOT EXISTS \
                {}(Id INT PRIMARY KEY AUTO_INCREMENT, First VARCHAR(25), Last VARCHAR(25), Phone VARCHAR(15), Email VARCHAR(50), Other VARCHAR(25))".format(self.tableName))
            
    def save(self):

        with self.con:
            cur = self.con.cursor()
            cur.execute("INSERT INTO {}(First,Last,Phone,Email,Other) \
                VALUES ('{}','{}','{}','{}','{}');".format(self.tableName, self.Firstent.get(),self.Lastent.get(),self.PhoneEnt.get(),self.Emailent.get(),self.Otherent.get()))
        self.refresh_Contacts()

        
    def search(self,*args):
        #with con:
            pass

    def quit_(self):
        quit()

        
        


if __name__ == "__main__":
    run = contacts()
    test = run.drawGui()
                  
