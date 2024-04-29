// This script can be used to handle any dynamic behavior of the application,
// such as loading different content based on the clicked navbar link

// For example:
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior (navigation)
    // Based on the clicked link text, display relevant content in the main section
    const clickedText = event.target.textContent;
    if (clickedText === 'Home') {
      // Display Home content
    } else if (clickedText === 'Employee') {
      // Display Employee content
    }
  });
});
