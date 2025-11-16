const PORTFOLIO = "Portfolio";
const NAME = "Aditya Prajapati";
const OCCUPATION = "Software Engineer";
const BLOCKS = ["Experience", "Education", "Skills", "Projects", "Achievements"];
const EDUCATION = [
  {
    "title": "Delhi Technological University (DTU), formerly DCE",
    "subtitle": "Software Engineering, Bachelor of Technology | 2021 - 2025 <br> CGPA: <strong>8.78</strong> / 10",
    "img": "static/dtu_img.jpg"
  },
  {
    "title": "Panchsheel Public School, Delhi",
    "subtitle": "PCM with Computer Science, Class XII (CBSE Board) | 2020 - 2021 <br> <strong>87 % </strong>",
    "img": "static/pps_img.webp"
  },
  {
    "title": "Green Valley Public School, Delhi",
    "subtitle": "Class X (CBSE Board) | 2018 - 2019 <br> <strong>89 % </strong>",
    "img": "static/gvps_img.jpeg"
  },
]
const EXPERIENCE = [
  {
    "title": "Naukri.com (Info Edge)",
    "subtitle": `Software Engineer | July 2025 - Present`,
    "desc": `<strong>Service Map Implementation</strong>: Developed an interactive Service Map to visualize runtime dependencies across company services and infrastructure components (e.g. Redis, Kafka, MongoDB, Cassandra), replicating Elastic APM’s Service Map feature in-house to enhance system observability. <br><br> <strong>Backend Architecture</strong>: Built a Python service to ingest trace data from Elasticsearch/Elastic APM, normalize span/parent relationships to reconstruct service call hierarchies and delivered structured graph data to power the visualization. <br><br>  <strong>Cross-team Adoption & Impact</strong>: Actively used by <strong>10+</strong> engineering teams to monitor service interactions, accelerate RCA, troubleshoot issues and gain visibility into runtime dependencies.`,
    "img": "static/infoedge_img.jpg"
  },
  {
    "title": "Neoteric Analytics",
    "subtitle": `Web Development Intern | Feb 2024 - May 2024 <br> &nbsp; <a target="_blank" href="https://drive.google.com/file/d/1JHLCJsQPbaZ8Kcb8P_772Gzed4PeRbnJ/view" className="">LOR</a> <a target="_blank" href="https://drive.google.com/file/d/1aJZ5mGyu5RQwZ4TBMCHuu3f1bHZGO19s/view" className="">Certificate</a> `,
    "desc": `<strong>Dashboard Development</strong>: Built a dynamic dashboard solution with toggleable chart types (e.g. pie, line, bar), integrated with SQL Server using optimized queries, client-side caching and debounced updates to ensure fast, scalable data rendering. <br><br> <strong>UI/UX Improvements</strong>: Revamped <strong>5+</strong> core interface components including login flows, charts and data tables. Resolved key UI inconsistencies, delivering a more intuitive, visually consistent and reliably smooth user experience.`,
    "img": "static/na_img.jpeg"
  }
]
const SKILLS = [
  {
    "title": "Problem Solving",
    "img": "static/problem_img.png"
  }, 
  {
    "title": "C",
    "img": "static/c_img.svg"
  },
  {
    "title": "C++",
    "img": "static/cpp_img.png"
  },
  {
    "title": "HTML",
    "img": "static/html_img.png"
  },
  {
    "title": "CSS",
    "img": "static/css_img.png"
  },
  {
    "title": "Javascript",
    "img": "static/javascript_img.png"
  },
  {
    "title": "Java",
    "img": "static/java_img.png"
  },
  {
    "title": "Python",
    "img": "static/python_img.png"
  },
  {
    "title": "React",
    "img": "static/react_img.png"
  },
  {
    "title": "Tailwind",
    "img": "static/tailwind_img.png"
  },
  {
    "title": "Bootstrap",
    "img": "static/bootstrap_img.png"
  },
  {
    "title": "Spring Boot",
    "img": "static/springboot_img.png"
  },
  {
    "title": "Node",
    "img": "static/node_img.svg"
  },
  {
    "title": "Mysql",
    "img": "static/mysql_img.png"
  },
  {
    "title": "MongoDB",
    "img": "static/mongo_img.png"
  },
  {
    "title": "Elasticsearch",
    "img": "static/elastic_img.png"
  },
  {
    "title": "VS Code",
    "img": "static/vscode_img.png"
  },
  {
    "title": "Pycharm",
    "img": "static/pycharm_img.png"
  },
  {
    "title": "Cursor IDE",
    "img": "static/cursor_img.png"
  },
  {
    "title": "Git",
    "img": "static/git_img.png"
  },
  {
    "title": "Agile Development",
    "img": "static/agile_img.png"
  },
  {
    "title": "Ownership",
    "img": "static/ownership_img.png"
  },
  {
    "title": "Teamwork",
    "img": "static/teamwork_img.png"
  },
  {
    "title": "Time management",
    "img": "static/time_img.png"
  },
]
const PROJECTS = [
  {
    "title": "Engage",
    "subtitle": `Node | React | MongoDB | Bootstrap | Passport <br> &nbsp;&nbsp; <a target="_blank" href="https://engageapp.vercel.app/" className="">Live</a> <a target="_blank" href="https://github.com/Aditya-Prajapati/Engage-frontend" className="">Github</a>`,
    "desc": "Developed a feature-rich social media platform. Implemented advanced content creation capabilities (text and voice posts), multi-account management, dark mode, search functionality and authentication via Passport. Emphasized on responsive design, resulting in significant website visits and active user interactions.",
    // "img": "static/engage_img.png"
    "video": "static/engage_video.mp4"
  },
  {
    "title": "Process Flow Visualizer",
    "subtitle": `Tailwind | Node | Express | React <br> &nbsp; <a target="_blank" href="https://process-visualizer-frontend.vercel.app/" className="">Live</a> <a target="_blank" href="https://github.com/Aditya-Prajapati/ProcessFlowVisualizer-frontend" className="">Github</a>`,
    "desc": "Interactive platform for simulating and comparing OS process scheduling algorithms (FCFS, SJF, Priority Scheduling, Round Robin) that is used <strong>250+</strong> times for coursework. Users can input data to dynamically simulate process scheduling, generating a Gantt chart and detailed process table; compare algorithms to pick the most optimal.",
    // "img": "static/pfv_img.png"
    "video": "static/pfv_video.mp4"
  },
]
const ACHIEVEMENTS = [
  {
    "title": "<strong>1786</strong>",
    "subtitle": `&nbsp;&nbsp;&nbsp; <a target="_blank" href="https://leetcode.com/u/Aditya_Prajapati/" className="">Leetcode</a>`,
    "img": "static/leetcode_img.png"
  },
  {
    "title": "<strong>1605</strong>",
    "subtitle": `&nbsp;&nbsp;&nbsp; <a target="_blank" href="https://www.codechef.com/users/aditya_cc0" className="">Codechef</a>`,
    "img": "static/codechef_img.png"
  },
  {
    "title": "<strong>1231</strong>",
    "subtitle": `&nbsp;&nbsp;&nbsp; <a target="_blank" href="https://codeforces.com/profile/aditya_cf0" className="">Codeforces</a>`,
    "img": "static/codeforces_img.png"
  },
  {
    "title": "Global rank - <strong>393</strong>",
    "subtitle": `&nbsp; <a target="_blank" href="https://www.codechef.com/rankings/START141C?itemsPerPage=100&order=asc&page=1&search=aditya_cc0&sortBy=rank" className="">CC starters 141c</a>`,
    "img": "static/star_img.png"
  },
  {
    "title": "Under top <strong>10%</strong>",
    "subtitle": `&nbsp; <a target="_blank" href="https://leetcode.com/contest/weekly-contest-401/ranking/136/?region=global_v2" className="">LC weekly 401</a>`,
    "img": "static/star_img.png"
  },
  {
    "title": "<strong>1000+</strong>",
    "subtitle": "DSA problems solved",
    "img": "static/trophy_img.png"
  },
]
const FOOTER = [
  {
    "title": "Resume",
    "url": "https://drive.google.com/file/d/1DzbUSl0HNzVMgM-yIjZ8PPHwgyfAfigp/view?usp=drive_link"
  },
  {
    "title": "Email",
    "url": "mailto:adityaprajapati28@gmail.com"
  },
  {
    "title": "Phone",
    "url": "tel:+919311621812"
  },
  {
    "title": "LinkedIn",
    "url": "https://www.linkedin.com/in/aditya-prajapati-/"
  },
  {
    "title": "Github",
    "url": "https://github.com/Aditya-Prajapati"
  },
]

