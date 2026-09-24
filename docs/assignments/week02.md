# Second part of process of making website
# Week 2 – Customizing and Publishing My Website

## Introduction

During Week 2, I continued developing my Fab Lab documentation website.

My goal was to personalize the website, create my own pages, add information about myself, add images, and finally publish the correct version of the website online.

During this process, I faced several problems with Markdown, GitHub Pages, MkDocs, branches, and deployment. Solving these problems helped me understand much more about how a website is built and published.

## Creating My About Me Page

I created and edited my About Me page.

I added information about myself, my school, Fab Academy, and my interests.

I wrote about my interest in football and training. I also wrote that some of my favorite school subjects are statistics, mathematics, and physics.

In my free time, I enjoy playing video games and watching films.

My About Me page is stored in:

    docs/about/index.md

I learned that Markdown uses `#` symbols to create headings.

For example:

    # About Me

    ## My Interests

## Creating My Welcome Page

I also customized the website so that it could introduce my documentation.

The purpose of my website is to document my learning process at Fab Lab. I will use it to show what I learn, what I create, the problems I face, and how I solve them.

## Adding Images

I wanted to add an image to my About Me page.

At first, the image did not appear.

The problem was that I had written the Markdown image syntax incorrectly. I had extra symbols in the code.

I learned that the correct Markdown syntax for an image is:

    ![Image description](image-link)

I also learned that images can be stored inside the project.

For example:

    docs/images/

Then the Markdown page can reference the image from that folder.

## Saving My Changes

After editing a page in VS Code, I first save it using:

    Ctrl + S

Then I use Git Bash.

The commands I normally use are:

    git add .
    git commit -m "Update website"
    git push origin main

`git add .` prepares my changed files.

`git commit` creates a saved version of those changes.

`git push` sends the commit to GitHub.

## Problem: My Website Showed the Original Template

One of the biggest problems happened after I published the website.

My GitHub Pages website was online, but instead of showing my personalized Home and About Me pages, it showed the original template.

The website displayed:

    Welcome to your new Fab Academy site

At first, I thought that my work had disappeared.

However, my files were still saved in Git.

## Understanding Main and gh-pages

I learned that my project uses MkDocs.

The `main` branch contains my source files, including my Markdown documentation.

MkDocs builds these files into the final website.

The built website can then be stored in the `gh-pages` branch.

I used:

    mkdocs gh-deploy --force

to build and deploy my MkDocs website.

In GitHub Pages settings, I then used:

    Branch: gh-pages
    Folder: / (root)

This allowed GitHub Pages to display the built MkDocs website instead of the source files from the main branch.

## Problem: GitHub Internal Server Error

While pushing my work, I received an error:

    remote: Internal Server Error
    remote rejected

At first, I thought I had made a mistake.

However, the problem came from the remote GitHub server.

I tried the push again later:

    git push origin main

The second attempt worked successfully.

This taught me that not every error is caused by my code. Sometimes an external service can temporarily have a problem.

## Problem: My Pages Seemed to Disappear

At another point, my Home, Welcome, and About Me content seemed to disappear.

Instead of rewriting everything, I learned how to use Git history.

I used:

    git log --oneline --all -10

This showed previous versions of my project.

I could see commits such as:

    Update About Me
    Update my About Me
    My website
    Initial commit

I also learned how to inspect files from an older commit using:

    git show

For example:

    git show COMMIT-ID:docs/about/index.md

This allowed me to see an older version of my About Me page.

## Recovering My Work

After finding the correct previous version, I learned that Git can restore a file from an older commit.

The command has this structure:

    git restore --source=COMMIT-ID -- FILE

I used this method to recover my Home and About Me content.

After restoring the files, I saved them again with Git:

    git add .
    git commit -m "Restore Home and About Me"
    git push origin main

This was one of the most important things I learned during this project.

Git does not only upload files to GitHub. It also keeps a history of the project, which can help recover previous work if something goes wrong.

## Publishing the Final Website

After fixing my pages, I built and deployed the website using:

    mkdocs gh-deploy --force

Then I configured GitHub Pages to publish from the `gh-pages` branch.

After refreshing the website, my personalized website was working correctly.

## Final Result

At the end of Week 2, I had a working Fab Lab documentation website with my own content.

I learned how to:

- Write documentation using Markdown
- Create and edit website pages
- Add images
- Use Git commits
- Push changes to GitHub
- Understand Git branches
- Use MkDocs
- Deploy a website
- Configure GitHub Pages
- Read error messages
- Find previous commits
- Recover old versions of files
- Solve deployment problems

The problems I faced made the project more difficult, but they also helped me understand Git, GitHub, MkDocs, and website development much better. 

