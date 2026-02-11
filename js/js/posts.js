const posts = [
    {
        title: "Primeiro Artigo",
        content: "Este é o primeiro texto publicado na Verdades e Poemas."
    }
];

const container = document.getElementById("posts");

posts.forEach(post => {
    container.innerHTML += `
        <article>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        </article>
    `;
});