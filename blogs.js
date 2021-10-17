const posts = [
  {
    title: "Başlık: Et aliqua nostrud ut dolor incididunt.",
    author: "Yazar: Labore Quis Minim",
    date: "Tarih: 01.01.2021",
  },
  {
    title: "Başlık: Aliqua irure eu ipsum dolore nostrud in.",
    author: "Yazar: Reprehenderit İrure",
    date: "Tarih: 01.02.2021",
  },
  {
    title:
      "Başlık: Nulla ex quis ex proident officia adipisicing sunt in culpa.",
    author: "Yazar: Culpa Aipisicing ",
    date: "Tarih: 01.03.2021",
  },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.date, post.author, post.title);
  });
};

function addPost(newPost) {
  return new Promise((resolve, reject) => {
    if (newPost) {
      //if(!newPost) olarak değiştirdiğimizde catch ile reject değeri olan "Post eklenemedi" konsola yazdırılıyor
      posts.push(newPost);
      resolve(posts);
    } else {
      reject("Post eklenemedi");
    }
  });
}

async function showPosts() {
  try {
    await addPost({
      title:
        "Başlık: Commodo fugiat veniam laboris consequat labore consectetur.",
      author: "Yazar: Nulla Magna",
      date: "Tarih: 01.04.2021",
    });

    posts.reverse(); // Postların son eklenenden başlayarak listelenmesi için reverse metodu kullanıldı

    listPosts();
  } catch (e) {
    console.log(e);
  }
}
listPosts();
console.log("----------------------------------------------------------------");
showPosts();
