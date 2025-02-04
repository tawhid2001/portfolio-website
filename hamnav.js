fetch("hamnav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("hamburger-nav").innerHTML = data;
  })
  .catch(error => console.error('Error fetching the navigation:', error));