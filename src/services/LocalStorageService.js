
const KEY = 'posts';

const get = () => {
  const posts = localStorage.getItem(KEY);

  return posts !== undefined
    ? JSON.parse(posts)
    : [];
}

const concat = post => {

  const posts = get();

  return posts
    ? [ ...posts, post ]
    : [ post ];
}

export default {

  create: post => {
    localStorage.setItem(KEY, JSON.stringify(concat(post)));
  },

  read: () => (
    get()
  )
}