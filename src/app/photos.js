

    async getPhotos(){
      const res=await fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
      let photos=await res.json();
      return photos;
    }
}
export default Photos;