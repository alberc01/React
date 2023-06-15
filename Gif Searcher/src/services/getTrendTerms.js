const APIK = 'iKZFhhHpX8Q3WnYbzbZ6iIKt3sITZXKh'


export default function GetTrendTerms({keyword}= {keyword: null}) {
  const Api_url= `https://api.giphy.com/v1/gifs/search?api_key=${APIK}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    return fetch(Api_url)
    .then(res=> res.json())
    .then(response =>{
          const {data = []} = response
            if(Array.isArray(data)){
              const giflist = response.data.map(gifItem => 
                {
                  const {images, title, id} = gifItem
                  const {url} = images.downsized_medium
                  return  { title, id,  url }
               })
               return giflist;
          }
    }); 
}