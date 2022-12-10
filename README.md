# Espruino Demos
Espruino demos is a small web app used to show off what people have been doing with the `@espruino-tools` package, you can use this space to show off any cool projects youve been working on or even just explore and see what other people have been doing.


## Submitting a demo
Below is a short tutorial on how you can submit a demo of your own!

### Lets get started 😎
What do you need?

- An espruino project
- A Github account

To get started with adding a project to this demos site, first you must clone the github repository. This can be done as shown below</Text>

```
git clone https://github.com/espruino-tools/demos
```

Once your here open your newly cloned repository in an IDE or text editor of your choice, youll notice a folder at the top level called demos

![DEMO FOLDER](https://i.imgur.com/0YDrDd1.png)

First create a new branch, try and stick to the convention `demo/my-demo`


All you need to do now is drag your new project into this demos, commit, push and publish the branch. After this you can make a pull request into the dev branch and if the demo is suitable it will be added to the production site.

### What needs to be in the folder 🤔
There are only 2 required files for the project, `demo.mp4` and `README.md`. All the rest of the files are up to you.

#### demo.mp4
demo.mp4 is a short video showcasing the project, this is required for a demo to be accepted and will be shown on the video tab of a demos page.

#### README.md
README.md is used for 2 things on the demo page, the page header description and the video description.

To use the README.md file correctly you must use `<!-- README DIVIDER -->` this is used to split your readme file into Demo description and video description. *Side note: demo description (or the first part before `<!-- README DIVIDER -->`) has a character limit of 128.* An example of a README.md is below

```markdown
# My Demo
Here is a short description of my demo.

<!-- README DIVIDER -->

## Video name / title
Here you can talk about the video or just use this space to add further detail about the project that the previous 128 characters did not allow

You can also utilise any markdown in this file, 

dividers

---

**bold text**

*italic text*

> block quotes

- lists
        - with sub items

\`code blocks\`

and even embedding images ![name](link) or just links [name](link) 

```

In the future this may be able to include HTML or advanced markdown such as tables.


### As for the code 🧑🏼‍💻

The code section of the demo page is designed to show each item in the repository besides .mp4 and .md files, there is currently icon support for `.html`, `.js`,`.ts`, `.jsx`,`.tsx`, `.css`, `.json` and `.scss`


### Thats it 😀

You now know how to request adding your demo to the site.
    
