# Ecommerce Product Page

## Purpose
This exercise is designed to help users practice and understand efficient software development workflows using Git, GitHub, and CI/CD tools. You will:
- Build a simple ecommerce product page using React and Vite.
- Learn how to manage branches, commits, and rollbacks in Git.
- Set up GitHub Actions for continuous deployment (CD) to GitHub Pages.
- Document and automate your workflow for future projects.

## Steps to Execute

1. **Clone the Repository**
	```sh
	git clone https://github.com/rma010101/ecommerce-product-page.git
	cd ecommerce-product-page
	```

2. **Install Dependencies**
	```sh
	npm install
	```

3. **Run the Development Server**
	```sh
	npm run dev
	```
	Open your browser and navigate to the local server URL to view the product page.

4. **Branch Management**
	- Create a new branch for each feature or fix:
	  ```sh
	  git checkout -b <branch-name>
	  ```
	- Commit your changes:
	  ```sh
	  git add .
	  git commit -m "Describe your changes"
	  ```
	- Push your branch to GitHub:
	  ```sh
	  git push origin <branch-name>
	  ```

5. **Continuous Deployment (CD) with GitHub Actions**
	- The repository includes a workflow file in `.github/workflows/cd.yaml`.
	- On push to `main`, the workflow builds the project and deploys it to GitHub Pages.
	- Ensure GitHub Pages is enabled in the repository settings (set source to `main` branch and `/root`).

6. **Rollback and Recovery**
	- To undo a commit before pushing:
	  ```sh
	  git reset --hard HEAD~1
	  ```
	- To delete a branch:
	  ```sh
	  git branch -d <branch-name>
	  ```

## Additional Notes
- Use the VS Code Source Control panel to manage commits and sync changes.
- Always create a new branch before making major changes.
- Document your workflow and automate repetitive tasks for efficiency.

---

Feel free to update this README with more details as you progress through the exercise.
