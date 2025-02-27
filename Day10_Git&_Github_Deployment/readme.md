## Git, Github & Deploying Website on github

Here's a summary of some commonly used Git commands with brief descriptions and examples:

### 1. `git init`
**Description**: Initializes a new Git repository.
**Example**:
```sh
git init
```
This command creates a new `.git` directory in your project, setting up the necessary files for version control.

### 2. `git clone`
**Description**: Copies an existing Git repository.
**Example**:
```sh
git clone https://github.com/username/repo.git
```
This command clones the repository at the specified URL into a new directory.

### 3. `git status`
**Description**: Shows the status of changes as untracked, modified, or staged.
**Example**:
```sh
git status
```
This command lists all new or modified files that haven't yet been committed.

### 4. `git add`
**Description**: Adds files to the staging area.
**Example**:
```sh
git add filename
```
To add all files:
```sh
git add .
```
This command stages the specified files, preparing them for a commit.

### 5. `git commit`
**Description**: Records changes to the repository.
**Example**:
```sh
git commit -m "Commit message"
```
This command commits the staged changes with a descriptive message.

### 6. `git push`
**Description**: Updates the remote repository with local commits.
**Example**:
```sh
git push origin main
```
This command pushes your changes to the `main` branch of the remote repository.

### 7. `git pull`
**Description**: Fetches and integrates changes from the remote repository.
**Example**:
```sh
git pull origin main
```
This command fetches changes from the `main` branch and merges them into your local branch.

### 8. `git branch`
**Description**: Lists, creates, or deletes branches.
**Example**:
List branches:
```sh
git branch
```
Create a new branch:
```sh
git branch new-branch
```
Delete a branch:
```sh
git branch -d new-branch
```

### 9. `git checkout`
**Description**: Switches branches or restores working tree files.
**Example**:
Switch to a branch:
```sh
git checkout main
```
Create and switch to a new branch:
```sh
git checkout -b new-branch
```

### 10. `git merge`
**Description**: Joins two or more development histories together.
**Example**:
```sh
git merge new-branch
```
This command merges the `new-branch` into the current branch.

### 11. `git remote`
**Description**: Manages set of tracked repositories.
**Example**:
Add a remote repository:
```sh
git remote add origin https://github.com/username/repo.git
```
List remote repositories:
```sh
git remote -v
```

### 12. `git log`
**Description**: Shows the commit logs.
**Example**:
```sh
git log
```
This command lists the commit history for the current branch.

### 13. `git reset`
**Description**: Resets current HEAD to the specified state.
**Example**:
Unstage a file:
```sh
git reset filename
```
Reset to a specific commit:
```sh
git reset --hard commit-hash
```

### 14. `git stash`
**Description**: Temporarily shelves changes made to your working directory.
**Example**:
Save changes:
```sh
git stash
```
Apply stashed changes:
```sh
git stash apply
```

### 15. `git rebase`
**Description**: Reapplies commits on top of another base tip.
**Example**:
```sh
git rebase main
```
This command replays commits from the current branch onto `main`.

### 16. `git diff`
**Description**: Shows changes between commits, commit and working tree, etc.
**Example**:
```sh
git diff
```
This command shows the differences between the working directory and the index.

### 17. `git tag`
**Description**: Creates, lists, or deletes tags.
**Example**:
Create a tag:
```sh
git tag v1.0
```
List tags:
```sh
git tag
```
Push a tag:
```sh
git push origin v1.0
```

### Summary
- **`git init`**: Initialize a new repository.
- **`git clone`**: Clone an existing repository.
- **`git status`**: Check status of changes.
- **`git add`**: Stage changes.
- **`git commit`**: Commit changes.
- **`git push`**: Push changes to remote.
- **`git pull`**: Pull changes from remote.
- **`git branch`**: Manage branches.
- **`git checkout`**: Switch branches or restore files.
- **`git merge`**: Merge branches.
- **`git remote`**: Manage remote repositories.
- **`git log`**: View commit logs.
- **`git reset`**: Reset changes.
- **`git stash`**: Stash changes.
- **`git rebase`**: Reapply commits on top of another base tip.
- **`git diff`**: Show differences.
- **`git tag`**: Manage tags.

Understanding these commands will give you a solid foundation in using Git for version control.


### How to deploy your Static Website on Github Pages

Deploying a static website on GitHub Pages is straightforward and free. Here's a step-by-step guide to help you deploy your site:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and log in to your account.
2. Click on the `+` icon in the upper-right corner and select `New repository`.
3. Name your repository (e.g., `my-website`). Ensure the repository name is in lowercase and without spaces (use hyphens if necessary).
4. Optionally, add a description.
5. Choose `Public` for the repository visibility.
6. Initialize the repository with a `README.md` file.
7. Click `Create repository`.

