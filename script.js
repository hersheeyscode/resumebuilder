document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const school = document.getElementById("school").value;
  const college = document.getElementById("college").value;
  const skills = document.getElementById("skills").value.split(",");
  const experience = document.getElementById("experience").value;
  const projects = document.getElementById("projects").value;
  const certifications = document.getElementById("certifications").value;
  const languages = document.getElementById("languages").value.split(",");
  const portfolio = document.getElementById("portfolio").value;
  const theme = document.getElementById("themeSelect").value;

  const resumeHTML = `
    <div class="resume-theme-${theme}">
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${portfolio ? `<p><strong>Portfolio:</strong> <a href="${portfolio}" target="_blank">${portfolio}</a></p>` : ""}
      <h3>School Education</h3><p>${school}</p>
      <h3>College Education</h3><p>${college}</p>
      <h3>Skills</h3><ul>${skills.map(s => `<li>${s.trim()}</li>`).join("")}</ul>
      <h3>Experience</h3><p>${experience}</p>
      <h3>Projects</h3><p>${projects}</p>
      <h3>Certifications</h3><p>${certifications}</p>
      <h3>Languages Known</h3><ul>${languages.map(l => `<li>${l.trim()}</li>`).join("")}</ul>
    </div>
  `;

  document.getElementById("resumeOutput").innerHTML = resumeHTML;
});

// Theme Toggle
document.getElementById("themeSwitcher").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

// Download PDF using browser's print (simple trick)
document.getElementById("downloadBtn").addEventListener("click", function () {
  window.print();
});

    `;
  
    // Show resume
    document.getElementById("resumeOutput").innerHTML = resumeHTML;
  });
  
