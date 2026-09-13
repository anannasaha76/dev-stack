Project Name:Dev Stack

📌 About The Project

Dev Stack is an interactive technology stack builder developed with React and TypeScript. It allows users to explore different technologies and create their own personalized development stack by adding and removing technologies in real time.

The project provides a simple, clean, and responsive interface for discovering technologies and managing a custom stack.

✨ Features
🧩 Custom Stack Builder

Users can create their own personalized technology stack by adding and removing technologies. Duplicate entries are automatically prevented, and changes are reflected instantly.

🔔 Smart Toast Notifications

Users receive immediate feedback through toast notifications when they add, remove, or clear technologies from their stack.

💻 Technology Explorer

Users can explore different technologies along with useful information such as their category, description, difficulty level, rating, and badge.

🛠️ Technologies Used
React + TypeScript — Building the user interface
Tailwind CSS — Styling and responsive layout
React-Toastify — Toast notifications
Vite — Development and build tool
React Icons — Icons
JSON — Storing technology data
📸 Project Preview

⚛️ React Questions & Answers
1. What is JSX, and why is it used in React?
JSX is a syntax that allows us to write HTML like code inside JavaScript or TypeScript. React uses JSX to make it easier to create and understand UI components.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState allows a component to store and update data. I used it in App.tsx to store the selected technologies in the user's stack.The user's selected technologies and update the stack when technologies are added or removed.

const [stack, setStack] = useState<TechnologyStacksType[]>([]);
4. What does the useEffect hook do, and why did you need it to load the JSON data?

I did not use useEffect in this project. Instead, I used use() with Suspense to handle the Promise and load the technology data from the JSON file.

5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in a list. It allows React to efficiently understand which items were added, removed, or changed.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

I used it to show a message when the stack is empty:

{stack.length === 0 ? (
    <p>  Your stack is empty.</p>
) : (
    // Selected technologies
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send information back by calling a function that the parent passes as a prop.

In this project, App.tsx passes stack and handleAddStack to TechCard:

<TechCard
    stack={stack}
    handleAddStack={handleAddStack}
/>

When a user adds a technology, TechCard calls handleAddStack(), which updates the state in App.tsx.
