import os

folder_path = 'C:/Users/Lin/Documents/Projects/AnimeWorld/Images'

for filename in os.listdir(folder_path):
    if os.path.isfile(os.path.join(folder_path, filename)):
        name, extension = os.path.splitext(filename)
        print('<img src="Images/' + name + extension + '"' + ' alt="Image">')
