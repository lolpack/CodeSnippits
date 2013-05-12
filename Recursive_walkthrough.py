#By Aaron Pollack
#Wrtitten in Python 2.7.3
#Write all of the files in a given directory to a file

import os

def WriteDirectoryNames(filepath):
    for dirname, dirnames, files in os.walk(filepath):
        for subdir in dirnames:
            f = open("/Users/offwhitepaintball/Desktop/Python Class/Aaron's personal/Test Folder/Dirnames.txt" , 'a+')
            f.write('Directory: ' + subdir + ':' + '\n')
            for i in files:
                f.write('Files: ' + i + ',')
            f.write('\n')
            f.close()
            print "subdir:" + subdir
            filepath = os.path.join(dirname,subdir)
            print files
            print 'filepath' + filepath
            os.chdir(filepath)
            WriteDirectoryNames(filepath) #Continue into any subdirectories
            
 






x = "/Users/YOUR_DIRECTORY_HERE"
WriteDirectoryNames(x)
