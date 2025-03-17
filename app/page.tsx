import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, LinkedinIcon, XIcon, TelegramIcon, EmailIcon, StarIcon } from './components/icons';

export default function Page() {
  return (
    <main>
      <section id="projects">
        <h2 className="font-light text-2xl tracking-tighter mb-4">Projects</h2>
    
        <div className="projects-grid">
          {/* Project 1 - Larger project with longer description */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                Project 1 Image
              </div>
            </div>
            <div className="text-content">
              <h3 className="font-light tracking-tighter">TaskFlow Pro</h3>
              <div className="tags">
                <div className="font-light">React</div>
                <div className="font-light">TypeScript</div>
                <div className="font-light">Next.js</div>
              </div>
              <div className="description font-light">
                A full-stack web application for managing personal tasks and projects. Features include task scheduling, project tracking, and collaborative workspaces with real-time updates.
                <br /><br />
                The app integrates with various productivity tools and provides detailed analytics to help users optimize their workflow.
              </div>
              <div className="read-more">
                <a href="/projects/project-one" className="inline-flex items-center text-xs mt-2 text-neutral-800 dark:text-neutral-200">
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
              <div className="w-full aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                Project 2 Image
              </div>
            </div>
            <div className="text-content">
              <h3 className="font-light tracking-tighter">SecureAPI Gateway</h3>
              <div className="tags">
                <div className="font-light">Node.js</div>
                <div className="font-light">Express</div>
                <div className="font-light">MongoDB</div>
              </div>
              <div className="description font-light">A high-performance backend service for handling secure API requests with OAuth2 authentication.</div>
              <div className="read-more">
                <a href="/projects/project-two" className="inline-flex items-center text-xs mt-2 text-neutral-800 dark:text-neutral-200">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 3 - Medium-sized project */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full aspect-[1/1] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                Project 3 Image
              </div>
            </div>
            <div className="text-content">
              <h3 className="font-light tracking-tighter">FitTrack Mobile</h3>
              <div className="tags">
                <div className="font-light">Mobile</div>
                <div className="font-light">React Native</div>
                <div className="font-light">Firebase</div>
              </div>
              <div className="description font-light">A cross-platform mobile application for tracking fitness goals and workouts. Includes personalized workout recommendations and progress tracking.</div>
              <div className="read-more">
                <a href="/projects/project-three" className="inline-flex items-center text-xs mt-2 text-neutral-800 dark:text-neutral-200">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 4 - Very large project with detailed description */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                Project 4 Image
              </div>
            </div>
            <div className="text-content">
              <h3>DataViz Platform</h3>
              <div className="tags">
                <div>Python</div>
                <div>Django</div>
                <div>PostgreSQL</div>
                <div>D3.js</div>
              </div>
              <div className="description">
                A comprehensive data visualization platform for analyzing business metrics and KPIs. Includes customizable dashboards, automated reporting, and machine learning-powered insights to help businesses make data-driven decisions.
                <br /><br />
                Key features:
                <ul className="list-disc pl-5 my-2">
                  <li>Interactive dashboards with real-time updates</li>
                  <li>Custom report generation with export options</li>
                  <li>Anomaly detection and predictive analytics</li>
                  <li>Integration with major data sources and APIs</li>
                </ul>
                <br />
                Used by over 500 businesses to optimize their operations and drive growth.
              </div>
              <div className="read-more">
                <a href="/projects/project-four" className="inline-flex items-center text-xs mt-2 text-neutral-500 hover:text-accent-primary dark:text-neutral-400 dark:hover:text-accent-primary">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 5 - Small project */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                Project 5 Image
              </div>
            </div>
            <div className="text-content">
              <h3>CollabDoc</h3>
              <div className="tags">
                <div>Vue.js</div>
                <div>Vuex</div>
                <div>Firebase</div>
              </div>
              <div className="description">A real-time collaborative editor for team documentation with version control.</div>
              <div className="read-more">
                <a href="/projects/project-five" className="inline-flex items-center text-xs mt-2 text-neutral-500 hover:text-accent-primary dark:text-neutral-400 dark:hover:text-accent-primary">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 6 - Medium-sized project */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full aspect-[3/2] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                Project 6 Image
              </div>
            </div>
            <div className="text-content">
              <h3>HealthInsight</h3>
              <div className="tags">
                <div>Flutter</div>
                <div>Dart</div>
                <div>Firebase</div>
              </div>
              <div className="description">
                A cross-platform mobile app for health tracking and insights. Features include sleep monitoring, nutrition tracking, and personalized health recommendations based on user data.
                <br /><br />
                Integrates with popular fitness wearables and health platforms.
              </div>
              <div className="read-more">
                <a href="/projects/project-six" className="inline-flex items-center text-xs mt-2 text-neutral-500 hover:text-accent-primary dark:text-neutral-400 dark:hover:text-accent-primary">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 7 - Small project */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                Project 7 Image
              </div>
            </div>
            <div className="text-content">
              <h3>WeatherNow Widget</h3>
              <div className="tags">
                <div>JavaScript</div>
                <div>CSS</div>
                <div>Weather API</div>
              </div>
              <div className="description">A lightweight, customizable weather widget that can be embedded in any website.</div>
              <div className="read-more">
                <a href="/projects/project-seven" className="inline-flex items-center text-xs mt-2 text-neutral-500 hover:text-accent-primary dark:text-neutral-400 dark:hover:text-accent-primary">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 8 - Medium project */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full aspect-[2/1] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                Project 8 Image
              </div>
            </div>
            <div className="text-content">
              <h3>E-Commerce Platform</h3>
              <div className="tags">
                <div>Shopify</div>
                <div>Liquid</div>
                <div>JavaScript</div>
              </div>
              <div className="description">
                A custom Shopify theme with advanced product filtering, enhanced checkout experience, and performance optimizations.
                <br /><br />
                Resulted in a 35% increase in conversion rate for the client.
              </div>
              <div className="read-more">
                <a href="/projects/project-eight" className="inline-flex items-center text-xs mt-2 text-neutral-500 hover:text-accent-primary dark:text-neutral-400 dark:hover:text-accent-primary">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 9 - Small project */}
          <div className="project">
            <div className="project-image-container">
              <div className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center text-gray-400">
                Project 9 Image
              </div>
            </div>
            <div className="text-content">
              <h3>PDF Parser</h3>
              <div className="tags">
                <div>Python</div>
                <div>Machine Learning</div>
              </div>
              <div className="description">A tool that extracts structured data from PDF documents using machine learning.</div>
              <div className="read-more">
                <a href="/projects/project-nine">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
