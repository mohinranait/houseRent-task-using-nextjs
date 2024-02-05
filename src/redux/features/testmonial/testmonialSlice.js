const { createSlice } = require("@reduxjs/toolkit");

const initialState  = {
    testimonials:[
        {
            _id: 1,
            title: 'What your client says',
            name:"Mohin Rana",
            rating: 3,
            avater: "https://doccure.dreamstechnologies.com/html/template/assets/img/clients/client-03.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non eaque nemo voluptate eius, sint, id provident vel maiores repudiandae sunt in dolores sed aspernatur animi dolore deleniti quae voluptates illum!",
        },
        {
            _id: 2,
            title: 'Develop my client styly',
            name:"Aleya",
            rating: 5,
            avater: "https://doccure.dreamstechnologies.com/html/template/assets/img/clients/client-04.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non eaque nemo voluptate eius, sint, id provident vel maiores repudiandae sunt in dolores sed aspernatur animi dolore deleniti quae voluptates illum!",
        },
        {
            _id: 3,
            title: 'Type my client says',
            name:"Mahir Rana",
            rating: 4,
            avater: "https://doccure.dreamstechnologies.com/html/template/assets/img/clients/client-05.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non eaque nemo voluptate eius, sint, id provident vel maiores repudiandae sunt in dolores sed aspernatur animi dolore deleniti quae voluptates illum!",
        },
    ],
}

const testimonialsSlice = createSlice({
    name:"testimonials",
    initialState,

})

export default testimonialsSlice.reducer;