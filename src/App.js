import React, { useEffect } from "react";
import Todo from "./components/Todo/Todo";
import Card from "./common/Card";
import Sticky from "./components/Tailwind/Sticky";
import Charts from "./components/Charts/Charts";
import jokes from "./Data/jokes";
import { useTheme } from "./common/ThemeContext";
import ThemeToggle from "./common/ThemeToggle";

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = `${theme}-mode`;
    console.log("Applied class:", document.body.className); // This should log the correct class application
  }, [theme]);

  const projects = [
    {
      title: "Todo App",
      description: "A simple todo application.",
      content: <Todo />,
    },
    {
      title: "Tailwind",
      description: "Enjoy humorous sticky notes.",
      content: <Sticky jokes={jokes} />,
    },
    {
      title: "Chart",
      description: "Visual data representations.",
      content: <Charts />,
    },
  ];

  return (
    <div className="bg-blue-100 min-h-screen p-10">
      <ThemeToggle />
      <div className="container mx-auto">
        {/* <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            color: "navy",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Welcome to My Portfolio
        </h1> */}
        <h1 className="text-center text-4xl font-bold text-navy-800 my-4">
          Discover My ReactJS & Tailwind Creations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              content={project.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
