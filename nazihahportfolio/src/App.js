import './App.css';
import CertifiedDataAssociate from './pic/CertifiedDataAssociate.png';
import DigitalThinkingInnovation from './pic/DigitalThinkingInnovation.png';
import MicrosoftCertifiedAzureDataFundamentals from './pic/MicrosoftCertifiedAzureDataFundamentals.png';


function App() {
  return (
    <div className="App">
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div>
    <nav className="navbar">
        <div className="max-width">
            <div className="logo"></div>
            <ul className="menu">
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#skills" className="menu-btn">Skills</a></li>
                <li><a href="#certifications" className="menu-btn">Certifications</a></li>
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    {/* home */}
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, My Name is</div>
                <div className="text-2">Nazihah Nazri</div>
            </div>
        </div>
    </section>

    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About Me</h2>
            <div className="about-content">
                <div className="column left">
                </div>
                <div className="column right">
                    <p>insert text here</p>
                    <a href="https://drive.google.com/file/d/19msMQTUWFDBZJrSDB8sIUKv5neSMqWNf/view?usp=sharing">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
    
    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My Skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">INTERNSHIP & PROJECT</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus qui laudantium, voluptas non corporis, expedita quas enim architecto officiis sint reprehenderit eaque aliquid vel. Veritatis repellendus nam omnis! Qui?</p>
                    <a href="#">Read more</a>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>60%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>40%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>50%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>40%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="certifications" id="certifications">
        <div className="max-width">
            <h2 className="title">Certifications & Badges</h2>
            <div className="cert-content">
            <div className="box">
            </div>
            <div className="card">
                <div className="box">
                <img src={CertifiedDataAssociate} width="200" height="200" alt=""/>
                    <div className="text">CDA</div>
                    <p>Data Concepts | Organizational Data</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                <img src={DigitalThinkingInnovation} width="200" height="200" alt=""/>
                    <div className="text">DTI</div>
                    <p>Design Thinking | Digital Innovation</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                <img src={MicrosoftCertifiedAzureDataFundamentals} width="200" height="180" alt=""/>
                    <div className="text">DP-900d</div>
                    <p>Core Data Concepts | Relational Data | Non-Relational Data | Data Workloads</p>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Nazihah Nazri</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Taiping, Perak</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">nazihahmohdnazri@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message Me</div>
                    <form action="https://formspree.io/f/xzbokjqb" method="POST">
                        <div className="fields">
                        <div className="field name">
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        </div>
                        <div className="field email">
                        <input type="email" name="Email" placeholder="Your Email" required/>
                        </div>
                        </div>
                        <div className="field">
                            <input type="subject" name="Subject" placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                        <textarea cols="30" rows="10" name="Message" placeholder="Message" required></textarea>
                        </div>
                        <div className="button-area">
                        <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <span><a href="https://github.com/NazihahMN">Nazihah Nazri</a> | <span class="far fa-copyright"></span> All Rights Reserved. Privacy Policy</span>
    </footer>

    </div>
  );
}

export default App;