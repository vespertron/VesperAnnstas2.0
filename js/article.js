const article = {
    name: "First Blog Post",
    author: "Vesper",
    date: "5/10/2024",
    content: "Mauris et libero tristique justo tristique commodo gravida consectetur lacus. Integer eu malesuada odio, in hendrerit est. Nam bibendum massa non lacus bibendum, id pretium nisi posuere. Duis volutpat orci risus, vel consequat libero hendrerit non. Donec facilisis augue id magna viverra malesuada. Nunc nec bibendum odio, eget placerat nisl. Sed vehicula lorem interdum consequat egestas. Quisque fringilla efficitur lectus vel bibendum."
};

const content = `
  <main>
    <article>
      <h2>${article.name}</h2>
      <p>${article.content}</p>
    </article>
  </main>
`;

document.body.innerHTML = content;
