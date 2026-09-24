# 1. Principles and practices

## Git tutorial
# Week 1 – Creating My Fab Lab Website

## Introduction

During Week 1, I started creating my Fab Lab documentation website. This website will be used to document my learning process, projects, problems, and solutions during my studies at Fab Lab.

This was my first time working with several tools together, including VS Code, Git Bash, GitHub, Git, Markdown, and MkDocs. At first, the process was difficult, but solving the problems helped me understand how these tools work.

## Starting With the Template

My teacher gave me a Fab Academy website template. I downloaded the template to my computer and opened the project folder in VS Code.

The project contained files and folders such as:

    docs/
    mkdocs.yml
    .gitignore
    .gitlab-ci.yml
    README.md
    requirements.txt

I learned that the `docs` folder contains most of the content that appears on my website.

I also learned that `mkdocs.yml` is an important configuration file that controls the website name, navigation, theme, and other settings.

## Using VS Code

I used VS Code to open and edit the files of my website.

At first, it was difficult to understand which files I needed to edit because the template contained many different files.

Later, I understood that most of my documentation should be written in Markdown files inside the `docs` folder.

For example:

    docs/index.md

is used for the Home page, while:

    docs/about/index.md

contains my About Me page.

## Learning Git Bash

I used Git Bash to communicate with Git and GitHub.

At first, I sometimes had problems because I was not sure which folder Git Bash was currently using.

I learned several useful commands:

    pwd

This shows my current location.

    ls

This shows the files and folders in my current location.

    cd folder-name

This allows me to enter another folder.

For example, to enter my website project I used:

    cd ~/Downloads/my-website

## Creating My GitHub Repository

I created a GitHub repository called:

    my-website

I connected my local website project to this repository so that I could save my work online and keep a history of my changes.

I learned that GitHub is useful because I can store my project online and access it from another computer.

## Problem: Repository Already Existed

When I tried to clone my repository on another computer, I received this error:

    fatal: destination path 'my-website' already exists and is not an empty directory.

This happened because a folder called `my-website` already existed on that computer.

Instead of cloning the repository again, I entered the existing folder and checked whether it was connected to GitHub.

I used:

    git remote -v

This command showed me which GitHub repository was connected to my project.

## Working From Another Computer

I also learned how to continue working on my website from another computer.

Before starting work, I can use:

    git pull origin main

This downloads the newest version of my project from GitHub.

After editing my website, I can upload my new changes using:

    git add .
    git commit -m "Update website"
    git push origin main

This means I can work on the same project from different computers without creating a new website every time.

## My Git Workflow

During Week 1, I learned this basic workflow:

    Open project
        ↓
    git pull origin main
        ↓
    Edit files in VS Code
        ↓
    Save with Ctrl + S
        ↓
    git add .
        ↓
    git commit
        ↓
    git push origin main

## What I Learned

During Week 1, I learned how to:

- Open and edit a website project in VS Code
- Understand the basic structure of the Fab Academy template
- Use Markdown files
- Navigate folders using Git Bash
- Use basic Git commands
- Connect my project to GitHub
- Clone and pull a repository
- Commit and push my changes
- Continue working on the same project from another computer

The biggest challenge was understanding how VS Code, Git, GitHub, and the website template work together. By solving each problem step by step, I started to understand the complete workflow.
