// Data configuration — replace with your real content and images
const socialProjects = [
  {
    name: "Children's Business Fair",
    tabs: {
      about: '<strong>Problem:</strong> Limited opportunities for children to build entrepreneurial skills, business knowledge, and confidence.<br><br><strong>Solution:</strong> Organized annual summer programs combining hands-on workshops—where children learned how to create and market a business—with a full-day (9-hour) community marketplace. At the event, participants set up booths at a town center to pitch and sell their products, impacting 80+ children each year. Secured community sponsors, raised funds to support their ventures, and partnered with local political leaders to expand visibility.',
      hardship: 'Most people assume the hardest part of organizing the fair would be securing enough sponsors or getting political leaders\' attention and while those required effort, the real challenge was the operational chaos of managing 80+ excited children during a 9 hour event day. Registration was overwhelming: tracking payments, dietary restrictions, booth preferences, and parent contact information. It was a logistical nightmare with children arriving at different times and locations while I simultaneously coordinated with vendors. I had to create timed schedules, a detailed check-in system with color-coded name tags and assign "zones" with designated volunteers to maintain order.',
      takeaway: 'This experience showed me that challenges aren\'t always the "big picture" ones. Operational execution is what separates successful initiatives/startups from chaotic ones. The nit bitty operational pieces of any venture are not just overhead, they are what helps you to scale well. This taught me that even if you have the best idea ever for a project, poor execution will kill it. This experience also taught me how to keep my composure under pressure.'
    },
    images: ['images/cbf.jpg', 'images/biz.png', 'images/biz2.png', 'images/biz3.png']
  },
  {
    name: 'Career and Technical Education Ambassador',
    tabs: {
      about: '<strong>Problem:</strong> Many teenagers lack guidance in exploring career paths and discovering activities that match their interests, creating a widespread gap in career and interest awareness.<br><br><strong>Solution:</strong> As 1 of 16 high school students across the Everett Public Schools district, I helped pioneer and launch the first-ever Career and Technical Education (CTE) Ambassadors program. Together, we reached 15,000+ students in grades 6–12 by organizing and leading workshops and networking fairs that connected peers with community partners and school programs. Worked directly with district officials, including the superintendent, to make the initiative possible.',
      hardship: 'Because we were pioneering the first instance of the CTE Ambassador program, we had no blueprints or precedents to follow. Every single event we organized had never been done before, we were basically building a plane while flying it. To me, the biggest challenge wasn\'t getting district approval, but figuring out how to make career exploration actually interesting to teenagers with short attention spans and gaining visibility in a large school district with 9 different schools. The way we approached this was to never underestimate ourselves, and to always shoot for our ideas and events we wanted to organize. In addition to mass emails and flyers posted around, we started making Instagram and TikTok reels to promote our events to reach the teenage audience. We even organized trips to the different schools to directly communicate with the students about career exploration.',
      takeaway: 'This taught me to be comfortable with ambiguity. A lot of times, starting your own projects or startup means you need to experiment and that you won\'t always have the ability to research best practices. I also learned that marketing is equally as important as the product–after all, even if you have a great project, what\'s the use if no one gets to hear about it? This means you have to meet your audience where they are. Finally, successful projects combine two things: buy in from the top to roots at the bottom. We had to buy in from the top by working with school officials like the superintendent. However, meeting peer-to-peer (the roots) was equally important. This dual structure is what can make a startup successful, securing the higher support you need to actually make it into the market and to meet your audience where they are.'
    },
    images: ['images/cte.JPG', 'images/cte2.jpg', 'images/cte3.jpg', 'images/cte4.jpg']
  },
  {
    name: 'Computer Science Education',
    tabs: {
      about: '<strong>Problem:</strong> Many students lack direct access to computer science resources or lack an idea of where to start, even though it is a rapidly growing field that shapes nearly every career path. <br><br><strong>Solution:</strong> Established coding clubs at four local elementary and middle schools, teaching Python and object-oriented programming to students as young as 8. Coached two FIRST LEGO League teams to introduce robotics fundamentals to ages 8–13. Organized multi-school hackathons and field trips to the University of Washington\'s Paul Allen School of Computer Science & Engineering, where high school students engaged in hands-on CS activities. Impacted 105+.',
      hardship: 'The most challenging part about this was having to simplify complicated programming concepts into something that even an 8 year old could understand. When I first mentioned the word "instance", the look on their faces made it seem like it was their first time hearing the word. The cognitive gap between an older child learning CS and a younger child required me to simplify the concepts into something they can understand – like a "cookie-cutter" instead of "class".',
      takeaway: 'This taught me the value of effective product design–you need to get inside the user\'s mental mode, not impose your own or what you would prefer. Likewise, the process of learning how to dumb down complicated technical concepts also taught me how to communicate technical products to non technical customers, and in the future, possible investors and partners.'
    },
    images: ['images/cs.jpg', 'images/cs2.jpg', 'images/cs3.jpg', 'images/cs4.JPEG']
  },
  {
    name: 'Political Media Bias Advocacy',
    tabs: {
      about: '<strong>Problem:</strong> Political polarization is one of today\'s most pressing challenges, with media coverage often amplifying divisions rather than bridging them.<br><br><strong>Solution:</strong> Collaborated with two fellow high school students and three PhD mentors to apply natural language processing techniques—such as topic modeling (LDA, Top2Vec) and sentiment analysis (BERT)—to examine how left- and right-leaning media outlets frame political events like rallies. Gained insight into how outlets frequently relied on adversarial framing, emphasizing criticism of opposing ideologies rather than promotion of their own, thereby reinforcing polarization. Got accepted to the National Conference for Undergraduate Research and presented at the Southern California Conference for Undergraduate Research, sharing insights on media literacy with 1,500 attendees from 80+ institutions.',
      hardship: 'The biggest challenge in this project wasn\'t learning NLP or new algorithms, it was the team dynamic that came with people who were just as driven and motivated as me. In high school, I felt like a lot of the time I was the one "in charge" and "calling the shots" because a lot of people were not as invested as me on the projects I was working on. But being at UC Santa Barbara to do research, I was working with other students who were also the "default leader". This created a lot of friction because initially, everyone was trying to get their ideas heard and executed, instead of listening. The way I solved this was learning when to take the lead, but also stepping back and learning to follow sometimes.',
      takeaway: 'This experience changed my view on leadership – it\'s not always hierarchical, sometimes systems and teams are better off where everyone is actually equal. I learned how to check my ego when needed and prioritizing team achievements instead of just personal recognition. The outcome was better when we all collectively worked together, instead of just one person asserting everything.'
    },
    images: ['images/ucsb3.jpg', 'images/ucsb2.WEBP']
  }
];

