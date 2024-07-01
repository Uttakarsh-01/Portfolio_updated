import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I'm a passionate Computer Science and Engineering student, graduated from Gandhi Institute for Engineering and Technology in Gunupur, with a strong academic background and a zest for innovation.I'm excited to share my journey and projects with you, reflecting my dedication to creating impactful solutions and pushing the boundaries of what's possible in the tech world. 🚀`;

export const ABOUT_TEXT = `Hello! I’m a passionate Computer Science and Engineering graduate from GIET University  in Gunupur,Odisha,maintaining a CGPA of 8.91. My education has equipped me with a solid foundation in both theoretical and practical aspects of computer science.

Proficient in Python, C/C++, JavaScript, and PHP, with hands-on experience in web development using Django and Flask frameworks. Skilled in machine learning libraries like TensorFlow, scikit-learn, NumPy, and pandas.Familiar with HTML/CSS for frontend development and proficient in SQL and Firebase for database management. Additionally, often practice coding questions on various platforms and a adept problem solver.

I have gained hands-on experience through internships, including my role as a Software Developer Intern at DePronto Infotech, where I worked on projects for leading private banks in India.I actively participate in coding challenges on platforms like LeetCode and HackerRank, where I have solved over 250 problems and achieved a 5-star rating. I am also involved in extracurricular activities and hold certifications like AWS Cloud Practitioner Essentials.`;

export const EXPERIENCES = [
  {
    year: "Dec 2023 - April 2024",
    role: "Software Developer Intern",
    company: "DePronto Infotech.",
    description: `I've contributed to various projects for major private banks in India, focusing on resolving issues promptly to maintain high client satisfaction. By optimizing code and writing efficient scripts, I improved application performance by up to 30%. I maintain open communication with clients to understand and meet their evolving needs.`,
    technologies: ["Javascript", "jQuery", "MSSQL","Docker","ReactJs", "PHP Frameworks"],
  },
  {
    year: "Oct 2022 - Dec 2022",
    role: "Salesforce Developer Intern (AICTE Virual Internship)",
    company: "Smartbridge",
    description: `Completed an eight-week online internship with SmartBridge, in collaboration with AICTE. My tasks included completing modules on the Trailhead platform, where I successfully finished all trails. I earned the Apex Specialist Badge and Process Automation Specialist Super Badge, gaining practical skills in Salesforce CRM through hands-on learning.`,

    technologies: ["Salesforce", "Trailshead", "Apex", "Salesforce Lightning"],
  },
  {
    year: "May 2022 - June 2022",
    role: "Data Analyst Intern",
    company: "Lagozon Edtech Private Limited",
    description: `Completed a six-week training and internship program where I received training in MySQL, focusing on topics like Joins, relations, and basic commands. I acquired knowledge of Power BI, including various visualizations, and learned about DAX functions and Power Query. I  implemented machine learning algorithms within the Power BI, and successfully presented a project based on these topics.`,

    technologies: ["Python", "PowerBI", "Machine Learning","SQL"],
  }

];

export const PROJECTS = [
  {
    title: "Bharataya Rescue",
    image: project1,
    description:
      "An innovative project designed to reunite missing individuals with their loved ones. Built using latest face recognition technology, it ensures an efficient and seamless user experience. The project also features notification functionality to alert users if a missing person is found.",
    technologies: ["HTML", "CSS", "Javascript", "OpenCV", "Django","Sqlite"],
    github : "https://github.com/thegeek36/Missing-Person-Detection-System",
    live : "#" ,
  },
  {
    title: "MyRecipes.com",
    image: project2,
    description:
      "Designed and developed a dynamic web application where food enthusiasts can share and explore a wide variety of delectable recipes. The platform features full CRUD operations, user profiles, and interactive functionalities, including comments and ratings for user engagement.",
    technologies: ["HTML", "CSS", "sqlite", "Django"],
    github : "https://github.com/thegeek36/Recipe-App",
    live : "#" ,
  },
  {
    title: "Multiple Disease Prediction",
    image: project3,
    description:
      "Created a user-friendly web app to predict Diabetes, Heart Disease, and Parkinson's Disease. The app is deployed online using Streamlit and employs various machine learning algorithms to provide accurate predictions.",
    technologies: ["HTML", "Tailwind Css", "React",],
    github : "https://github.com/thegeek36/Multiple-Disease-Prediction",
    live : "#" ,
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind Css", "React",],
    github : "https://github.com/thegeek36/My-React-Portfolio",
    live : "#" ,
  },
];

export const CONTACT = {
  address: "Rourkela,Odisha,India",
  phoneNo: "+91 9938082211",
  email: "priyanshupanda36@gmail.com",
};