let selectedBlock = 0;

document.querySelector("#title").innerHTML = `${PORTFOLIO} - ${NAME}`;
document.querySelector(".intro .name").innerHTML = NAME;
document.querySelector(".intro .occupation").innerHTML = OCCUPATION;

for (let num = 0; num < BLOCKS.length; num++) {
  let h3 = document.createElement("h3");
  h3.className = `block-title block-title${num}`;
  let span = document.createElement("span");
  span.innerHTML = BLOCKS[num];
  span.onclick = () => activateBlock(num);
  
  h3.appendChild(span);
  document.querySelector(".content .blocks-title").appendChild(h3);
}

for (let num = 0; num < FOOTER.length; num++){
  let a = document.createElement("a");
  a.className = `footer-link footer-link${num}`;
  a.innerHTML = FOOTER[num].title;
  a.href = FOOTER[num].url;
  a.target = "_blank"

  document.querySelector("#footer").appendChild(a);
}

const generateListItems = (list) => {
  let items = [];
  for (let num = 0; num < list.length; num++){
    let item = document.createElement("div");
    item.className = `item item${num}`;

    let itemContent = document.createElement("div");
    itemContent.className = "item-content";
    
    let imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    
    if (list[num].img !== undefined){
      let img = document.createElement("img");
      img.src = list[num].img;
      img.alt = `${title.innerHTML}_img`;
      imgContainer.appendChild(img);
    }
    else if (list[num].video !== undefined){
      let video = document.createElement("video");
      video.src = list[num].video;
      video.width = "100%";
      video.height = "100%";
      video.autoplay = true;      
      video.muted = true;       
      video.controls = true;    
      video.loop = true;        
      video.playsInline = true; 
      imgContainer.appendChild(video);
    }

    if (list[num].title !== undefined){
      let title = document.createElement("div");
      title.className = "title";
      title.innerHTML = list[num].title;
      itemContent.appendChild(title);
    }
    if (list[num].subtitle != undefined){
      let subtitle = document.createElement("div");
      subtitle.className = "subtitle"
      subtitle.innerHTML = list[num].subtitle;
      itemContent.appendChild(subtitle);
    }
    if (list[num].desc !== undefined) {
      let desc = document.createElement("div");
      desc.className = "desc"
      desc.innerHTML = list[num].desc;
      itemContent.appendChild(desc);
    }
    item.appendChild(itemContent);
    item.appendChild(imgContainer);
    items.push(item);
  }
  return items;
}

const activateBlock = (num) => {
  document.querySelectorAll(".content .blocks .block").forEach((block) => (block.style.display = "none"));
  document.querySelector(`.content .blocks .block${num}`).style.display = "block";
  document.querySelector(`.content .blocks-title .block-title${selectedBlock} span`).classList.remove("highlight");
  document.querySelector(`.content .blocks-title .block-title${num} span`).classList.add("highlight");
  selectedBlock = num;
};

activateBlock(selectedBlock);
let experience_items = generateListItems(EXPERIENCE);
experience_items.forEach(item => document.querySelector(".blocks .block0 .list").appendChild(item));
let education_items = generateListItems(EDUCATION);
education_items.forEach(item => document.querySelector(".blocks .block1 .list").appendChild(item));
let skill_items = generateListItems(SKILLS);
skill_items.forEach(item => document.querySelector(".blocks .block2 .grid").appendChild(item));
let project_items = generateListItems(PROJECTS);
project_items.forEach(item => document.querySelector(".blocks .block3 .list").appendChild(item));
let achievement_items = generateListItems(ACHIEVEMENTS);
achievement_items.forEach(item => document.querySelector(".blocks .block4 .grid").appendChild(item));
