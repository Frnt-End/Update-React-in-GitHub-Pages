# How to update React in GitHub pages:

Assuming you already have a GitHub page running with gh-pages and after you push your changes, you see them in your repo but the GitHub page is not being updated.

Keep reading the full guide or check out the quick solution in the [Tutorial Page](https://frnt-end.github.io/Update-React-in-GitHub-Pages/)
(If you wondering about the full-screen video in the tutorial page, check this guide to learn how to set a [Responsive video in React](https://frnt-end.github.io/React-Responsive-Video/))

---

In this sample we are using **npm** and our branch called **master**, if needed, change them according to your own settings.
We are also already have a **build directory** - don't have one? no problem!
just execute `npm run build` command (make sure the build folder it's not listed in the .gitignore file).

---

## Let's Start

#### The solution is simple - we need to update the build directory!

## In the terminal:

Make sure you are in the project folder and no other processes are running (to stop all processing in the terminal: **Ctrl + c** in Windows OR **Cmd + c** in Mac)

### Deploy the build folder:

##### `npm run deploy`

(If you are using GitHub in your code editor, you will see the build folder content being added to the **Unstaged Changes** - ready to be staged).

### Stage all:

##### `git add .`

### ..and commit:

##### `git commit -m "update build for gh-pages"`

### Last step - Push to GitHub:

##### `git push -u origin master`

---

# Done! 👍

##### Refresh your page in GitHub and see the new changes.

---

### Learn More about React & GitHub Pages

- [Article - How to Deploy a Routed React App to GitHub Pages](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/)

- [YouTube tutorial - How to Deploy React App to GitHub Pages](https://www.youtube.com/watch?v=F8s4Ng-re0E)

### License

Copyright © 2015 @frnt-end
[frnt-end.github.io/portfolio/](https://frnt-end.github.io/portfolio/)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
