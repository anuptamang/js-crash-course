class Blog {
  constructor() {
    this.posts = [];
  }

  async addPost(post) {
    console.log(`Creating post: ${post}...`);
    await new Promise((resolve) => {
      setTimeout(resolve, 2000); // Simulate loading with a delay of 2 seconds
    });
    this.posts.push(post);
    console.log(`Post created: ${post}`);
  }

  getPosts() {
    return this.posts;
  }
}

const app = new Blog();

async function addPostWithLoading(post) {
  // console.log("Loading...");
  await app.addPost(post);
  // console.log("Loading finished.");
}

addPostWithLoading("hello");

// When you fetch the posts, you can also add a loading indication
// console.log("Fetching posts...");
// const posts = app.getPosts();
// console.log("Posts fetched:", posts);
