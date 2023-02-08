var container = document.querySelector('.container');
 
// const posts = [
//     {title: "title1",
//     body: "This Mohammad Faisal. Faculty of Computer Science and Engineering. Department of Computer Science and Engineering. Level 3 semester II. Hajee Mohammad Danesh Science and Technology University, Dinajpur. I belong to Cox's Bazr."},
//     {title: "title2",
//     body: "This Mohammad Faisal. Faculty of Computer Science and Engineering. Department of Computer Science and Engineering. Level 3 semester II. Hajee Mohammad Danesh Science and Technology University, Dinajpur. I belong to Cox's Bazr."},
//     {title: "title3",
//     body: "This Mohammad Faisal. Faculty of Computer Science and Engineering. Department of Computer Science and Engineering. Level 3 semester II. Hajee Mohammad Danesh Science and Technology University, Dinajpur. I belong to Cox's Bazr."},
//     {title: "title4",
//     body: "This Mohammad Faisal. Faculty of Computer Science and Engineering. Department of Computer Science and Engineering. Level 3 semester II. Hajee Mohammad Danesh Science and Technology University, Dinajpur. I belong to Cox's Bazr."},
//     {title: "title5",
//     body: "This Mohammad Faisal. Faculty of Computer Science and Engineering. Department of Computer Science and Engineering. Level 3 semester II. Hajee Mohammad Danesh Science and Technology University, Dinajpur. I belong to Cox's Bazr."},
//     {title: "title6",
//     body: "This Mohammad Faisal. Faculty of Computer Science and Engineering. Department of Computer Science and Engineering. Level 3 semester II. Hajee Mohammad Danesh Science and Technology University, Dinajpur. I belong to Cox's Bazr."},
         
// ];

const fetchData = async(config)=>{
   const resposnse = await axios.get(config);
     return resposnse.data;
}
const getData = async() =>{
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');

    posts.map((Object) => {
       var post = document.createElement('div');
       post.classList.add('post');
       post.innerHTML = `<h1>${Object.id}</h1>
                           <p>${Object.title}</p>`
    
       container.appendChild(post);
    });
};
getData();

 
