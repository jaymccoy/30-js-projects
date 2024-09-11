const testimonials = [{
        name: "Eric G",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I am extremely satisfied with the exceptional quality and performance of Apple's innovative mobile phones, laptops, and tablets. Their cutting-edge technology truly sets them apart from the competition. I highly recommend Apple for anyone seeking top-tier electronics."
    },{
        name: "Aziz Klapstuhl",
        photoUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "Pear offers top-quality mobile phones, laptops, and tablets that are both stylish and innovative. I was impressed by the sleek design and advanced features of their products. With Pear, I experienced seamless performance and reliability. I highly recommend Pear to anyone looking for cutting-edge technology."
    },{
        name: "Greet Bilspeel",
        photoUrl: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "Banana provides top-notch mobile phones, laptops, and tablets that are both stylish and functional. Their customer service is unmatched, making every purchase experience a breeze. I highly recommend Banana for all your tech needs."
    },{
        name: "Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "I am extremely impressed with Pineapple's range of mobile phones, laptops, and tablets. Their products are sleek, innovative, and high-quality. I have been a loyal customer for years and always recommend Pineapple to friends and family looking for cutting-edge technology."
    },{
        name: "Sam Mitchell",
        photoUrl: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "Pineapple offers a wide selection of top-quality mobile phones, laptops, and tablets. I was impressed with their excellent customer service and fast delivery. I highly recommend Pineapple for all your tech needs."
    }
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");
let idx=0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++;
    if(idx === testimonials.length) {
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 7000);
}