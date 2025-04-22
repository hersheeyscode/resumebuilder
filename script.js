document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value.split(",");
    const experience = document.getElementById("experience").value;
  
    // Build resume HTML
    const resumeHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      
      <h3>Education</h3>
      <p>${education}</p>
      
      <h3>Skills</h3>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
      
      <h3>Experience</h3>
      <p>${experience}</p>
    `;
  
    // Show resume
    document.getElementById("resumeOutput").innerHTML = resumeHTML;
  });
  