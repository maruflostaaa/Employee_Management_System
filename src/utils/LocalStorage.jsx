// localStorage.js

const employees = [
   {
      id: 1,
      firstName: "Abir",
      email: "e@e.com",
      password: "123",

      taskNumbers: {
         active: 1,
         newTask: 1,
         completed: 1,
         failed: 1,
      },

      tasks: [
         {
            id: 101,
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Design Homepage",
            taskDescription: "Create the homepage UI using React and Tailwind CSS.",
            taskDate: "2026-06-05",
            category: "Design"
         },
         {
            id: 102,
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Fix Login Bug",
            taskDescription: "Resolve authentication issue in login form.",
            taskDate: "2026-06-01",
            category: "Development"
         },
         {
            id: 103,
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            taskTitle: "API Integration",
            taskDescription: "Connect frontend with employee API.",
            taskDate: "2026-05-28",
            category: "Backend"
         }
      ]
   },

   {
      id: 2,
      firstName: "Fahim",
      email: "employee2@example.com",
      password: "123",

      taskNumbers: {
         active: 2,
         newTask: 1,
         completed: 1,
         failed: 0,
      },

      tasks: [
         {
            id: 201,
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Create Dashboard",
            taskDescription: "Build employee dashboard components.",
            taskDate: "2026-06-06",
            category: "Development"
         },
         {
            id: 202,
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            taskTitle: "Update Profile Page",
            taskDescription: "Improve profile page responsiveness.",
            taskDate: "2026-06-04",
            category: "UI"
         },
         {
            id: 203,
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Navbar Design",
            taskDescription: "Create responsive navigation bar.",
            taskDate: "2026-05-30",
            category: "Design"
         }
      ]
   },

   {
      id: 3,
      firstName: "Nafis",
      email: "employee3@example.com",
      password: "123",

      taskNumbers: {
         active: 1,
         newTask: 1,
         completed: 1,
         failed: 1,
      },

      tasks: [
         {
            id: 301,
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Write Documentation",
            taskDescription: "Document project setup process.",
            taskDate: "2026-06-07",
            category: "Documentation"
         },
         {
            id: 302,
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Testing",
            taskDescription: "Perform unit testing for login module.",
            taskDate: "2026-05-31",
            category: "Testing"
         },
         {
            id: 303,
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            taskTitle: "Deploy App",
            taskDescription: "Deploy application to production server.",
            taskDate: "2026-05-29",
            category: "DevOps"
         }
      ]
   },

   {
      id: 4,
      firstName: "Shakib",
      email: "employee4@example.com",
      password: "123",

      taskNumbers: {
         active: 2,
         newTask: 1,
         completed: 1,
         failed: 0,
      },

      tasks: [
         {
            id: 401,
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Create Reports",
            taskDescription: "Generate employee performance reports.",
            taskDate: "2026-06-08",
            category: "Analytics"
         },
         {
            id: 402,
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Database Cleanup",
            taskDescription: "Remove duplicate employee records.",
            taskDate: "2026-05-27",
            category: "Database"
         },
         {
            id: 403,
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            taskTitle: "Optimize Queries",
            taskDescription: "Improve database query performance.",
            taskDate: "2026-06-03",
            category: "Database"
         }
      ]
   },

   {
      id: 5,
      firstName: "Mehedi",
      email: "employee5@example.com",
      password: "123",

      taskNumbers: {
         active: 1,
         newTask: 1,
         completed: 1,
         failed: 1,
      },

      tasks: [
         {
            id: 501,
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Customer Support",
            taskDescription: "Handle support tickets from users.",
            taskDate: "2026-06-05",
            category: "Support"
         },
         {
            id: 502,
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Bug Verification",
            taskDescription: "Verify fixed bugs in staging.",
            taskDate: "2026-05-30",
            category: "Testing"
         },
         {
            id: 503,
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            taskTitle: "Security Audit",
            taskDescription: "Review security vulnerabilities.",
            taskDate: "2026-05-25",
            category: "Security"
         }
      ]
   }
];

const admin = [
   {
      id: 1,
      firstName: "Admin",
      email: "admin@example.com",
      password: "123"
   }
];

export const setLocalStorage = () => {
   localStorage.setItem("employees", JSON.stringify(employees));
   localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem("employees"));
   const admin = JSON.parse(localStorage.getItem("admin"));

   return { employees, admin };
};