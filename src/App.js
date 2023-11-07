import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';


// Define your page components
function Home() {
  return (
    <div className="container">
      <div className="page">
        <h1>Home Page</h1>
        {
          <p className="brief-header"> Below is the presentation regarding the menemo project  </p>
        }
      </div>
      {<video width="50%" height="auto" controls>
          <source src="/sip-vpresintation.mkv" type="video/mp4" />
          Your browser does not support the video tag.
        </video>}

        
    </div>
  );
}

function InnovativeBrief() {
  return (
    <div className="container">
      <div className="page">
        <h1>the Inovative Brief</h1>
        {
          
          <p className="brief-header"> Technical Field</p>
        }
        {
          
          <p className="brief-common-text"> Web Development, Machine Learning & computer Vision, Digital Media Processing, Cloud & Environment Management, User Interface (UI) & user Experience (UX) Design, data Management & Storage</p>
        }


{
          
          <p className="brief-header"> Background Information</p>
        }
        {
          
          <p className="brief-common-text"> ChatGPT and the pursuit general artificial intelligence are the heart of the inspiration behind this project. one of the reasons I am pursuing this project because of the experience and new understanding that comes with crating a project like this, I hope to integrate this in my home systems. </p>
        }


{
          
          <p className="brief-header"> Prior Art legal term</p>
        }
        {
          
          <p className="brief-common-text"> Prior art is a legal term from patents. It should describe any sources of inspiration for your project, any sources currently on the market that might be considered competitors, and any similar work that your SIP might build upon. By the end of this section, your reader should have a clear view of the existing marketplace. Do not just list sources, but analyze their pros and cons.</p>
        }



{
          
          <p className="brief-header"> Project Description</p>
        }
        {
          
          <p className="brief-common-text"> This project currently uses artificial intelligence to process video and text information. The project also has an interactive element that allows the user to asker the A.I questions about the information the user provides. </p>
        }




{
          
          <p className="brief-header"> Innovation Claim</p>
        }
        {
          
          <p className="brief-common-text"> MinimoView PWA uniquely combines advanced machine learning-driven video analysis with a seamless user interface in a web-based platform, bridging the gap between sophisticated AI capabilities and intuitive user engagement, setting a new benchmark in digital media processing applications.</p>
        }

{
          
          <p className="brief-header"> Usage Scenario</p>
        }
        {
          
          <p className="brief-common-text"> Consider a situation where "DataMasters Inc." frequently works with varied data sources, like user reviews, survey responses, images, and occasional video clips. They've been looking for a tool that can process this data without the need to store it, ensuring the privacy of their information and the efficiency of the process.</p>
        }

{
          
          <p className="brief-header"> Description of Design Prototype </p>
        }
        {
          
          <p className="brief-common-text">The MinimoView Progressive Web Application (PWA) is built on the React JavaScript library, which ensures compatibility across multiple devices and offers offline capabilities. The backend utilizes Python, specifically libraries such as OpenCV for video processing and PyTorch for AI-driven video analysis. The system leverages cloud storage and processing for scalable video uploads and analysis.
          The prototype serves as a foundational framework for the final MinimoView PWA. While the prototype showcases core functionalities, the final project aims to incorporate additional features based on user feedback, improved AI algorithms for more accurate video analysis, and integrations with other platforms and tools for enhanced versatility. In essence, the design prototype is the stepping stone, allowing us to test, iterate, and perfect our approach for the final project implementation.
           </p>
        }


      </div>
    </div>
  );
}

function Resources() {
  return <h1>Resources Page</h1>;
}

function AboutUs() {
  return (
    <div className="container">
      <div className="page">
        <h1>about us</h1>
        {
          <p>Welcome to my personal page! My name is Eric Canada, and I am a passionate technologist currently advancing my expertise in Artificial Intelligence at the University of Advancing Technology (UAT). My academic journey is a blend of rigorous theory and hands-on experience, preparing me to contribute to the ever-evolving landscape of AI.

          Professionally, I stand at the intersection of technology and craftsmanship as a lathe programmer specializing in the Aerospace industry. My role involves precision and attention to detail, ensuring that the components we produce meet the exacting standards this field demands.
          
          Outside of my professional life, I am an avid technophile with a penchant for 3D printing. My home is my workshop, where I bring ideas to life using tools like Fusion 360 and other creative engines. There's a unique kind of joy in watching a concept materialize layer by layer, and it's this magic that fuels my enthusiasm for digital fabrication.
          
          But my skills are not confined to the virtual realm. As an experienced welder, I understand the value of traditional craftsmanship and its irreplaceable role in a world that's quickly moving towards the digital. Welding has taught me patience, precision, and the importance of a steady hand—skills that are surprisingly synergistic with programming and AI development.
          
          Speaking of programming, it is another arena where I thrive. Building programs and crafting Python applications is more than a job or a hobby; it's a means to problem-solve, to innovate, and to create tools that could one day change how we interact with technology.
          
          Whether it's through lines of code, a welded joint, or a 3D printed model, I find my calling in creation. It is in the act of making new things, improving existing ones, and learning from the process that I find my professional fulfillment.
          
          If you're curious about my work or share similar interests, feel free to connect. I am always open to discussing new technologies, potential collaborations, 
          or simply exchanging ideas with fellow enthusiasts.</p>
        }
      </div>
    </div>
  );
  
}



// Define the HomeComponent
function HomeComponent() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/innovative-brief">Innovative Brief</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/about-me">About us</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <HomeComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovative-brief" element={<InnovativeBrief />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about-me" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