### Step 2: Add Your Website Files

1. On your local machine, navigate to your project directory containing the static website files (HTML, CSS, JavaScript, images, etc.).
2. Initialize a new Git repository if you haven't already:
   ```sh
   git init
   ```
3. Add the GitHub repository as a remote:
   ```sh
   git remote add origin https://github.com/your-username/my-website.git
   ```
4. Add all your files to the repository:
   ```sh
   git add .
   ```
5. Commit the files:
   ```sh
   git commit -m "Initial commit"
   ```
6. Push the files to GitHub:
   ```sh
   git push -u origin main
   ```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub.
2. Click on the `Settings` tab.
3. Scroll down to the `Pages` section in the left sidebar.
4. Under `Source`, select the branch you want to deploy (usually `main`).
5. If your files are in the root directory, choose `/ (root)` for the folder. If they are in a specific folder (like `docs`), select that folder.
6. Click `Save`.

### Step 4: Access Your Website

1. After a few moments, GitHub will build and deploy your site.
2. A banner will appear at the top of the `Pages` section with the URL of your deployed site, typically `https://your-username.github.io/my-website/`.
3. Visit the URL to see your deployed site.

### Example Project Directory Structure

Make sure your project structure looks something like this:

```
my-website/
├── index.html
├── about.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
└── images/
    └── logo.png
```

### Additional Tips

- **Custom Domains**: If you want to use a custom domain, add a `CNAME` file with your domain name (e.g., `www.yourdomain.com`) to the root of your repository.
- **404 Pages**: GitHub Pages supports custom 404 pages. Just create a `404.html` file in your repository.
- **Updating Your Site**: To update your site, make changes locally, commit them, and push to the `main` branch. GitHub Pages will automatically update the site.

By following these steps, you can easily deploy your static website on GitHub Pages and make it accessible to the world.

----


## 1. **Deploying a Website to a Web Server**

When a website is ready, it needs to be made accessible on the web. This process is called **deployment**. To deploy a website, you need:
- A web server to host your files.
- A domain name to give your website a unique address.
  
**Example**: Let’s say you created a portfolio website. To make it accessible, you’ll need to upload your HTML, CSS, and JavaScript files to a web server.

---

### 2. **Hosting Options and Domain Registration**

**Hosting** is where your website’s files live. There are multiple hosting options:
1. **Shared Hosting**: Multiple websites share the same server.
2. **VPS (Virtual Private Server)**: A virtual machine, offering more control and resources.
3. **Dedicated Hosting**: A server fully dedicated to your website.
4. **Cloud Hosting**: Hosting over the cloud, scalable and flexible.
5. **Static Hosting**: For static sites like GitHub Pages, Netlify, and Vercel.

**Domain Registration** is how you acquire a unique address (like `www.yourwebsite.com`).

**Example**: Use a provider like GoDaddy, Namecheap, or Google Domains to register your domain. For hosting, you can use Bluehost for shared hosting or AWS for cloud hosting.

---

### 3. **FTP and Using Platforms like GitHub Pages**

**FTP (File Transfer Protocol)** is a method for transferring files from your local computer to a web server. You need an FTP client like FileZilla to connect to your server and upload files.

**Example**: You create a portfolio website and want to upload it to your hosting provider. You use FileZilla to connect to the server and transfer your website files to the `/public_html` folder.

**GitHub Pages** is a static hosting service that allows you to host your site directly from a GitHub repository. It’s ideal for simple websites.

**Steps to Deploy with GitHub Pages**:
1. Create a GitHub repository.
2. Add your HTML, CSS, and JavaScript files.
3. Go to the repository settings.
4. Scroll to the **GitHub Pages** section and choose the branch from which to deploy.
5. GitHub will provide a URL where your site is hosted.

**Example**: You have a project called `portfolio`. You push it to GitHub, and using GitHub Pages, your site will be live at `https://yourusername.github.io/portfolio/`.

---

### 4. **Introduction to Version Control with Git and GitHub**

**Version control** allows you to track changes in your code, collaborate with others, and revert to previous versions if needed. Git is a version control system, and GitHub is a platform that hosts Git repositories online.

**Why use Git?**
- To track the history of changes in your project.
- Collaborate on code with others without overwriting work.
- Make sure you have backups of your code.

---

### 5. **Git Basics: init, add, commit, push**

Here are the basic commands to use Git locally and push to a remote repository like GitHub:

- **`git init`**: Initializes a new Git repository in your project folder.
  
  ```bash
  git init
  ```

