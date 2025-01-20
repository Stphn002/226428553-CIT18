// Dark Mode Toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Light Mode';
  } else {
    toggleBtn.textContent = 'Dark Mode';
  }
});

const timeline = document.getElementById('timeline');
experiences.forEach(exp => {
  const div = document.createElement('div');
  div.classList.add('experience-entry');
  div.innerHTML = `<strong>${exp.year}</strong>: ${exp.title} at ${exp.company}`;
  timeline.appendChild(div);
});

// Form Validation
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
    return false;
  }

  alert("Message sent successfully!");
  return false; // Prevent actual form submission for demonstration purposes
}
