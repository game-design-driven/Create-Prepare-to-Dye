# go through folders and collect all file content of their changelog.txt files into one file
# in reverse!

import os
import markdown


final_markdown = markdown.Markdown()
for folder in reversed(os.listdir('.')):
    if os.path.isdir(folder):
        changelog = open(folder + "/changelog.txt", "r")
        changelog_content = changelog.read()
        changelog.close()
        changelog = open("allChangelogs.md", "a")
        changelog.write(final_markdown.convert(changelog_content) + "\n")
        changelog.close()

        # changelog = open(folder + "/changelog.txt", "r")
        # changelog_content = changelog.read()
        # changelog.close()
        # changelog = open("allChangelogs.txt", "a")
        # changelog.write(changelog_content + "\n")
        # changelog.close()