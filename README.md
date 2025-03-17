Modern Kanban Board

An interactive and responsive Kanban board application featuring smooth animations, intuitive drag-and-drop functionality, and persistent local storage.

Features

Three-Column Layout: Organize tasks into "To Do," "In Progress," and "Completed" columns.
Drag and Drop: Easily move tasks between columns with intuitive drag-and-drop functionality.
Smooth Animations: Enjoy smooth transitions and visual feedback for all interactions.
Local Storage: Tasks persist between browser sessions, ensuring no loss of progress.
Context Menu: Right-click on tasks to edit or delete them for efficient task management.
Mobile Responsive: The application adapts to all screen sizes for an optimized experience on mobile devices.
Visual Feedback: Color-coded columns and tasks with hover effects for an enhanced user experience.
Task Timestamps: Automatically records the date and time for each task creation and update.
Getting Started

Prerequisites

This application requires only a modern web browser (Chrome, Firefox, Safari, Edge, etc.).

Installation

Clone this repository or download the source files:

Bash

git clone https://github.com/ansh0330/Modern-Kanban-Board.git
Open index.html in your web browser.

Usage

Adding Tasks

Enter your task in the input field at the bottom of the desired column.
Click the "Add Task" button or press the Enter key.
The task will be added to the selected column, along with the current timestamp.
Moving Tasks

Click and hold on a task.
Drag it to another column.
Release the task in its new location.
Editing Tasks

Right-click on a task.
Select "Edit Task" from the context menu.
Enter the new task text in the prompt.
The task will be updated with the new text and the current timestamp.
Deleting Tasks

Right-click on a task.
Select "Delete Task" from the context menu.
The task will be removed with a smooth fade-out animation.
Technical Details

Responsive Design:
The application utilizes CSS Grid and Flexbox to ensure responsiveness across various screen sizes. Media queries are used to adjust the layout and font sizes for optimal viewing on mobile devices and tablets.
Context Menu:
The context menu is created using Javascript event listeners that trigger on right mouse clicks. The menu is dynamically created and styled using css.
File Structure
index.html: The main HTML structure.
style.css: Contains styling, using CSS variables for theming.
script.js: Handles all JavaScript functionality.
Key Technologies
Vanilla JavaScript: No dependencies or frameworks required.
CSS3: Modern styling using variables, transitions, and animations.
HTML5 Drag and Drop API: Native drag-and-drop functionality.
Local Storage API: Persistent data storage in the browser, so your tasks are saved even after closing and reopening the browser.
Animation Effects
Column entrance animations on page load.
Task creation and deletion animations for smoother user experience.
Visual cues during drag-and-drop provide clear feedback.
Task count updates with a scaling effect for better visibility.
A shake effect provides visual feedback for input validation errors.
A right-click context menu with fade-in/out effects enhances the user interface.
Contributing

Contributions, including bug fixes and feature enhancements, are welcome. Feel free to fork this repository and submit pull requests.
