import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, LinkedinIcon, XIcon, TelegramIcon, EmailIcon, StarIcon } from './components/icons';
import { JobTimeline } from './components/jobs';

export default function Page() {
  return (
    <main>
      <section id="work-experience" className="mb-12">
        <h2 className="font-light text-2xl tracking-tighter mb-8">Work Experience</h2>
        <JobTimeline />
      </section>

      <section id="projects" className="mb-12">
        <h2 className="font-light text-2xl tracking-tighter mb-8">Projects</h2>
    
        <div className="projects-grid">

          {/* Project - Halftone Image Editor */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full relative">
                <Image
                  src="/media/images/half-tone-thumbnail.png"
                  alt="Halftone Image Editor"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="project-year">Released: 2025</div>
              </div>
            </div>
            <div className="text-content">
              <h3 className="font-light tracking-tighter">Halftone Image Editor</h3>
              <div className="tags">
                <div className="font-light">TypeScript</div>
                <div className="font-light">React</div>
                <div className="font-light">Canvas API</div>
                <div className="font-light">SVG</div>
              </div>
              <div className="description font-light">An slick image editor that converts media into an SVG file</div>
              <div className="read-more">
                <a href="https://halftone.andrewramirez.io" className="inline-flex items-center text-xs mt-2 text-white">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image-container">
              <div className="w-full relative">
                <Image
                  src="/media/images/tickedoff.png"
                  alt="TickedOff Task Management App"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
                <div className="project-year">Released: 2024</div>
              </div>
            </div>
            <div className="text-content">
              <h3 className="font-light tracking-tighter">TickedOff</h3>
              <div className="tags">
                <div className="font-light">React</div>
                <div className="font-light">TypeScript</div>
                <div className="font-light">Next.js</div>
              </div>
              <div className="description font-light">
                A full stack web app that lets users track their daily habit consistency in one view
              </div>
              <div className="read-more">
                <a href="https://github.com/anrami/ticked-off" className="inline-flex items-center text-xs mt-2 text-white">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 2 - Smaller project */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full relative">
                <Image
                  src="/sentimentAIAgent.png"
                  alt="Trend Sentiment Analysis AI Agent"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
                <div className="project-year">Released: 2024</div>
              </div>
            </div>
            <div className="text-content">
              <h3 className="font-light tracking-tighter">Sentiment Analysis AI Agent</h3>
              <div className="tags">
                <div className="font-light">Next.js</div>
                <div className="font-light">FastAPI</div>
                <div className="font-light">LangChain</div>
              </div>
              <div className="description font-light">A powerful tool that analyzes sentiment trends across multiple data sources using AI</div>
              <div className="read-more">
                <a href="https://github.com/anrami/trend-sentiment-analysis-agent" className="inline-flex items-center text-xs mt-2 text-white">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 3 - Calchrome.com */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full relative">
                <Image
                  src="/media/images/calchrome-homepage.png"
                  alt="California Chrome Wheels Website"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="project-year">Released: 2019</div>
              </div>
            </div>
            <div className="text-content">
              <h3 className="font-light tracking-tighter">Calchrome.com</h3>
              <div className="tags">
                <div className="font-light">WordPress</div>
                <div className="font-light">WooCommerce</div>
                <div className="font-light">JavaScript</div>
              </div>
              <div className="description font-light">E-commerce website for California Chrome Wheels featuring custom wheel designs and online shopping</div>
              <div className="read-more">
                <a href="/" className="inline-flex items-center text-xs mt-2 text-white">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 4 - Marcellinowheels.com */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full relative">
                <Image
                  src="/media/images/marcellinowheels.jpg"
                  alt="Marcellino Wheels Website"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="project-year">Released: 2019</div>
              </div>
            </div>
            <div className="text-content">
              <h3 className="font-light tracking-tighter">Marcellinowheels.com</h3>
              <div className="tags">
                <div className="font-light">React</div>
                <div className="font-light">Gatsby</div>
                <div className="font-light">Shopify</div>
              </div>
              <div className="description font-light">Premium wheel manufacturer website with custom product configurator and dealer portal</div>
              <div className="read-more">
                <a href="/" className="inline-flex items-center text-xs mt-2 text-white">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 5 - Fusionpowdercoatings.com */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full relative">
                <Image
                  src="/media/images/fusionpowdercoatings.png"
                  alt="Fusion Powder Coatings Website"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="project-year">Released: 2020</div>
              </div>
            </div>
            <div className="text-content">
              <h3 className="font-light tracking-tighter">Fusionpowdercoatings.com</h3>
              <div className="tags">
                <div className="font-light">HTML/CSS</div>
                <div className="font-light">JavaScript</div>
                <div className="font-light">SEO</div>
              </div>
              <div className="description font-light">Industrial powder coating service website with project gallery and quote request system</div>
              <div className="read-more">
                <a href="https://fusionpowdercoatings.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs mt-2 text-white">
                  <span>Visit Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
