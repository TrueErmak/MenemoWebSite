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
          
          <p className="brief-header"> Prior Art legal term Pros</p>
        }
        {
          
          <p className="brief-common-text">.</p>
        }
          <p className="brief-common-text">1.	High Demand: There's a growing demand for advanced AI and natural language processing applications in various sectors, including business, education, healthcare, and entertainment. Developing a competitive product in this field can potentially tap into a lucrative market.</p>
          <p className="brief-common-text">2.	Innovation Opportunities: This field is at the forefront of technological innovation, offering numerous opportunities to create groundbreaking applications and solutions that can transform industries.</p>
          <p className="brief-common-text">3.	Learning and Growth: Working in this field provides a chance to stay updated with the latest advancements in AI and machine learning. Continuous learning and skill development are inherent benefits.</p>
          <p className="brief-common-text">4.	Diverse Applications: The versatility of AI models like BERT allows for a wide range of applications, from chatbots and virtual assistants to content creation and data analysis, providing multiple avenues for product development.</p>
          <p className="brief-common-text">5.	Community and Collaboration: There is a strong community around AI development, offering support, collaboration opportunities, and resources for learning and improvement.</p>

          <p className="brief-sub-text"> Prior Art legal term Cons</p>

          <p className="brief-common-text">1.	High Competition: The field is highly competitive with established players like OpenAI (ChatGPT), Google (LaMDA), and others. Standing out in the market can be challenging.</p>
          <p className="brief-common-text">2.	Technical Complexity: Developing advanced AI systems requires a deep understanding of machine learning, natural language processing, and related technologies. This can be a significant barrier for those without a strong technical background.</p>
          <p className="brief-common-text">3.	Ethical and Regulatory Challenges: AI development comes with ethical considerations such as data privacy, bias in AI, and potential misuse of technology. Navigating these issues, along with evolving regulatory landscapes, can be complex.</p>
          <p className="brief-common-text">4.	Resource Intensive: Developing and training sophisticated AI models can be resource-intensive, requiring significant computational power and data, which can be costly.</p>
          <p className="brief-common-text">5.	Rapidly Changing Field: The fast pace of technological advancements in AI means constant updates and adaptations are necessary, which can be challenging to keep up with.</p>
          <p className="brief-common-text">6.	Market Saturation: As more entities enter this field, there's a risk of market saturation, making it harder to capture a significant market share or create a unique value proposition.</p>

