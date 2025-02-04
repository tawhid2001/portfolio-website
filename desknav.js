fetch("desknav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("desktop-nav").innerHTML = data;
  })
  .catch(error => console.error('Error fetching the navigation:', error));