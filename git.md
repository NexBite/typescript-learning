4. Create GitHub repository

On GitHub create a new repository:

typescript-learning

For the easiest setup, don't add README, .gitignore, or license on GitHub because we'll create them locally.

Then connect your local repository:

git remote add origin https://github.com/NexBite/typescript-learning.git

Check:

git remote -v
5. First commit

After creating the folders/files:

git add .

Then:

git commit -m "Initialize TypeScript learning phase"

Rename branch to main:

git branch -M main

Push:

git push -u origin main

After this, future daily updates become very simple:

git add .
git commit -m "Day 01: TypeScript type annotations"
git push