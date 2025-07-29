//Profile Image
import profileImage from './assets/Profile_Large.jpg'

// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reactrouterLogo from './assets/tech_logo/reactrouter.png'
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import sqliteLogo from './assets/tech_logo/sqlite.png';
import appwriteLogo from './assets/tech_logo/appwrite.png'
import cppLogo from './assets/tech_logo/cpp.png';
import cLogo from './assets/tech_logo/c.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Project Section Logo's
import algovizSnap from './assets/project_images/Algo_Viz.png';
import blogappSnap from './assets/project_images/Blog_App.png';
import fruitslasherSnap from './assets/project_images/Fruit_Slasher.png';

// Experience Section Logo's
import daboticsLogo from './assets/work_exp_logo/dabotics.png';
import edunetLogo from './assets/work_exp_logo/edunet.jpg';
import nxtwaveExpLogo from './assets/work_exp_logo/nxtwave.jpg';

// Education Section Logo's
import nxtwaveEduLogo from './assets/education_logo/nxtwave.jpg';
import rbsetcLogo from './assets/education_logo/rbsetc.png';



export const aboutInfo = [
    {
        name: "Mohammad Zaid",

        roles: [
            ' Frontend Developer',
            ' Software Engineer',
            ' React Developer',
        ],

        aboutMe: "I'm a Computer Science graduate and aspiring full-stack developer with a passion for building clean, user-friendly web applications. With a strong foundation in frontend development and hands-on experience through real-world projects, I'm constantly learning and evolving to craft efficient, scalable, and engaging digital solutions.",

        resumeLink: "https://drive.google.com/file/d/15kcAQGvAnZm5N3djf8n1HTIokoC0f9pG/view?usp=sharing",

        linkedinLink: "https://www.linkedin.com/in/mohammadzaid07/",

        githubLink: "https://github.com/mohammadzaid07",

        leetcodeLink: "https://leetcode.com/mohammadzaid07/",

        geeksforgeeksLink: "https://auth.geeksforgeeks.org/user/mohammadzaid07",

        hackerrankLink: "https://www.hackerrank.com/profile/mohammadzaid07",

        profilePic: profileImage,
    }
];

export const skillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React.js', logo: reactjsLogo },
            { name: 'React Router', logo: reactrouterLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', logo: nodejsLogo },
            { name: 'Express.js', logo: expressjsLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'SQLite', logo: sqliteLogo },
            { name: 'Appwrite', logo: appwriteLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C++', logo: cppLogo },
            { name: 'C', logo: cLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Vercel', logo: vercelLogo },
        ],
    },
];

export const projects = [
    {
        id: 0,
        title: "Blog App",
        description:
            "Built a full-stack blog platform using React, Redux, and Appwrite. Implemented rich text post creation with TinyMCE, image uploads, and user-specific post filtering. Integrated Appwrite Authentication and Storage with a responsive UI powered by TailwindCSS. Deployed using Vite and Vercel. Demonstrated skills in full-stack integration, state management, and dynamic frontend design.",
        image: blogappSnap,
        tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "JavaScript", "React-Hook-Form", "Appwrite", "TinyMCE", "Vercel",],
        github: "https://github.com/mohammadzaid07/myblog-appwrite",
        livelink: "https://myblog-appwrite.vercel.app/",
    },
    {
        id: 1,
        title: "Fruit Slasher Game",
        description:
            "Developed an interactive fruit-clicking game using HTML, CSS, and JavaScript, featuring real-time score tracking, dynamic fruit generation, and a countdown timer. Demonstrated core DOM manipulation, event handling, and game logic.",
        image: fruitslasherSnap,
        tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Game Logic"],
        github: "https://github.com/mohammadzaid07/Fruit-Slasher",
        livelink: "https://mohammadzaid07.github.io/Fruit-Slasher",
    },
    {
        id: 2,
        title: "Algo Viz",
        description:
            "Web application visualizing algorithms using interactive animations. Demonstrates different sorting algorithms. Seamless integration of HTML, CSS, Bootstrap, and JavaScript. An educational tool for students, educators, and coding enthusiasts. User-friendly interface for an immersive learning experience. Highlights the synergy between Algorithms, and Developer Experience.",
        image: algovizSnap,
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Algorithms"],
        github: "https://github.com/mohammadzaid07/Algo-Viz",
        livelink: "https://mohammadzaid07.github.io/Algo-Viz",
    },

];

export const experiences = [
    {
        id: 0,
        img: daboticsLogo,
        role: "Web Developer Intern",
        company: "Dabotics India Pvt. Ltd.",
        date: "August 2023 - September 2023",
        desc: "Built responsive web projects using HTML, CSS, and JavaScript. Gained hands-on experience in creating interactive UI elements and deepened understanding of core frontend development concepts.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
        ],
    },
    {
        id: 1,
        img: edunetLogo,
        role: "AI Intern",
        company: "Edunet Foundations",
        date: "June 2023 - July 2023",
        desc: "A Six Week Internship program in Artificial Intelligence, provided by IBM SkillsBuild, Edunet Foundations, and AICTE Internships. Build a Mental Fitness tracking model.",
        skills: [
            "Python",
            "AI",
            "ML",
        ],
    },
    {
        id: 2,
        img: nxtwaveExpLogo,
        role: "Teaching Assistant",
        company: "NxtWave",
        date: "February 2023 - August 2023",
        desc: "Assisted learners in grasping the fundamentals of HTML, CSS, and JavaScript. Helped early learners transition into frontend development through structured guidance.",
        skills: [
            "HTML",
            "CSS",
            "Javascript",
        ],
    },
];

export const education = [
    {
        id: 0,
        img: nxtwaveEduLogo,
        institute: "NxtWave",
        date: "July 2024 - Present",
        grade: "In Progress",
        desc: "I’m currently enrolled in the CCBP 4.0 Intensive Program at NxtWave, focused on mastering Full Stack Web Development with the MERN stack. Through hands-on projects and structured learning, I’ve gained practical skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and database handling. This program has significantly strengthened my frontend and backend development capabilities, along with Git, GitHub, and deployment tools.",
        course: "Full Stack Development",
    },
    {
        id: 1,
        img: rbsetcLogo,
        institute: "Raja Balwant Singh Engineering Technical Campus, Agra",
        date: "October 2021 - June 2024",
        grade: "7.92",
        desc: "I pursued my B.Tech in Computer Science and Engineering through lateral entry, building on my prior diploma experience. During my degree, I focused on foundational CS subjects like C, C++, Python, Data Structures, DBMS, Operating Systems, and Web Development. I also led and contributed to several academic and personal projects, participated in technical events, and served as a student coordinator in college societies.",
        course: "Bachelor of Technology - Computer Science and Engineering",
    },
];

