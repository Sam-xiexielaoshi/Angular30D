# 📅 Day 3 – To-Do List App | 30 Days Angular Challenge

Welcome to **Day 3** of the Angular Challenge!  
Today, we’ll build a **To-Do List App** where users can add and remove tasks interactively.

---

## 🎯 Project Overview

This project focuses on:

- ✅ Using Angular’s structural directives like `*ngIf` and `*ngFor`
- ✅ Understanding how to manipulate lists dynamically using JavaScript methods
- ✅ Handling basic form interactions

---

## 🧠 Angular Concepts Covered

| Concept          | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `*ngIf`          | Conditionally renders DOM elements based on boolean expressions             |
| `*ngFor`         | Iterates over arrays to generate elements dynamically                       |
| `[(ngModel)]`    | Two-way data binding for real-time updates to inputs                        |
| `(click)` & `(keyup.enter)` | Event binding for button clicks and keyboard input                |
| `[ngClass]`      | Dynamically applying CSS classes based on component logic                   |

---

## 🧱 Project Structure

```kotlin

todo/
├── src/
│ └── app/
│ ├── todo-list/
│ │ ├── todo-list.html
│ │ ├── todo-list.scss
│ │ └── todo-list.ts
│ ├── app.html
│ ├── app.ts
│ ├── app.config.ts
│ ├── app.routes.ts
│ └── index.html
├── angular.json
├── package.json
├── tsconfig.json
└── README.md

```

---

> 🧠 Your logic lives in `todo-list.ts`  
> 🎨 Your UI and bindings are in `todo-list.html` and `todo-list.scss`

---

## 🧪 Features

- 📋 Add tasks using input box and Enter key or Add button
- 🗑️ Remove tasks via Remove button or keyboard backspace
- ⚠️ Display error if input is empty
- 👀 Show a message when there are no tasks

---

## 📄 Example Code Snippet

```html
<input
  type="text"
  [(ngModel)]="newTask"
  placeholder="Enter new task"
  (keyup.enter)="addTask()"
/>

<ul>
  <li *ngFor="let task of tasks; let i=index">
    {{ task }}
    <button (click)="removeTask(i)">Remove</button>
  </li>
</ul>
```

---

## 🚀 Getting Started

### 1. Clone the project
```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

### 2. Install Dependencies
```bash
npm install 
```

### 3. Run the app
```bash
ng serve
```

---

🔗 Open http://localhost:4200 in your browser.

---

## ✅ Outcome

By the end of this project, you’ll have learned to:

- ✅ Use Angular structural directives like `*ngIf` and `*ngFor`
- ✅ Add interactivity with event binding and form handling
- ✅ Dynamically update lists using JavaScript’s `push()` and `splice()` methods

---

💡 **Tip:** Don’t worry if you don’t fully grasp `.splice()` and `.push()` — these are JavaScript basics and will become more familiar with practice.

---

🎉 **Great work completing Day 3!**  
Tomorrow, we’ll explore more dynamic Angular features and component interaction!