const skills = [
  'Java', 'Swift', 'Python', 'JavaScript', 'HTML/CSS', 'XML', 'Lua',
  'React', 'Node.js', 'Express.js', 'MongoDB', 'Flask', 'Django'
];

const techProjects = [
  {
    title: 'Political Media Bias Research',
    description: 'Research using topic modeling (BERT, LDA, Top2Vec) and sentiment analysis (BERT) with Python and Google Colab.',
    image: 'images/researchPic.JPEG',
    download: 'researchDoc.pdf'
  },
  {
    title: 'Finance Tracking App',
    description: 'Full-stack app using Swift and XCode.',
    image: 'images/app.JPEG',
    github: 'https://github.com/akhilapnuri/FinancialTrackerApp'
  },
  {
    title: 'Fundraiser Promotion Website',
    description: 'Using HTML/CSS/JS specifically focusing on modern UI/UX design.',
    image: 'images/website.jpeg',
    github: 'https://github.com/akhilapnuri/cancercaregala-website'
  },
  {
    title: 'Roblox Obby Game',
    description: 'Using Lua and Roblox Developer Studio to code an entire obby game.',
    image: 'images/roblox.jpeg',
    github: 'https://github.com/akhilapnuri/RobloxVolcanoAdventureGame'
  },
  {
    title: 'FIRST FRC Robotics',
    description: 'Used Java to help program FIRST FRC Robotics competition robot, specifically developing its operator dashboard.',
    image: 'images/robot.jpeg',
    github: 'https://github.com/FRCTeam2910/2024CompetitionRobot'
  }
];

// Utility: safely create element
function el(tag, className, innerHTML) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (innerHTML) e.innerHTML = innerHTML;
  return e;
}

// Render Social Projects Carousel
// Render Social Projects Carousel

// Mobile detection
function isMobileDevice() {
  return (window.innerWidth <= 900) || 
         (navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i));
}

