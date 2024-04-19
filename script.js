function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Función para obtener las publicaciones de dev.to
async function fetchDevToPosts(username) {
  const response = await fetch(`https://dev.to/api/articles?username=${username}`);
  const data = await response.json();
  return data;
}

// Función para mostrar las publicaciones en el contenedor
function displayDevToPosts(posts) {
  const container = document.getElementById("blog-posts");
  container.innerHTML = ""; // Limpiar contenido previo

  const latestPosts = posts.slice(0, 6); // Obtener solo las 5 primeras publicaciones

  latestPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>
      <p>${post.description}</p>
    `;
    container.appendChild(postElement);
  });
}


// Llamar a la función para obtener y mostrar las publicaciones
fetchDevToPosts("abhilash8").then((posts) => {
  displayDevToPosts(posts);
});
