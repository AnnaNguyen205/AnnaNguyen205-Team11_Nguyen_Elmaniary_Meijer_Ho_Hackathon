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
    name: "Jordan Lee, UX/UI Designer",
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

//Portfolios
const portfolioCon = document.querySelector("#portfolio-section");

const portfolios = [
  { name: "Diego Rodriguez-Ramos", pLink: "diegorodriguezramos.com" },
  { name: "Kayla Cooper", pLink: "kaylacooper.com" },
  { name: "Ramona Lozon", pLink: "ramonalozon.com" },
  { name: "Qingdong Chen", pLink: "qingdongchen.com" },
  { name: "Taylor Khan", pLink: "taylorkhan.com" },
  { name: "Cassidy Pelacek-Boutilier", pLink: "cassidypelacekboutilier.com" },
  { name: "Isaac Bilyea", pLink: "isaacbilyea.com" },
  { name: "Ezra Carriere", pLink: "ezracarriere.com" },
  { name: "Shauraya Salwan", pLink: "shaurayasalwan.com" },
  { name: "Rebin Reji Vazhavilayil", pLink: "rebinrejivazhavilayil.com" },
  { name: "Divij Saddul", pLink: "divijsaddul.com" },
  { name: "Kyuri Park", pLink: "kyuripark.com" },
  { name: "Nikolai Meijer", pLink: "nikolaimeijer.com" },
  { name: "Xaviere Hanbury", pLink: "xavierehanbury.com" },
  { name: "Amari Buck", pLink: "amaribuck.com" },
  { name: "Thaseekaran Sivaskaran", pLink: "thaseekaransivaskaran.com" },
  { name: "Meet Amrutbhai Parmar", pLink: "meetamrutbhaiparmar.com" },
  { name: "Justin Rian Reyes", pLink: "justinrianreyes.com" },
  { name: "Alisher Yantizhanov", pLink: "alisheryantizhanov.com" },
  { name: "Parvesh Thakur", pLink: "parveshthakur.com" },
  { name: "Meghan Damen", pLink: "meghandamen.com" },
  { name: "Saif Amjad Omar Abu-Sa'ad", pLink: "saifamjadomarabusaad.com" },
  { name: "Bozhi Zhang", pLink: "bozhizhang.com" },
  { name: "Qiao-Yi Chu", pLink: "qiaoyichu.com" },
  { name: "Sashoye Maxwell", pLink: "sashoyemaxwell.com" },
  { name: "Dina Bondarchuk", pLink: "dinabondarchuk.com" },
  { name: "Wisdom Utenwojo Okutepa", pLink: "wisdomutenwojookutepa.com" },
  { name: "Bernardo Jr. Macapagal", pLink: "bernardojrmacapagal.com" },
  { name: "Ezekiel John Celis", pLink: "ezekieljohncelis.com" },
  { name: "Katrina Macadams", pLink: "katrinamacadams.com" },
  { name: "Ali El Maniary", pLink: "alielmaniary.com" },
  { name: "Lok Ting Tina Yam", pLink: "loktingtinayam.com" },
  { name: "Thi Thanh Thuong Nguyen", pLink: "annanguyen.com" },
  {
    name: "Jenifer Quelali Evangelista",
    pLink: "jeniferquelalievangelista.com",
  },
  {
    name: "Rodrigo Nobre Do Nascimento",
    pLink: "rodrigonobredonascimento.com",
  },
  { name: "Milana Gabbassova", pLink: "milanagabbassova.com" },
  {
    name: "Izel Esteban Cardenas Ramos",
    pLink: "izelestebancardenasramos.com",
  },
  { name: "Timothy Bryle Flores", pLink: "timothybryleflores.com" },
  { name: "Loi Pan Sit", pLink: "loipansit.com" },
  { name: "Napas Polchai", pLink: "napaspolchai.com" },
  { name: "Akamjot Singh", pLink: "akamjotsingh.com" },
  { name: "Emmanuel Opadele", pLink: "emmanuelopadele.com" },
  { name: "Shon Sojan", pLink: "shonsojan.com" },
  { name: "Ishan Mehra", pLink: "ishanmehra.com" },
  { name: "Shiyon Biju Varghese", pLink: "shiyonbijuvarghese.com" },
  { name: "Jashan Kumar", pLink: "jashankumar.com" },
  { name: "Meetinder Singh Dhaliwal", pLink: "meetindersingh.com" },
  { name: "Harnoorpreet Kaur", pLink: "harnoorpreetkaur.com" },
  { name: "Apapat Juntarattanakamol", pLink: "apapatjuntarattanakamol.com" },
  { name: "Sydney Bandarra", pLink: "sydneybandarra.com" },
  { name: "Osarieme Ogbeide", pLink: "osariemeogbeide.com" },
  { name: "Tanya Mae Huertas", pLink: "tanyamaehuertas.com" },
  { name: "Carlos Andres Cano Menendez", pLink: "carlosandrescano.com" },
  { name: "Kamana Bishokarma", pLink: "kamanabishokarma.com" },
  { name: "King Yin Sham", pLink: "kingyinsham.com" },
  { name: "Tapshveer Benipal", pLink: "tapshveerbenipal.com" },
  { name: "Dixie Marie Laput", pLink: "dixiemarielaput.com" },
  { name: "Faizan Khan", pLink: "faizankhan.com" },
  { name: "Keith Lie", pLink: "keithlie.com" },
  { name: "Henrique Gamborgi Menezes", pLink: "henriquegamborgi.com" },
  { name: "Natchanon Mahaittidon", pLink: "natchanonmahaittidon.com" },
  { name: "Wing Lam Stephanie Chan", pLink: "stephaniechan.com" },
  { name: "Yi Ting Lai", pLink: "yitinglai.com" },
  { name: "Sheldon Gohetia", pLink: "sheldongohetia.com" },
  { name: "Joyal Gregory", pLink: "joyalgregory.com" },
  { name: "Sukhbhag Singh Sidhu", pLink: "sukhbhagsinghsidhu.com" },
  { name: "Het Shah", pLink: "hetshah.com" },
  { name: "Lav Pareshkumar Patel", pLink: "lavpareshkumarpatel.com" },
  { name: "Simon Dasilva", pLink: "simondasilva.com" },
  {
    name: "Wimarsha Heshan Jayasinghe Mudalige",
    pLink: "wimarshaheshan.com",
  },
  { name: "Gia Khang Ho", pLink: "giakhangho.com" },
  { name: "Kristina Bendzsel", pLink: "kristinabendzsel.com" },
];

portfolios.forEach((portfolio) => {
  const portfolioDiv = document.createElement("div");
  portfolioDiv.classList.add("portfolio-box", "col-span-2", "m-col-span-3");

  const portfolioName = document.createElement("h3");
  portfolioName.textContent = portfolio.name;

  const portfolioLink = document.createElement("a");
  portfolioLink.href = `http://${portfolio.pLink}`;
  portfolioLink.target = "blank";
  portfolioLink.textContent = portfolio.pLink;

  portfolioDiv.appendChild(portfolioName);
  portfolioDiv.appendChild(portfolioLink);

  portfolioCon.appendChild(portfolioDiv);
});
