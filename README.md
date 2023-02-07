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
There are only 2 required files for the project, `thumbnail.png` and `espruino-demo.config.json`. All the rest of the files are up to you.

#### thumbnail.png
thumbnail.png is an image to be shown in the demos list page.

#### espruino-demo.config.json
This file contains all the config information to style your page

Here is an example below

```markdown
{
    "projectHeader":{
        "title":"Puck Light sensor demo",
        "projectDescription":"This demo introduces the `@espruino-tools/core` package with the espruino Puck. "
    },
    "sidebarLinks":[
        {"name":"github","link":"https://github.com/espruino-tools/demos/tree/production/demos/light-sensor"},
        {"name":"otherSite1","link":"link to other site 1"}
        // you can put any site in here you want by adding another in the style above
    ],
    "video":{
        "link":"https://www.youtube.com/embed/Eg8DLQuNCBc",
        "details":{
            "title":"Puck LED Light Sensor Demo",
            "description":"This demo highlights the built in tech from the espruino devices."
        }
    }
}
```

### As for the code 🧑🏼‍💻

The code section of the demo page is designed to show each item in the repository besides .mp4 and .md files, there is currently icon support for `.html`, `.js`,`.ts`, `.jsx`,`.tsx`, `.css`, `.json` and `.scss`


### Thats it 😀

You now know how to request adding your demo to the site.
    
