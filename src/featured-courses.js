// Featured section //

const courses = [

  {
    name: 'Javascript',
    heading: 'programming language that is one of the core technologies',
    img: '../Assets/courses/javascript.png',
    description: "JavaScript is the world's most popular programming language JavaScript is the programming language of the Web. JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced.",
  },
  {
    name: 'HTML',
    img: '../Assets/courses/html.png',
    heading: 'HTML is the standard markup language for Web pages',
    description: 'HTML is the standard markup language for Web pages.With HTML you can create your own Website.HTML is easy to learn - You will enjoy it!',
  },
  {
    name: 'Java',
    img: '../Assets/courses/java.png',
    heading: 'Java is used to develop mobile apps, web apps, desktop apps, games and much more.',
    description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
  },
  {
    name: 'CSS',
    img: '../Assets/courses/css.png',
    heading: 'CSS describes how HTML elements are to be displayed on screen',
    description: 'CSS stands for Cascading Style Sheets CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once',
  },
  {
    name: 'PHP',
    heading: 'A popular general-purpose scripting language ',
    img: '../Assets/courses/php.png',
    description: "PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. PHP is a widely-used, free, and efficient alternative competitors such as Microsoft's ASP.",
  },
  {
    name: 'Python',
    img: '../Assets/courses/python.png',
    heading: 'Python can be used on a server to create web applications.',
    description: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation  via the off-side rule',
  },
];
courses.forEach((course) => {
  // Creating main div for featured courses
  const featuredDiv = document.getElementById('Featured-div');
  const courseDiv = document.createElement('div');
  courseDiv.classList.add('col-12', 'col-md-5', 'col-lg-5');
  featuredDiv.appendChild(courseDiv);

  // Creating row inside main div
  const row = document.createElement('div');
  row.classList.add('row', 'mb-5');
  courseDiv.appendChild(row);

  // Creating column for image
  const imgCol = document.createElement('div');
  imgCol.classList.add('col-lg-3', 'col-md-4', 'col-4');
  row.appendChild(imgCol);

  // Creating ../Assets
  const imgBox = new Image(50);
  imgBox.src = '../Assets/icons/orange-block.jpg';
  imgBox.className = 'box';
  imgCol.appendChild(imgBox);

  const img = new Image(80);
  img.src = course.img;
  img.className = 'course';
  imgCol.appendChild(img);

  // Creating column for details
  const detailCol = document.createElement('div');
  detailCol.classList.add('col-8', 'col-lg-8');
  row.appendChild(detailCol);

  // Creating name of course
  const name = document.createElement('h2');
  name.textContent = course.name;
  name.className = 'main-course-heading';
  detailCol.appendChild(name);

  // Creating heading of course
  const heading = document.createElement('h3');
  heading.textContent = course.heading;
  heading.className = 'heading-courses';
  detailCol.appendChild(heading);

  // Creating horizontal line
  const line = document.createElement('div');
  line.classList.add('line-featured', 'my-3');
  detailCol.appendChild(line);

  // Creating detail of course
  const detail = document.createElement('p');
  detail.textContent = course.description;
  detail.className = 'para';
  detailCol.appendChild(detail);
});

const seeMore = document.getElementById('seemore');
seeMore.addEventListener('click', () => {
  const child = document.querySelectorAll('#Featured-div .col-12:nth-child(n+3)');
  child.forEach((c) => {
    c.style.display = 'block';
    seeMore.style.display = 'none';
  });
});