- **`git add <filename>`**: Stages files for a commit (adds them to the Git index).
  
  ```bash
  git add index.html
  ```

  You can add all files with `git add .`.

- **`git commit -m "message"`**: Commits the changes with a message describing what was changed.
  
  ```bash
  git commit -m "Initial commit"
  ```

- **`git push origin main`**: Pushes your committed changes to the remote repository on GitHub.
  
  ```bash
  git push origin main
  ```

  `main` is the default branch, but sometimes it’s `master`.

**Example**: 
1. You create a local project.
2. Initialize Git using `git init`.
3. Add files with `git add .`.
4. Commit with a message using `git commit -m "First commit"`.
5. Push to GitHub using `git push`.

---

### 6. **Using GitHub for Version Control and Collaboration**

GitHub is perfect for working in teams. Some important concepts:
- **Branches**: Used to work on new features without affecting the main code.
- **Pull Requests (PRs)**: Used to review changes and merge them into the main branch.
- **Forking**: Creating a copy of someone’s repository to work on independently.

**Steps to Collaborate**:
1. **Fork** a repository.
2. Clone the forked repository.
3. Create a **new branch** to work on a feature:
   ```bash
   git checkout -b feature-branch
   ```
4. Make changes and commit them.
5. Push the changes and create a **Pull Request** on GitHub.

**Example**: If you and your friend are working on a project together, you can each create branches for different features, work independently, and then merge them into the main branch after code review.

---

### Summary

- **Hosting and Domain Registration**: Choose the right hosting for your site and register a domain.
- **FTP and GitHub Pages**: Use FTP for file transfer or GitHub Pages for static website hosting.
- **Version Control with Git**: Track changes and collaborate using Git, starting with `init`, `add`, `commit`, and `push`.
- **GitHub Collaboration**: Use branches and pull requests for efficient teamwork.

--- 

## Explanation to useful git commands (self-learning)

Here’s a comprehensive list of useful Git commands, along with examples and code snippets. Each command is explained in detail to help you  understand their purpose and how to use them in real-life scenarios.

---

### 1. **git init**
- **Description**: Initializes a new Git repository in your current project directory.
  
  ```bash
  git init
  ```

  **Example**: If you have a folder with your project files, you can turn it into a Git repository with `git init`. After this, Git starts tracking the changes made to the files in this directory.

---

### 2. **git clone**
- **Description**: Clones (copies) an existing remote repository to your local machine.

  ```bash
  git clone <repository-url>
  ```

  **Example**: If you want to work on a project hosted on GitHub, you can clone the repository using this command. 

  ```bash
  git clone https://github.com/user/project.git
  ```

---

### 3. **git add**
- **Description**: Stages changes (files) to be committed. The changes will remain in the staging area until committed.
  
  ```bash
  git add <filename>
  git add .
  ```

  **Example**: After editing your files, use `git add .` to stage all changes or `git add index.html` to stage a specific file.

---

### 4. **git commit**
- **Description**: Commits the staged changes with a descriptive message. Commits are snapshots of your repository at a particular point in time.

  ```bash
  git commit -m "message"
  ```

  **Example**: After staging changes, commit them with a descriptive message.
  
  ```bash
  git commit -m "Initial commit"
  ```

  This will commit the changes with the message "Initial commit."

---

### 5. **git status**
- **Description**: Shows the current status of the working directory and staging area. It will tell you which files are staged, unstaged, or untracked.

  ```bash
  git status
  ```

  **Example**: Running `git status` after editing a file will show the current state of the file, such as whether it's staged for commit or untracked.

---

### 6. **git log**
- **Description**: Displays a list of all the commits made to the repository along with their details.

  ```bash
  git log
  ```

  **Example**: If you want to see a history of commits, use `git log`.

  ```bash
  commit 1a410efbd13591db07496601ebc7a059dd55cfe9
  Author: User <user@example.com>
  Date:   Mon Sep 13 2023

      Initial commit
  ```

---

### 7. **git branch**
- **Description**: Lists, creates, or deletes branches. Branches are used to work on different features or bug fixes without affecting the main code.

  ```bash
  git branch            # Lists all branches
  git branch <branchname>   # Creates a new branch
  git branch -d <branchname> # Deletes a branch
  ```

  **Example**: To create a new branch for a feature:

  ```bash
  git branch feature-1
  ```

---

### 8. **git checkout**
- **Description**: Switches between branches or restores files.

  ```bash
  git checkout <branchname>
  ```

  **Example**: To switch to a branch called `feature-1`:

  ```bash
  git checkout feature-1
  ```

  You can also use `git checkout <commit-hash>` to switch to a specific commit.

