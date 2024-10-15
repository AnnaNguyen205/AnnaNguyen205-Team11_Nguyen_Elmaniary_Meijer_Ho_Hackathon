console.log("Javascript Linked!");

//Menu Animation
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// Video Player
const player = new Plyr("video");

//Testimonials
const testimonialCon = document.querySelector("#testimonial-section");

const testimonials = [
  {
    name: "Alex Smith, Web Developer Intern",
    paragraph:
      "The Interactive Media Design program has truly been a transformative experience. The skills I gained through hands-on projects like this showcase have prepared me for a career in web development. I can't thank the faculty enough for their guidance and support!",
  },
  {
    name: "Taylor Johnson, Graphic Designer",
    paragraph:
      "Participating in the Hackathon Student Showcase was an amazing opportunity to display my work to industry professionals. The experience taught me how to work collaboratively under tight deadlines while pushing my creative and technical skills to new levels.",
  },
  {
    name: "Jordan Lee, \n UX/UI Designer",
    paragraph:
      "The Industry Night event, and the portfolio showcase, in particular, was the perfect platform to connect with potential employers. This program not only enhanced my technical abilities but also gave me the confidence to pursue my passion in design and development.",
  },
  {
    name: "Samantha Nguyen, Front-End Developer",
    paragraph:
      "The Interactive Media Design program gave me the opportunity to explore different aspects of design and development. Showcasing my work at Industry Night led directly to internship offers and helped me build a solid portfolio for future opportunities.",
  },
];

testimonials.forEach((testimonial) => {
  const testimonialDiv = document.createElement("div");
  testimonialDiv.classList.add("testimonial-div", "col-span-2", "m-col-span-3");

  const testimonialParagraph = document.createElement("p");
  testimonialParagraph.textContent = testimonial.paragraph;

  const testimonialName = document.createElement("h4");
  testimonialName.classList.add("cr-red");
  testimonialName.textContent = testimonial.name;

  testimonialDiv.appendChild(testimonialParagraph);
  testimonialDiv.appendChild(testimonialName);

  testimonialCon.appendChild(testimonialDiv);
});
