#By Aaron Pollack
#Wrtitten in Python 2.7.3

import os

def WriteDirectoryNames(filepath):
    for dirname, dirnames, files in os.walk(filepath):
        for subdir in dirnames:
            f = open("/Users/offwhitepaintball/Desktop/Python Class/Aaron's personal/Test Folder/Dirnames.txt" , 'a+')
            f.write(subdir + '\n')
            f.close()
            print subdir
            filepath = os.path.join(dirname,subdir)
            print filepath
            os.chdir(filepath)
            WriteDirectoryNames(filepath)
            
 






x = "/Users/offwhitepaintball/Desktop"
WriteDirectoryNames('.')
