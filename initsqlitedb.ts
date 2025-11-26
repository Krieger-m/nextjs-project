const sql = require('better-sqlite3');
const db = sql('technologies-test.db');

const dummyTechnologies = [
  {
    title: 'JavaScript',
    slug: 'javascript',
    image: 'http://localhost:1337/uploads/javascript_image_3e7374bfbc.png',
    summary:
      'A versatile programming language primarily used for web development, enabling interactive and dynamic websites.',
    instructions: `
      1. Learn the basics:
         Understand variables, functions, and control structures.

      2. Explore DOM manipulation:
         Use JavaScript to interact with and modify web pages.

      3. Practice asynchronous programming:
         Work with promises, async/await, and APIs.

      4. Build projects:
         Create small applications to strengthen your skills.
    `,
    creator: 'Brendan Eich',
    creator_email: 'brendan@example.com',
  },
  {
    title: 'Python',
    slug: 'python',
    image: 'http://localhost:1337/uploads/python_image_d803f82ff3.png',
    summary:
      'A high-level programming language known for its readability and wide use in data science, AI, and web development.',
    instructions: `
      1. Install Python:
         Download and install from the official website.

      2. Learn syntax:
         Practice with loops, conditionals, and functions.

      3. Explore libraries:
         Use packages like NumPy, Pandas, and Flask.

      4. Build projects:
         Automate tasks or create web apps.
    `,
    creator: 'Guido van Rossum',
    creator_email: 'guido@example.com',
  },
  {
    title: 'React',
    slug: 'react',
    image: 'http://localhost:1337/uploads/react_image_379fe2e684.png',
    summary:
      'A popular JavaScript library for building user interfaces, especially single-page applications.',
    instructions: `
      1. Set up environment:
         Install Node.js and create a React project.

      2. Learn components:
         Build reusable UI elements with JSX.

      3. Manage state:
         Use hooks like useState and useEffect.

      4. Deploy:
         Publish your app using services like Vercel or Netlify.
    `,
    creator: 'Jordan Walke',
    creator_email: 'jordan@example.com',
  },
  {
    title: 'Docker',
    slug: 'docker',
    image: 'http://localhost:1337/uploads/docker_image_8c7ebeb1dc.png',
    summary:
      'A platform for developing, shipping, and running applications inside containers.',
    instructions: `
      1. Install Docker:
         Download Docker Desktop for your OS.

      2. Create a Dockerfile:
         Define the environment for your app.

      3. Build and run containers:
         Use docker build and docker run commands.

      4. Share images:
         Push to Docker Hub for collaboration.
    `,
    creator: 'Solomon Hykes',
    creator_email: 'solomon@example.com',
  },
  {
    title: 'Kubernetes',
    slug: 'kubernetes',
    image: 'http://localhost:1337/uploads/kubernetes_image_909303f02a.png',
    summary:
      'An open-source system for automating deployment, scaling, and management of containerized applications.',
    instructions: `
      1. Install kubectl:
         Set up the Kubernetes command-line tool.

      2. Create a cluster:
         Use Minikube or a cloud provider.

      3. Deploy applications:
         Define deployments and services in YAML files.

      4. Scale and monitor:
         Adjust replicas and monitor cluster health.
    `,
    creator: 'Google Engineers',
    creator_email: 'google@example.com',
  },
  {
    title: 'Node.js',
    slug: 'nodejs',
    image: 'http://localhost:1337/uploads/node_image_e590f2df7a.png',
    summary:
      'A JavaScript runtime built on Chrome’s V8 engine, enabling server-side development with JavaScript.',
    instructions: `
      1. Install Node.js:
         Download from the official site.

      2. Learn modules:
         Use built-in and npm packages.

      3. Build APIs:
         Create RESTful services with Express.js.

      4. Deploy:
         Host on platforms like Heroku or AWS.
    `,
    creator: 'Ryan Dahl',
    creator_email: 'ryan@example.com',
  },
  {
    title: 'Git',
    slug: 'git',
    image: 'http://localhost:1337/uploads/git_image2_4107698711.png',
    summary:
      'A distributed version control system for tracking changes in source code during software development.',
    instructions: `
      1. Install Git:
         Download and configure with your username and email.

      2. Initialize repository:
         Use git init to start tracking a project.

      3. Commit changes:
         Stage files and commit with meaningful messages.

      4. Collaborate:
         Push and pull from remote repositories like GitHub.
    `,
    creator: 'Linus Torvalds',
    creator_email: 'linus@example.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS technologies (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO technologies VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const tech of dummyTechnologies) {
    stmt.run(tech);
  }
}

initData();