// Progression 1: create a function and fetch the api using axios
  function getData() {
     const newsPortal = document.getElementById('newsPortal') ;

     axios 
     .get(
       'https://gnews.io/api/v4/search?q=example&apikey=635e23b157d58c5cbbe1da1e7cdc4c7d'
     )
    .then((res)=>{
      console.log(res) 
       const articleContainer = res.data.articles ;
         articleContainer.forEach ((article)=>{
           const articleStore = document.createElement('div') 
             articleStore.setAttribute('id','article') ;
             articleStore.setAttribute('class' ,'article') ;

             const title = document.createElement('h3')
             const content = document.createElement('p')
             const img = document.createElement('img') 

             title.innerText = article.title ;
             content.innerText = article.content ;
             img.setAttribute('src' , article.image) 

             articleStore.append(title,img,content);
             
             newsPortal.appendChild(articleStore) ;
         })
    })
  }

  getData();

  console.log("Thank you") ;
 