---

### 9. **git merge**
- **Description**: Merges changes from one branch into another branch.

  ```bash
  git merge <branchname>
  ```

  **Example**: If you're on the `main` branch and want to merge changes from `feature-1`, use:

  ```bash
  git merge feature-1
  ```

---

### 10. **git pull**
- **Description**: Fetches and merges changes from a remote repository into your current branch. It’s a combination of `git fetch` and `git merge`.

  ```bash
  git pull origin main
  ```

  **Example**: To get the latest changes from the `main` branch of the remote repository:

  ```bash
  git pull origin main
  ```

---

### 11. **git push**
- **Description**: Pushes your local changes to a remote repository (e.g., GitHub). Only the committed changes are pushed.

  ```bash
  git push origin <branchname>
  ```

  **Example**: To push your local commits to the `main` branch of the remote repository:

  ```bash
  git push origin main
  ```

---

### 12. **git remote**
- **Description**: Manages remote connections to your repository.

  ```bash
  git remote -v              # Lists the remotes
  git remote add origin <url>  # Adds a remote repository
  ```

  **Example**: If you want to connect your local repo to a remote GitHub repository:

  ```bash
  git remote add origin https://github.com/user/project.git
  ```

---

### 13. **git fetch**
- **Description**: Downloads changes from the remote repository without merging them into your current branch.

  ```bash
  git fetch origin
  ```

  **Example**: If you want to see what others have pushed to the remote without updating your local files yet:

  ```bash
  git fetch origin
  ```

---

### 14. **git stash**
- **Description**: Temporarily saves your uncommitted changes so you can work on something else and apply them later.

  ```bash
  git stash
  ```

  **Example**: If you're working on a feature but need to switch branches without committing, stash your changes:

  ```bash
  git stash
  ```

  To reapply stashed changes later:

  ```bash
  git stash apply
  ```

---

### 15. **git reset**
- **Description**: Unstages or reverts commits.

  ```bash
  git reset <filename>
  git reset --soft <commit>
  git reset --hard <commit>
  ```

  **Example**: To unstage a file:

  ```bash
  git reset index.html
  ```

  To undo a commit but keep changes locally:

  ```bash
  git reset --soft HEAD~1
  ```

  To completely remove the commit and changes:

  ```bash
  git reset --hard HEAD~1
  ```

---

### 16. **git rebase**
- **Description**: Reapplies commits on top of another base commit. This is useful for cleaning up a commit history.

  ```bash
  git rebase <branchname>
  ```

  **Example**: To reapply the commits of `feature-1` on top of `main`:

  ```bash
  git rebase main
  ```

---

### 17. **git diff**
- **Description**: Shows the changes between commits, branches, or your working directory and the staging area.

  ```bash
  git diff
  ```

  **Example**: If you want to see the changes you’ve made compared to the last commit:

  ```bash
  git diff
  ```

---

### 18. **git tag**
- **Description**: Marks a specific point in the repository’s history as important (usually for releases).

  ```bash
  git tag <tagname>
  ```

  **Example**: To create a tag for a new release:

  ```bash
  git tag v1.0
  ```

  You can push tags to the remote with:

  ```bash
  git push origin v1.0
  ```

---

### 19. **git rm**
- **Description**: Removes files from the working directory and stages the removal.

  ```bash
  git rm <filename>
  ```

  **Example**: If you want to remove a file from both your working directory and Git:

  ```bash
  git rm old-file.txt
  ```

---

### 20. **git blame**
- **Description**: Shows who made changes to each line in a file.

  ```bash
  git blame <filename>
  ```

  **Example**: If you want to see who last modified each line in `index.html`:

  ```bash
  git blame index.html
  ```

---

### 21. **git cherry-pick**
- **Description**: Applies a specific commit from one branch to another.

  ```bash
  git cherry-pick <commit-hash>
  ```

  **Example**: If you want to apply a specific commit from another branch to your current branch:

  ```bash
  git cherry-pick a1b2c3d4
  ```

---

### 22. **git archive**
- **Description**: Creates an archive (like a .zip or .tar) of files from a specific commit or branch.

  ```bash
  git archive --format=zip HEAD > latest.zip
  ```

  **Example**: To create a .zip file of your latest commit:

  ```bash
  git archive --format=zip HEAD > latest.zip
  ```

---

### 23. **git show**
- **Description**: Shows the

 details of a specific commit, including changes and metadata.

  ```bash
  git show <commit>
  ```

  **Example**: To show the details of a specific commit:

  ```bash
  git show a1b2c3d4
  ```

----
