# ⏱️ Angular Stopwatch App

A beginner-friendly stopwatch application built using **Angular**.  
It demonstrates how to manage component state, bind events, and display dynamic content with formatting.

---

## 📌 Project Description

In this project, we will build a simple stopwatch using Angular. It includes the following features:

- ✅ Start and stop time tracking.
- ✅ Display the **elapsed time** with **one decimal place precision**.
- ✅ **Reset** the stopwatch to zero.
- ✅ **Toggle** between start and stop dynamically.

> I hope you will enjoy it, so let's get right into it!

---

## 📁 Project Structure

```kotlin
Stopwatch/
├── src/
│ └── app/
│ ├── stopwatch/
│ │ ├── stopwatch.html
│ │ ├── stopwatch.scss
│ │ └── stopwatch.ts
│ ├── app.config.ts
│ ├── app.routes.ts
│ ├── app.html
│ ├── app.scss
│ └── app.ts
├── angular.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── README.md
```

---


---

## 🧠 Core Concepts You'll Learn

- ✅ How to create and use Angular **components**
- ✅ Event binding with `(click)`
- ✅ Interval timing using JavaScript's `setInterval()`
- ✅ Conditional rendering using `*ngIf`
- ✅ Display formatting using Angular **pipes**
- ✅ DOM updates based on component state

---

## 🚀 Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/Sam-xiexielaoshi/Angular30D.git
cd stopwatch
```

---

## 2. Install Dependencies
```bash
npm install
```
## 3. Run the app
```bash
ng serve
```

--- 

Open your browser and navigate to:
👉 http://localhost:4200

---

### 🧩 Key Code Concepts

Stopwatch Logic (stopwatch.ts)
```ts
elapsedTime = 0;
isRunning = false;
intervalRef: ReturnType<typeof setInterval> | null = null;

startStop() {
  this.isRunning ? this.stop() : this.start();
}

private start() {
  this.isRunning = true;
  this.intervalRef = setInterval(() => {
    this.elapsedTime += 0.1;
  }, 100);
}

private stop() {
  this.isRunning = false;
  if (this.intervalRef) clearInterval(this.intervalRef);
}

reset() {
  this.isRunning = false;
  if (this.intervalRef) clearInterval(this.intervalRef);
  this.elapsedTime = 0;
}
```

## Formatting Time

We use a simple method and optionally an Angular pipe to format the time to:

```makefile
MM:SS.D
```
```
```

---

# ✅ Outcome

By the end of this project, you will have practiced and applied the following concepts:

- ✅ **Angular component creation**  
  Learn how to build reusable UI blocks using Angular's `@Component`.

- ✅ **Updating the DOM using component state**  
  Dynamically reflect changes in your UI based on data stored in your component's logic.

- ✅ **Basic styling with SCSS**  
  Customize the appearance of your app using scoped SCSS styles.

- ✅ **Working with intervals and timing in JavaScript**  
  Use `setInterval()` and `clearInterval()` to track and manage time-based logic.

- ✅ **UI interactivity using Angular event handling**  
  Respond to user actions like clicks with event bindings like `(click)` and `(keyup)`.

---

# 🎉 Final Words

Great job completing this **Angular Stopwatch App**! 🥳  
This small project is a solid step toward building more interactive and dynamic Angular applications.

> 🚀 **Stay curious, and keep coding!** 💪
```