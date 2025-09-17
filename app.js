// testing connection for vuejs
// console.log("hello, vuejs")

const app = Vue.createApp({
    // data, functions,template
    // template: '<h2>I am a template </h2>'
   data() {
    return {
        url: 'http://www.thenetninja.co.uk',
        showBooks: false,
         title: 'The final empire!',
         author: 'Brandon Sanderson',
         age: 45,
         x: 0,
         y: 0,

         books: [
            { title: 'name of wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
            { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
            { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true}
         ]
    }
   },

   methods: {
    //  changeTitle(){
    //     this.title = "Words of Radiance"
    //  }

    changeTitle(title){
        this.title = title
     },

     toggleShowBooks(){
        this.showBooks = !this.showBooks
       },

    handleEvent(e,data){
        console.log(e,e.target)
        if(data){
            console.log(data)
        }
       },

    handleMouseMove(e){
       this.x = e.offsetX
       this.y = e.offsetY

    },


    toggleFav(book){
        book.isFav = !book.isFav
    }

   },

  //  computed properties return values based on other values
    //  that values are in data()  above

   computed: {
    filteredBooks(){

        // filter() if condition is true we keep item in the Array
        // else we remove item in the array
        // after filter() return new array that will be store  in filteredBooks array
        return this.books.filter(book => book.isFav )
    }
    
   }

 

 
})
app.mount('#app')