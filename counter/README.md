# 📅 Day 2 – Counter App | 30 Days Angular Challenge

Welcome to **Day 2** of the **30 Days Angular Challenge**! 🚀

Today’s mini-project is a **Counter App**, focused on building a reusable Angular component and learning **event binding**.

---

## 🎯 Project Overview

In this project, we build a **simple counter** application with the ability to:

- ➕ Increment the count
- ➖ Decrement the count (even into negative numbers)
- 👆 Handle user events like button clicks

---

## 🧠 Angular Concepts Covered

| Concept         | Description                                                              |
|-----------------|--------------------------------------------------------------------------|
| **Event Binding** | Use of `(click)` events to trigger functions in the component class     |
| **Component Structure** | Create and use a dedicated `CounterComponent` inside the app       |

---

## 🧱 Project Structure

```markdown

counter/
├── src/
│ └── app/
│ ├── counter/
│ │ ├── counter.html
│ │ ├── counter.scss
│ │ ├── counter.ts
│ │ └── counter.spec.ts
│ ├── app.html
│ ├── app.routes.ts
│ ├── app.ts
│ ├── app.config.ts
│ ├── app.scss
│ └── index.html
├── angular.json
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

> ✅ Your `counter.ts` file is the component's TypeScript logic  
> ✅ `counter.html` holds the template  
> ✅ `counter.scss` contains the styling

---

## ▶️ Features

- 📈 **Increment Button**: Adds 1 to the current count
- 📉 **Decrement Button**: Subtracts 1 (can go into negative values)
- 🔁 **Live Display** of the counter value

---

## 🛠️ Tech Stack

- **Angular**
- **TypeScript**
- **HTML**
- **SCSS**

---

## 🚀 Getting Started

1. Clone the repo:

```bash
git clone https://github.com/Sam-xiexielaoshi/Angular30D.git
cd counter

---

## Install dependencies
npm install

## Run the app
ng serve

Vist: http://localhost:4200/

---

## ✅ Outcome

By the end of this project, you’ll understand how to:

- ✅ Handle user events using Angular's `(click)` event binding
- ✅ Structure your project with reusable Angular components
- ✅ Dynamically update data in the view through component logic

---

💪 **Keep going strong!**  
Tomorrow we explore more Angular features like **Directives** and **Conditional Rendering**!
