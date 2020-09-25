var foodData = [
  {key:'20201', category:"breakfast", img:"https://i.ibb.co/PhMvTfW/breakfast1.png", title:"Healthy Meal Plan", price:12, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'20202', category:"breakfast", img:"https://i.ibb.co/QQWYJnT/breakfast2.png", title:"Fried Chicken Bento", price:16, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'20203', category:"breakfast", img:"https://i.ibb.co/7zRbZZ7/breakfast3.png", title:"Tarragon-Salmon", price:13, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'20204', category:"breakfast", img:"https://i.ibb.co/Qc8Y6vb/breakfast4.png", title:"Indian food", price:21, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'20205', category:"breakfast", img:"https://i.ibb.co/gZDhtyF/breakfast5.png", title:"Beef steak", price:24, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'20206', category:"breakfast", img:"https://i.ibb.co/wY6HXdk/breakfast6.png", title:"Honey-Soy-Salmon", price:16, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'20207', category:"lunch", img:"https://i.ibb.co/8KfTrcb/lunch1.png", title:"Healthy Meal Plan", price:12, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'20208', category:"lunch", img:"https://i.ibb.co/3SSvYDH/lunch2.png", title:"Fried Chicken Bento", price:16, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'20209', category:"lunch", img:"https://i.ibb.co/0jpL6w5/lunch3.png", title:"Tarragon-Salmon", price:13, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'202010', category:"lunch", img:"https://i.ibb.co/FqWgMR8/lunch4.png", title:"Indian food", price:21, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'202011', category:"lunch", img:"https://i.ibb.co/3sCBzWK/lunch5.png", title:"Beef steak", price:24, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'202012', category:"lunch", img:"https://i.ibb.co/0yKNCBy/lunch6.png", title:"Honey-Soy-Salmon", price:16, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'202013', category:"dinner", img:"https://i.ibb.co/p4G56W8/dinner1.png", title:"Healthy Meal Plan", price:12, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'202014', category:"dinner", img:"https://i.ibb.co/S7L25mV/dinner2.png", title:"Fried Chicken Bento", price:16, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'202015', category:"dinner", img:"https://i.ibb.co/rkJGL9F/dinner3.png", title:"Tarragon-Salmon", price:13, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'202016', category:"dinner", img:"https://i.ibb.co/F85wXbw/dinner4.png", title:"Indian food", price:21, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'202017', category:"dinner", img:"https://i.ibb.co/7WqhwWX/dinner5.png", title:"Beef steak", price:24, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},

  {key:'202018', category:"dinner", img:"https://i.ibb.co/f8sqMmL/dinner6.png", title:"Honey-Soy-Salmon", price:16, description:"How we dream about our future", fullDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum saepe cum neque sapiente, nisi, pariatur similique laboriosam sed nihil omnis vero ipsum quas minima rem distinctio iusto quos architecto ut suscipit"},
]

export default foodData;