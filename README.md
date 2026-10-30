# To Do List

A simple and clean To Do List app built with **vanilla JavaScript**, HTML, and CSS, with a glassmorphism-style UI.

## Features

- Add new tasks
- Edit a task inline (press **Enter** or click outside to save)
- Delete tasks
- Mark tasks as completed
- Mark tasks as favorite with the star icon (favorites move to the top, and return to their original place when unstarred)

## Tech Stack

- HTML5
- CSS3 (Flexbox, `order` property, backdrop-filter)
- JavaScript (ES6)
- Font Awesome icons

## What I Practiced

- DOM manipulation (`createElement`, `closest`, `classList`)
- Event delegation: a single listener on the container handles dynamic elements
- Using CSS `order` to reorder items without moving them in the DOM
- Handling `focusout` and `keydown` events for inline editing

## Getting Started

```bash
git clone https://github.com/<your-username>/todo-list-app.git
cd todo-list-app
```

Then open `index.html` in your browser. No build step or dependencies needed.

## Project Structure

```
todo-list-app/
├── index.html
└── assets/
    ├── plugins/fontawesome/
    └── src/
        ├── css/style.css
        └── js/index.js
```

## Future Improvements

- Save tasks with `localStorage`
- Filter tasks (all / completed / favorites)
- Dark / light mode toggle

## Author

**Mohamed**: Frontend Developer