<p className="brief-sub-text"> Prior Art legal high level top 12 competitor</p>
          <p className="brief-common-text">ClickUp: A productivity platform that includes AI features for enhancing workflow across various business sectors.</p>
          <p className="brief-common-text">2.	Writesonic: An AI-powered writing tool designed for marketing and content creation.</p>
          <p className="brief-common-text">3.	Copy.ai: A platform that leverages AI for copywriting and content generation.</p>
          <p className="brief-common-text">4.	SpinBot: An AI tool focused on text spinning and rewriting for content optimization.</p>
          <p className="brief-common-text">5.	Jasper Chat: An AI chatbot designed for engaging conversation and content assistance.</p>
          <p className="brief-common-text">6.	Bard AI: Google's AI chatbot that integrates advanced language model capabilities.</p>
          <p className="brief-common-text">7.	YouChat: An AI chatbot for interactive communication and query resolution. </p>
          <p className="brief-common-text">8.	Otter: Specializes in voice-to-text transcription and offers AI-driven note-taking features.</p>
          <p className="brief-common-text">9.	Bing AI: Microsoft's AI-powered search and conversation tool.</p>
          <p className="brief-common-text">10.	OpenAI Playground: A platform for experimenting with various OpenAI models, including language models.</p>
          <p className="brief-common-text">11.	Perplexity AI: An AI-driven tool for information search and query resolution.</p>
          <p className="brief-common-text">12.	Claude: An AI chatbot known for engaging and human-like conversational capabilities.</p>

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
                    <p className="brief-sub-text"> Evaluation Criteria: 1.	Functionality and Reliability</p> 
                    <p className="brief-common-text">•	Data Processing Accuracy: How accurately does MinimoView process the uploaded data against the chosen or provided script? </p>
                    <p className="brief-common-text">•	Script Versatility: Can MinimoView handle a broad range of custom scripts provided by users? </p>
                    <p className="brief-common-text">•	Data Handling: Does the system consistently handle multiple data types (text, image, video) without errors or crashes? </p>

                    <p className="brief-brief-sub-text"> Evaluation Criteria: 2.	Performance and Efficiency</p>
                    <p className="brief-common-text">•	Processing Speed: How long does it take for the platform to process different datasets, especially larger files or complex scripts? </p>
                    <p className="brief-common-text">•	System Response: How quickly does the system respond to user interactions, like uploads, script selections, and result displays?</p>
                    <p className="brief-common-text">•	Scalability: Can the platform handle a surge in users or larger data files without a noticeable drop in performance? </p>

                    <p className="brief-sub-text"> Evaluation Criteria: 3.	Usability and User Experience</p>
                    <p className="brief-common-text">•	Interface Intuitiveness: How easily can new users understand and navigate the platform?</p>
                    <p className="brief-common-text">•	Error Handling and Feedback: Does the system provide clear feedback when an error occurs or when an operation is successful? </p>
                    <p className="brief-common-text">•	Mobile Responsiveness: How well does the PWA function and display on mobile devices or different screen sizes? </p>
                    

                    <p className="brief-sub-text"> Evaluation Criteria: 4.	Security and Privacy </p>
                    <p className="brief-common-text">•	Data Privacy Assurance: Since no data storage is promised, is the platform consistent in not storing user data? </p>
                    <p className="brief-common-text">•	Script Security: When users upload or use custom scripts, are there measures in place to prevent malicious code execution? </p>
                    <p className="brief-common-text"> •	Secure Interactions: Are all user interactions, especially data uploads and downloads, encrypted and secure?</p>
                    

                    <p className="brief-sub-text"> Evaluation Criteria: 5.	Collaboration and Sharing   </p>
                    <p className="brief-common-text"> •	Link Generation: How effectively can users generate and share temporary links for processed results?</p>
                    <p className="brief-common-text">•	Link Expiry: How reliably do these links expire after their designated duration? </p>
                    <p className="brief-common-text"> </p>

                    <p className="brief-sub-text"> Evaluation Criteria: 6.	Extensibility and Customizability   </p>
                    <p className="brief-common-text"> •	Script Integration: How easily can new processing scripts be integrated into the platform?</p>
                    <p className="brief-common-text"> •	Feature Additions: How accommodating is the platform's architecture for adding new features or expanding its capabilities?</p>
                    
                    
                    <p className="brief-header">Objectives and Tasks Associated with the Project </p>

                    <p className="brief-sub-text">Objective:1 Develop a Comprehensive Understanding of Current AI Technologies </p>
                    <p className="brief-common-text">Task 1: Conduct thorough literature reviews and market analysis on existing AI technologies and their applications. </p>
                    <p className="brief-common-text">Task 2: Attend webinars, workshops, and conferences related to AI innovations. </p>

                    <p className="brief-sub-text">Objective:2 Identify Key Areas for AI Application in Public Services</p>
                    <p className="brief-common-text">Task 1: Analyze public service sectors to identify potential areas for AI integration. </p>
                    <p className="brief-common-text">Task 2: Gather public feedback on areas where AI can enhance service delivery.
 </p>

                    <p className="brief-sub-text">Objective: Design and Develop AI-Driven Solutions for Identified Areas </p>
                    <p className="brief-common-text">Task 1: Prototype AI solutions tailored to specific public service needs. </p>
                    <p className="brief-common-text">Task 2: Develop user-friendly interfaces for interaction with these AI solutions. </p>

                    <p className="brief-sub-text">Objective: Ensure Ethical Use and Implementation of AI </p>
                    <p className="brief-common-text">Task 1: Establish guidelines for ethical AI use, focusing on privacy, fairness, and transparency. </p>
                    <p className="brief-common-text">Task 2: Implement regular audits to ensure compliance with ethical standards. </p>

                    <p className="brief-sub-text">Objective: Train New AI Models for Advanced Problem Solving </p>
                    <p className="brief-common-text">Task 1: Collect and curate diverse datasets for training new models. </p>
                    <p className="brief-common-text">Task 2: Use machine learning techniques to train models for specific tasks. </p>

                    <p className="brief-sub-text">Objective: Collaborate with AI Research Institutions and Industry Leaders </p>
                    <p className="brief-common-text">Task 1: Form partnerships for knowledge exchange and joint research initiatives. </p>
                    <p className="brief-common-text">Task 2: Participate in collaborative projects to develop innovative AI solutions. </p>

                    <p className="brief-sub-text">Objective: Evaluate and Optimize AI Solutions for Public Adoption </p>
                    <p className="brief-common-text">Task 1: Conduct pilot tests of AI solutions in controlled environments. </p>
                    <p className="brief-common-text">Task 2: Collect and analyze user feedback for continuous improvement. </p>

                    <p className="brief-sub-text">Objective: Promote AI Literacy and Awareness Among the Public </p>
                    <p className="brief-common-text">Task 1: Organize community workshops and seminars on AI and its benefits.</p>
                    <p className="brief-common-text">Task 2: Develop educational materials and online resources for public access. </p>
                    
                    <p className="brief-sub-text">Objective: Secure Funding and Resources for Sustained AI Development </p>
                    <p className="brief-common-text">Task 1: Prepare and submit grant proposals to secure funding. </p>
                    <p className="brief-common-text">Task 2: Identify and approach potential sponsors and donors. </p>

                    <p className="brief-sub-text">Objective: Publish Findings and Innovations in AI </p>
                    <p className="brief-common-text">Task 1: Write and submit papers to academic journals and conferences. </p>
                    <p className="brief-common-text">Task 2: Present project results at industry forums and public symposiums. </p>

                   


