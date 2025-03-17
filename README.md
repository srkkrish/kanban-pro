Modern Kanban Board
A sleek, responsive Kanban board application with smooth animations, drag-and-drop functionality, and local storage persistence.

Features
Three-Column Layout: Organize tasks in "To Do", "In Progress", and "Completed" columns
Drag and Drop: Easily move tasks between columns
Animations: Smooth transitions and visual feedback for all interactions
Local Storage: Tasks persist between browser sessions
Context Menu: Right-click on tasks to edit or delete them
Mobile Responsive: Works on all screen sizes
Visual Feedback: Color-coded columns and tasks with hover effects
Task Timestamps: Automatic date and time recording for each task
Getting Started
Prerequisites
No special prerequisites are needed. This application runs in any modern web browser.

Installation
Clone this repository or download the source files

git clone https://github.com/ansh0330/Modern-Kanban-Board.git
Open index.html in your preferred web browser

Usage
Adding Tasks
Type your task in the input field at the bottom of any column
Click the "Add Task" button or press Enter
The task will appear in the selected column with the current timestamp
Moving Tasks
Click and hold on a task
Drag it to another column
Release to drop the task in its new location
Editing Tasks
Right-click on a task
Select "Edit Task" from the context menu
Enter the new task text in the prompt
The task will update with the new text and a current timestamp
Deleting Tasks
Right-click on a task
Select "Delete Task" from the context menu
The task will be removed with a fade-out animation
Technical Details
File Structure
index.html - Main HTML structure
style.css - Styling with CSS variables for theming
script.js - JavaScript functionality
Key Technologies
Vanilla JavaScript: No dependencies or frameworks required
CSS3: Modern styling with variables, transitions, and animations
HTML5 Drag and Drop API: Native drag and drop functionality
Local Storage API: Browser-based data persistence
Animation Effects
Column entrance animations on page load
Card creation and deletion animations
Drag and drop visual feedback
Task count updates with scaling effect
Input validation shake effect
Right-click context menu with fade effects