function renderSocialCarousel() {

  if (isMobileDevice()) return; // Don't render on mobile
  
  const track = document.getElementById('socialTrack');
  const progressRoot = document.getElementById('carouselProgress');
  if (!track || !progressRoot) return;


  track.innerHTML = '';
  socialProjects.forEach((project, index) => {
    const slide = el('div', 'slide');

    const media = el('div', 'slide-media');
    project.images.slice(0, 4).forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = project.name;
      media.appendChild(img);
    });

    const copy = el('div', 'slide-copy');
    copy.appendChild(el('h3', '', project.name));
    
    // Create tabs container
    const tabsContainer = el('div', 'tabs-container');
    
    // Create tab buttons
    const tabButtons = el('div', 'tab-buttons');
    const aboutBtn = el('button', 'tab-button active', 'About');
    const hardshipBtn = el('button', 'tab-button', 'Hardship');
    const takeawayBtn = el('button', 'tab-button', 'Takeaway');
    
    aboutBtn.setAttribute('data-tab', 'about');
    hardshipBtn.setAttribute('data-tab', 'hardship');
    takeawayBtn.setAttribute('data-tab', 'takeaway');
    
    tabButtons.appendChild(aboutBtn);
    tabButtons.appendChild(hardshipBtn);
    tabButtons.appendChild(takeawayBtn);
    
    // Create tab content
    const tabContent = el('div', 'tab-content');
    const aboutContent = el('div', 'tab-pane active');
    aboutContent.innerHTML = project.tabs.about;
    
    const hardshipContent = el('div', 'tab-pane');
    hardshipContent.innerHTML = project.tabs.hardship;
    
    const takeawayContent = el('div', 'tab-pane');
    takeawayContent.innerHTML = project.tabs.takeaway;
    
    aboutContent.id = `about-${index}`;
    hardshipContent.id = `hardship-${index}`;
    takeawayContent.id = `takeaway-${index}`;
    
    tabContent.appendChild(aboutContent);
    tabContent.appendChild(hardshipContent);
    tabContent.appendChild(takeawayContent);
    
    // Add tab functionality
    [aboutBtn, hardshipBtn, takeawayBtn].forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabButtons.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        tabContent.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        btn.classList.add('active');
        const tabName = btn.getAttribute('data-tab');
        const paneId = `${tabName}-${index}`;
        document.getElementById(paneId).classList.add('active');
      });
    });
    
    tabsContainer.appendChild(tabButtons);
    tabsContainer.appendChild(tabContent);
    copy.appendChild(tabsContainer);

    slide.appendChild(media);
    slide.appendChild(copy);
    track.appendChild(slide);
  });

  // Carousel state
  let index = 0;
  const total = socialProjects.length;
  // Build progress segments
  progressRoot.innerHTML = '';
  const segments = [];
  for (let i = 0; i < total; i++) {
    const seg = el('div', 'progress-segment');
    progressRoot.appendChild(seg);
    segments.push(seg);
  }

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    segments.forEach((s, i) => s.classList.toggle('active', i === index));
  }

  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');

  prev?.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    update();
  });
  next?.addEventListener('click', () => {
    index = (index + 1) % total;
    update();
  });

  // swipe support
  let startX = 0;
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  track.addEventListener('touchend', (e) => {
    const delta = e.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        index = (index + 1) % total;
      } else {
        index = (index - 1 + total) % total;
      }
      update();
    }
  });

  update();
}

// Render Skills Grid (static with hover enlarge)
function renderSkills() {
  if (isMobileDevice()) return; // Don't render on mobile
  
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';

  const logos = [
    { key: 'java',      src: 'images/java.png' },
    { key: 'swift',     src: 'images/swift.png' },
    { key: 'python',    src: 'images/python.png' },
    { key: 'javascript',src: 'images/JS.webp' },
    { key: 'html',      src: 'images/html.webp' },
    { key: 'css',       src: 'images/css.png' },
    { key: 'react',     src: 'images/react.png' },
    { key: 'node',      src: 'images/node.webp' },
    { key: 'mongodb',   src: 'images/mongo.svg' },
    { key: 'lua',       src: 'images/lua.png' }
];

  logos.forEach(logo => {
    const div = el('div', 'skill-logo');
    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.key;
    div.appendChild(img);
    grid.appendChild(div);
  });
}

// Render Technical Projects Grid
function renderProjects() {

  if (isMobileDevice()) return; // Don't render on mobile
  
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  techProjects.forEach(p => {
    const card = el('div', 'card');

    // Action badge: download if provided, else GitHub
    const action = el('a', 'card-gh');
    if (p.download) {
      action.href = p.download;
      action.setAttribute('download', '');
      const dlImg = document.createElement('img');
      dlImg.src = 'https://cdn.jsdelivr.net/npm/feather-icons@4.29.0/dist/icons/download.svg';
      dlImg.alt = 'Download PDF';
      action.appendChild(dlImg);
    } else if (p.github) {
      action.href = p.github;
      action.target = '_blank';
      action.rel = 'noopener noreferrer';
      const ghImg = document.createElement('img');
      ghImg.src = 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg';
      ghImg.alt = 'GitHub';
      action.appendChild(ghImg);
    }

    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.title;

    const body = el('div', 'card-body');
    body.appendChild(el('h4', 'card-title', p.title));
    body.appendChild(el('p', 'card-desc', p.description));

    card.appendChild(img);
    card.appendChild(body);
    if (action.href) card.appendChild(action);

    grid.appendChild(card);
  });
}

// Footer year
function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
}

// Scroll animation observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  renderSocialCarousel();
  renderSkills();
  renderProjects();
  setYear();
  initScrollAnimations();
});