{       
                
          <p className="brief-header"> Description of Design Prototype </p>
        }
        {
          
          <p className="brief-common-text">The MinimoView Progressive Web Application (PWA) is built on the React JavaScript library, which ensures compatibility across multiple devices and offers offline capabilities. The backend utilizes Python, specifically libraries such as OpenCV for video processing and PyTorch for AI-driven video analysis. The system leverages cloud storage and processing for scalable video uploads and analysis.
          The prototype serves as a foundational framework for the final MinimoView PWA. While the prototype showcases core functionalities, the final project aims to incorporate additional features based on user feedback, improved AI algorithms for more accurate video analysis, and integrations with other platforms and tools for enhanced versatility. In essence, the design prototype is the stepping stone, allowing us to test, iterate, and perfect our approach for the final project implementation.
           </p>
        }
          <p className="brief-header">Evaluation Plan </p>
          <p className="brief-common-text">To rigorously assess the MinimoView PWA project's success, our team has conceptualized a multi-faceted evaluation strategy. We begin with user experience evaluations, engaging a diverse set of beta users to interact with our platform and solicit their feedback. These interactions will be monitored using embedded analytics tools, allowing us to gauge the intuitiveness of our UI/UX design and the overall user journey.
For the accuracy and efficiency of data processing, benchmarking tests will be conducted. This involves comparing the processing results with established standards, ensuring our platform's output aligns with expected outcomes. Additionally, the platform's performance will be gauged under varying loads, from individual users to peak traffic scenarios. This will provide insights into scalability and potential bottlenecks.
Data security and privacy, paramount in today's digital environment, will be evaluated by third-party security experts. These experts will simulate various attack scenarios, ensuring robustness against potential breaches. An integral part of this evaluation will be ensuring that user data isn't persistently stored and that encryption protocols are adequately safeguarding data transfers.
Collaboration features, such as sharing and exporting results, will be scrutinized for both functionality and security. Beta users will be tasked with using these features extensively, reporting any challenges faced.
Lastly, the extensibility of the platform will be evaluated by inviting external developers to integrate additional custom scripts. Their experience will shine a light on the system's adaptability and its readiness for future enhancements.
In summary, our evaluation plan is meticulously designed to tackle every facet of the MinimoView project, ensuring a holistic assessment that aligns with the initial objectives and responds adequately to the evaluation criteria set forth.
</p>


<p className="brief-header"> Project Completion Assessment</p>
<p className="brief-sub-text">Post-Mortem Analysis</p>
<p className="brief-common-text">he project aimed to create a question-answering system by collating data from various sources, utilizing basic AI Natural Language Processing (NLP) techniques. While the fundamental aspects of the project, including the UX elements, are operational, they require refinement for efficiency and effectiveness. The project's current challenge is to carve out a unique niche in the AI domain, similar to its competitors. </p>

<p className="brief-sub-text">Completion Status</p>
<p className="brief-common-text">The project's Q&A system and other functionalities are currently operational but not optimal. Plans are underway to enhance the system with a custom T5 module to improve user experience. Additional features are also being considered to extend the project's utility for its users. </p>

<p className="brief-header">Challenges and Successes</p>
<p className="brief-sub-text">Challenges: </p>
<p className="brief-common-text">The primary challenge lies in developing a custom AI solution capable of rivaling established entities like ChatGPT. The project endeavors to not only compete but also bring innovative solutions to the market. </p>
<p className="brief-sub-text">Successes: </p>
<p className="brief-common-text">The project has successfully established a functional, if not yet perfect, framework for a question-answering system. This foundational success lays the groundwork for future enhancements and innovations. </p>


<p className="brief-sub-text">Completion Status</p>
<p className="brief-common-text"> </p>

