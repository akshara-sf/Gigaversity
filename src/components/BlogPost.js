import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const blogData = {
  'mern-guide': {
    title: 'MERN Stack Development: A Comprehensive Guide for 2025',
    date: 'May 18, 2025',
    by: 'Team Gigaversity',
    reading: '7 min read',
    banner: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D',
    content: `
    <p><B>The MERN stack continues to dominate web development in 2025, offering a JavaScript-based solution for building complete web applications. This guide covers everything you need to know to master MongoDB, Express, React, and Node.js for modern full-stack development.</b></p>
    
    <h2>What is the MERN Stack?</h2>
    <p>The MERN stack consists of four primary technologies:</p>
    <ul>
      <li><b>MongoDB:</b> A NoSQL database that stores data in flexible, JSON-like documents</li>
      <li><b>Express.js:</b> A minimal and flexible Node.js web application framework</li>
      <li><b>React:</b> A frontend JavaScript library for building user interfaces</li>
      <li><b>Node.js:</b> A JavaScript runtime environment that executes code outside a web browser</li>
    </ul>
    <p>Together, these technologies enable developers to build scalable, dynamic web applications using JavaScript throughout the entire stack.</p>
    
    <h2>Why MERN Remains Popular in 2025</h2>
    <p>Despite new frameworks emerging, MERN maintains its popularity for several reasons:</p>
    
    <h2>Unified Language</h2>
    <p>Using JavaScript across the entire stack simplifies development and knowledge transfer. Developers can work on both frontend and backend with a single language, reducing context switching and increasing productivity.</p>
    
    <h2>High Performance</h2>
    <p>Node.js's event-driven architecture handles concurrent requests efficiently, while React's virtual DOM optimizes UI updates. Combined with MongoDB's document-based storage, MERN applications deliver excellent performance for modern web applications.</p>
    
    <H2>Thriving Ecosystem</h2>
    <p>The MERN ecosystem continues to grow with extensive libraries, tools, and community support. This rich ecosystem accelerates development and provides solutions for common challenges.</p>
    
    <h2>Setting Up Your MERN Development Environment</h2>
    <p>Before diving into development, you need a properly configured environment:</p>
    
    <h2>Essential Tools</h2>
    <ul>
      <li>Node.js and npm (Node Package Manager)</li>
      <li>MongoDB (local installation or cloud-based service like MongoDB Atlas)</li>
      <li>Code editor (VS Code with JavaScript/React extensions recommended)</li>
      <li>Git for version control</li>
    </ul>
    
    <blockquote>MERN is not just a stack — it's your ticket to full-stack mastery in 2025.</blockquote>
    
    <h2>Conclusion</h2>
    <p>The MERN stack offers a powerful toolkit for modern web development. By understanding each technology and how they work together, you can build scalable, efficient web applications that meet today's demanding requirements.</p>
    <p>Start with small projects and gradually work your way to more complex applications. Consistent practice and continuous learning are key to mastering full-stack development with MERN.</p>
    <p>Remember that the most effective learning comes from building real projects. Create applications that solve actual problems, collaborate with other developers, and contribute to open-source projects to accelerate your growth as a MERN stack developer.</p>
  `
  },
  'project-overview': {
    title: 'Why Project-Based Learning Works Better Than Traditional Tech Training',
    date: 'May 30, 2025',
    by: 'Team Gigaversity',
    reading: '5 min read',
    banner: 'https://cdn.activestate.com/wp-content/uploads/2021/12/python-coding-mistakes.jpg',
    content: `
      <h2>Why Project-Based Learning Works Better Than Traditional Tech Training</h2>
      <p>Research from the University of Michigan and Michigan State University shows how project-based learning changes the way students learn technical skills. Students achieve better results with this approach, especially in high-poverty schools. Traditional teaching methods don't measure up to these results.</p>
      <p>Most tech training programs stick to theory, but project-based learning connects you to real-life challenges. Data Scientists, frontend developers, and Backend Developers benefit from this hands-on experience. You'll build critical thinking and problem-solving skills through projects and active learning. These skills are the foundations of tech job success.</p>
      <p>Project-based learning stands out as the better way to learn modern tech skills. You'll be ready for the workplace because you've already tackled similar challenges.</p>

      <h2>The Limitations of Traditional Tech Training Methods</h2>
      <p>Traditional tech education programs are decades old, but they still fail to prepare students for today's tech landscape that changes faster than ever. These conventional approaches have fundamental flaws that stop students from developing job-ready skills.</p>

      <h2>Theoretical knowledge vs. practical application</h2>
      <p>The conventional approach to tech education puts too much emphasis on theoretical frameworks instead of hands-on application. Theory gives essential foundational knowledge but falls short when students try to apply concepts in ground scenarios. Harvard Professor Eric Mazur's research showed that students understood only about 30% of the material after a semester of traditional lectures. This number jumped to 60% when classrooms were "flipped" to focus on practical application.</p>
      <p>This gap between theory and practice becomes a big problem in technical fields like data science and full-stack development. Students might be great at memorizing formulas or syntax but struggle with authentic challenges. A study points out that "abstract concepts, often defined by what they are not, tend to lack a shared mental representation that can be easily retrieved from memory".</p>
      <p>Students must perform a task repeatedly to master a new skill. Traditional training programs rarely give enough time to practice. Students then enter the workforce with theoretical understanding but limited practical skills—a big concern for aspiring Data Scientists and Frontend Developers who just need hands-on experience with real datasets and user interfaces.</p>

      <h2>Conclusion</h2>
      <blockquote>“Simple is better than complex.” — Zen of Python</blockquote>

      <p>Project-based learning outperforms traditional tech education methods with proven results and real-life success stories. Traditional methods often get bogged down in theory, while PBL gives you practical skills through hands-on projects and real challenges.</p>
      <p>Studies show that project-based approaches yield better results in technical skills and job placements. Your completed project portfolio proves your abilities and improves your chances at job interviews and virtual placement drives by a lot.</p>
      <p>Data Scientists and Full Stack Developers who learn through projects show better problem-solving skills and adapt easily to workplace needs. These professionals land better positions with higher salaries because of their practical experience and complete skill sets.</p>
      <p>Want to change your tech career through project-based learning? Check out our Programs and join thousands of graduates who turned their practical experience into rewarding careers. Note that success in tech comes from what you can build and deliver, not just what you know.</p>
    `
  },
  'first-job': {
    title: 'How to Land Your First Tech Job Without Prior Experience',
    date: 'May 27, 2022',
    by: 'Team Gigaversity',
    reading: '9 min read',
    banner: 'https://images.ctfassets.net/7qqwgjna58ct/3WEd2JUHd2kdYfY34FanGj/ec7084674c3fd7420911240de5a9c5d7/get-a-job-with-no-experience.png',
    content: `
      <p>The tech industry continues to grow rapidly, creating thousands of new jobs each year. Yet many aspiring professionals face a common hurdle: "How do I get my first tech job without experience when most jobs require experience?" This guide breaks down practical strategies to overcome this chicken-and-egg problem.</p>
  
      <h2>Build a Portfolio That Speaks Louder Than a Resume</h2>
      <p>When you lack experience, your portfolio becomes your most powerful tool. Employers want to see what you can build, not just what you claim to know.</p>

      <h2>Create Real-World Projects</h2>
      <ul>
      <li>Build full applications that solve actual problems</li>
      <li>Recreate popular platforms with your own implementation</li>
      <li>Contribute to open-source projects to show collaboration skills</li>
      <li>Document your process and decision-making, not just the final code</li>
      </ul>
      <p>Remember: 3-5 high-quality projects are better than 10 mediocre ones. Each project should demonstrate different skills and problem-solving approaches.</p>

      <h2>Leverage Alternative Forms of Experience</h2>
      <h2>Participate in Structured Learning Programs</h2>
      <p>Virtual placement programs and project-based courses create experience that counts. These programs often include:</p>
      <ul>
      <li>Team-based projects that mirror workplace dynamics</li>
      <li>Industry-standard tools and workflows</li>
      <li>Mentorship from experienced professionals</li>
      <li>Portfolio-worthy projects that solve real business problems</li>
      </ul>
      <h2>Volunteer Your Technical Skills</h2>
      <p>Non-profits and community organizations often need technical help but lack resources to hire experienced developers.</p>
      <ul>
      <li>Build or improve websites for local organizations</li>
      <li>Create data visualizations for community initiatives</li>
      <li>Develop small applications to improve organizational efficiency</li>
      </ul>
      <p>These projects provide real stakeholder experience and references from people who've seen your work ethic firsthand.</P>

      <h2>Conclusion: Persistence Pays Off</h2>
      <blockquote>“First Job always makes us feels like Elon Musk.”</blockquote>

      <p>Landing your first tech job without experience requires creativity, determination, and strategic action. By building a compelling portfolio, creating alternative forms of experience, networking effectively, and targeting appropriate entry points, you can overcome the experience barrier.</P>
      <p>Remember that everyone in tech had a "first job" at some point. The steps you take now to showcase your skills and potential will set the foundation for your entire career.</p>
      <p>Start building, learning, and connecting today—your future in tech depends on the actions you take now, not the experience you wish you had.</p>
    `
  },
    'virtual-internship': {
    title: 'Virtual Internship Programs: How to Succeed in Remote Learning Environments',
    date: 'May 3, 2025',
    by: 'Team Gigaversity',
    reading: '3 min read',
    banner: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: `
      <p>The rise of remote work has transformed how internships operate. Virtual internship programs offer flexibility and accessibility but require different strategies for success compared to traditional office internships. This guide explores how to excel in virtual internships while building valuable skills in tech fields.</p>
  
      <h2>The Rise of Virtual Internships in Tech</h2>
      <p>Virtual internships have grown by over 300% since 2020, with tech companies leading this transformation. Remote internship programs allow students to work with companies regardless of location, creating opportunities that weren't previously possible due to geographical limitations.</p>
      <p>Data shows that 76% of tech companies now offer some form of virtual internship, with many maintaining hybrid or fully remote options even as in-person work returns. This shift presents both unique challenges and valuable opportunities for aspiring professionals.</p>

      <h2>Setting Yourself Up for Success</h2>
      <p>Your physical environment significantly impacts productivity during a virtual internship. Create a dedicated workspace that:</p>
      <ul>
      <li>Has reliable internet connectivity (consider a backup solution)</li>
      <li>Provides adequate lighting for video calls</li>
      <li>Minimizes distractions and background noise</li>
      <li>Includes ergonomic furniture to support long work sessions</li>
      </ul>
      <p>Research shows that dedicated workspaces increase productivity by 23% compared to working from common areas like beds or couches.</p>

      <h2>Mastering Digital Communication</h2>
      <p>Clear communication becomes even more crucial in virtual settings where non-verbal cues may be limited. Develop these essential skills:</p>
      <ul>
      <li>Written communication: Be concise yet thorough in emails, messages, and documentation</li>
      <li>Video call etiquette: Maintain eye contact, minimize distractions, and practice active listening</li>
      <li>Asynchronous collaboration: Learn to work effectively across time zones and schedules</li>
      <li>Documentation: Create detailed notes that others can understand and follow</li>
      </ul>
      <p>Communication issues account for 86% of workplace failures, making these skills invaluable in any professional setting.</P>

      <h2>Structured Self-Learning Approaches</h2>
      <p>Without the immediate guidance of in-person mentors, successful interns develop strong self-learning habits:</p>
      <ul>
      <li>Create daily learning objectives aligned with project goals</li>
      <li>Block dedicated time for skill development separate from project work</li>
      <li>Document learnings in a digital journal for future reference</li>
      <li>Practice new skills through mini-projects beyond assigned work</li>
      </ul>
      <p>Studies show that self-directed learners retain 50% more information than passive learners, making this approach particularly valuable in remote settings.</P>

      <h2>Conclusion: The Future of Virtual Internships</h2>
      <blockquote>“Hands-on in most important”</blockquote>

      <p>Virtual internships have evolved from emergency solutions to permanent fixtures in the tech talent pipeline. By mastering remote work skills, maintaining proactive communication, and documenting your achievements, you can transform a virtual internship into a powerful career accelerator.</P>
      <p>The skills developed during virtual internships—self-direction, digital communication, and remote collaboration—are increasingly valuable in today's distributed workforce. Whether your ultimate goal is a remote position or traditional office role, these capabilities will serve you throughout your career.</p>
      <p>Remember that successful virtual internships require intentionality and proactive engagement. By applying the strategies outlined in this guide, you can maximize both your learning and your chances of converting your internship into a full-time opportunity.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData[slug];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((scrollTop / scrollHeight) * 100);
    };

    window.scrollTo(0, 0);
    updateProgress();
    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, [slug]);

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="blog-container">
        <h1 className="blog-title">{post.title}</h1>
        <div className="blog-meta">
          <span><i className="fa-solid fa-calendar-week"></i> {post.date}</span>
          <span><i className="fa-solid fa-user"></i> {post.by}</span>
          <span><i className="fa-solid fa-clock"></i> {post.reading}</span>
        </div>
        <img src={post.banner} alt="Blog banner" className="blog-banner" />
        <main
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <hr />
      </div>
    </>
  );
};

export default BlogPost;
