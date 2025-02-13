const aboutMeParagraph = `I am a software engineer with expertise in full-stack development, specializing in Java, Python, API integration, and database management. I have experience with agile methodologies, TDD, and tools like Git, Docker, and GitLab CI/CD. Additionally, I have front-end skills in HTML, CSS, JavaScript, Bootstrap and project deployment. With a Bachelor of Accounting from the University of Johannesburg, I bring strong analytical and problem-solving abilities. Passionate about building scalable, maintainable solutions, I thrive in collaborative, innovation-driven environments.`;

const aboutMeBtn = document.getElementById("about-me-button");
const aboutMe = document.getElementById("about-me");


function showAboutMe() {


    const paragraph = document.createElement("p");
    paragraph.innerText = aboutMeParagraph;
    aboutMe.appendChild(paragraph);

    paragraph.classList.add("text-muted");
    paragraph.style.display = "block";
    paragraph.style.alignContent = "center";
}

aboutMeBtn.addEventListener("click", showAboutMe);