<h2>References</h2>
        <ul>
          <li>
            DeepAI. (n.d.). Text Generation API. Retrieved from 
            <a href="https://deepai.org/machine-learning-model/text-generator" target="_blank" rel="noopener noreferrer">DeepAI Text Generation API</a>.
          </li>
          <li>
            Hugging Face. (n.d.). BERT - State-of-the-Art Language Model for NLP. Retrieved from 
            <a href="https://huggingface.co/bert" target="_blank" rel="noopener noreferrer">Hugging Face BERT</a>.
          </li>
          <li>
            OpenAI. (n.d.). OpenAI API. Retrieved from 
            <a href="https://beta.openai.com/signup/" target="_blank" rel="noopener noreferrer">OpenAI API</a>.
          </li>
          <li>
            Brown, T. B., et al. (2020). Language models are few-shot learners. Retrieved from 
            <a href="https://arxiv.org/abs/2005.14165" target="_blank" rel="noopener noreferrer">arXiv preprint arXiv:2005.14165</a>.
          </li>
          <li>
            Vincent, J. (2023). ChatGPT Alternatives: Exploring Other AI Chatbots. The Verge. Retrieved from 
            <a href="https://www.theverge.com/" target="_blank" rel="noopener noreferrer">The Verge - ChatGPT Alternatives</a>.
          </li>
          <li>
            Hagendorff, T. (2020). The ethics of AI ethics: An evaluation of guidelines. Minds and Machines, 30(1), 99-120.
          </li>
          <li>
            Marr, B. (2021). 7 Key Artificial Intelligence Trends for 2021. Forbes. Retrieved from 
            <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer">Forbes - AI Trends 2021</a>.
          </li>
        </ul>

      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="container">
      <div className="page">
        <h2>References</h2>
        <ul>
          <li>
            DeepAI. (n.d.). Text Generation API. Retrieved from 
            <a href="https://deepai.org/machine-learning-model/text-generator" target="_blank" rel="noopener noreferrer">DeepAI Text Generation API</a>.
          </li>
          <li>
            Hugging Face. (n.d.). BERT - State-of-the-Art Language Model for NLP. Retrieved from 
            <a href="https://huggingface.co/bert" target="_blank" rel="noopener noreferrer">Hugging Face BERT</a>.
          </li>
          <li>
            OpenAI. (n.d.). OpenAI API. Retrieved from 
            <a href="https://beta.openai.com/signup/" target="_blank" rel="noopener noreferrer">OpenAI API</a>.
          </li>
          <li>
            Brown, T. B., et al. (2020). Language models are few-shot learners. Retrieved from 
            <a href="https://arxiv.org/abs/2005.14165" target="_blank" rel="noopener noreferrer">arXiv preprint arXiv:2005.14165</a>.
          </li>
          <li>
            Vincent, J. (2023). ChatGPT Alternatives: Exploring Other AI Chatbots. The Verge. Retrieved from 
            <a href="https://www.theverge.com/" target="_blank" rel="noopener noreferrer">The Verge - ChatGPT Alternatives</a>.
          </li>
          <li>
            Hagendorff, T. (2020). The ethics of AI ethics: An evaluation of guidelines. Minds and Machines, 30(1), 99-120.
          </li>
          <li>
            Marr, B. (2021). 7 Key Artificial Intelligence Trends for 2021. Forbes. Retrieved from 
            <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer">Forbes - AI Trends 2021</a>.
          </li>
        </ul>
      </div>
      <VideoGallery />
    </div>
  );
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

function Contact() {
  return (
    <div className="container">
      <div className="page">
        <h1>Contact Me</h1>
        
        <p className="brief-common-text"> If you have any questions or would like to get in touch, feel free to contact me using the form below or via email at ericanad@uat.edu </p>
        <form>
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" required /><br />

          <label for="email">Email:</label><br />
          <input type="email" id="email" name="email" required /><br />

          <label for="message">Message:</label><br />
          <textarea id="message" name="message" rows="4" required></textarea><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
  
}




function FooterComponent() {
  return (
    <footer>
      {/* Your footer content here */}
      <p>Copyright © {new Date().getFullYear()} by Eric Canada</p>
                <p className="footer-font">&copy; made with Vercel </p>
    </footer>
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
      <Link to="/Contact">Contact</Link>
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
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <FooterComponent /> {/* Include the footer here */}
    </Router>
    
  );
}

// video Gallery
function VideoGallery() {
  // Array of YouTube video IDs (you can replace these with your actual YouTube video IDs)
  const youtubeVideoIds = [
    "DsnIzn0BL7Q", // Replace with your video IDs
    "0IpFxec9yDA",
    "FipxOVlKso4",
    "E0B9bbG-nVI", 
    "/H_67fmwI12Y",
    "bLCEG5aDvoE", 
    "L7wySHaK7xA",
    "UG1Z3b53clM",
    "/QC4aF2mH8e0",
    "/2gDYDAzZRCM",
    "/pn1ay0ff3Lc",
    
    
    // ... more video IDs
  ];

  return (
    <div className="video-gallery">
      {youtubeVideoIds.map((id, index) => (
        <div key={index} className="video-item">
          <iframe
            width="320"
            height="240"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      ))}
    </div>
  );
}




export default App;
