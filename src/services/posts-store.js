class PostsStoreService {
  data = [
    {
      title: 'Title №1',
      author: 'Author №1',
      content: '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: Arial;"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil laboriosam rerum est omnis sunt nesciunt exercitationem voluptate cupiditate fugit numquam minima, consectetur maiores at et sed eligendi cumque facere voluptatum.</strong></span></p><p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: Arial;"><em>          Sint enim minus placeat, autem consectetur inventore ipsum voluptate esse doloremque temporibus? Natus, beatae? Id saepe error quibusdam praesentium aperiam a magni expedita natus! Iste quidem at neque autem maiores.</em></span></p><p><span style="color: rgb(255,255,255);background-color: rgb(38,50,56);font-size: 14px;font-family: Arial;"><del>          Quasi illum quo non dolorem ea harum voluptatem ipsa quaerat et, eveniet beatae sapiente fugit explicabo fuga nihil laborum vitae mollitia voluptatibus quam voluptates. Dolor necessitatibus facere deleniti esse tenetur?</del></span></p>',
      date: 'Tue Jul 14 2020',
      id: 249,
    },
    {
      title: 'Title №2',
      author: 'Author №2',
      content: '<p>Lorem</p>',
      date: 'Tue Jul 14 2020',
      id: 248,
    },
    {
      title: 'Title №3',
      author: 'Author №3',
      content: '<p>Lorem</p>',
      date: 'Tue Jul 14 2020',
      id: 247,
    },
    {
      title: 'Title №4',
      author: 'Author №4',
      content: '<p></p>',
      date: 'Tue Jul 14 2020',
      id: 246,
    },
  ];

  getPosts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 500);
    });
  };

  postAddPost = (data) => {
    const newData = {...data, id: Math.floor(Math.random()*1000)}
    return new Promise((resolve) => {
      this.data.push(newData)
      setTimeout(() => {
        resolve(this.data);
      }, 500);
    });
  };

  getPost (id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data.find(item => item.id === id))
      }, 500)
    });
  };

};

export const postsStoreService = new PostsStoreService();