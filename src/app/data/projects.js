// src/app/data/projects.js

export const projects = [
    {
      id: "1",
      title: "Project One",
      description: "A website design and branding project.",
      image: "/Image/Image-hero/project1.jpg",  // Image reference
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: "2",
      title: "Project Two",
      description: "An app development and UI/UX project.",
      image: "/Image/Image-hero/project2.jpg",
      technologies: ["React Native", "Node.js", "MongoDB"],
    },
    {
      id: "3",
      title: "Project Three",
      description: "A photography and branding project.",
      image: "/Image/Image-hero/project3.jpg",
      technologies: ["Photography", "Photoshop", "Illustrator"],
    },
    // Add more projects as needed
  ];

  // Helper function to get a project by ID
  export const getProjectById = (id) => {
    return projects.find((project) => project.id === id);
  };
