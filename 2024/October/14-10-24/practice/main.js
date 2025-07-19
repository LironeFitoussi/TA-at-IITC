console.log('main.js');

const postListElement = document.querySelector('#post-list');

const getAllPosts = async () => {
    try {
      const { data: fetchedData } = await axios.get('https://api-playground-ten.vercel.app/posts');
      localStorage.setItem("database-data",  JSON.stringify(fetchedData))
      
    //   fetchedData.forEach((post) => {
    //         // console.log(post.title);
    //         // localStorage.setItem(`post-${post._id}`, JSON.stringify(post));
    //         postListElement.innerHTML += (`
    //             <li>
    //                 <div>
    //                     <h2>${post.title}</h2>
    //                     <p>${post.content}</p>
    //                 </div>
    //             </li>    
    //         `)
    //     });
    return fetchedData
    } catch (error) {
      console.error('Error fetching posts:', error.response?.data || error.message);
    }
  };

async function useData () {
    const data = await getAllPosts()
}

const { contact: { phone} } = {
    name: 'John Doe',
    age: 25,
    email: 'banana@gmail.com',
    contact: {
        phone: '0585109829'
    }
}

// console.log(user.name);

console.log(phone);

