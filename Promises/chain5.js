
      function fetchUser() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              id: 1,
              name: "John Doe",
            });
          }, 1000);
        });
      }

      function fetchPosts() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(["Post1", "Post2"]);
          }, 2000);
        });
      }

      const fetchUserFn = fetchUser();
      const fetchPostsFn = fetchPosts();

      
      Promise.all([fetchUserFn, fetchPostsFn]).then((results) => {
        const [user, posts] = results;
        console.log("User:", user);
        console.log("Posts:", posts);
      });
