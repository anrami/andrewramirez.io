import Link from 'next/link'
import Image from 'next/image'

// Simple placeholder for WorkPosts component
export function WorkPosts() {
  return (
    <div className="grid gap-12">
      <p>Work posts will appear here.</p>
    </div>
  )
}

// Job Timeline component for work experience
type Job = {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
  logo?: string;
};

const workExperience: Job[] = [
  {
    company: 'Amazon Web Services',
    position: 'Software Engineer',
    period: 'September 2022 - December 2024',
    location: 'Seattle, Washington',
    logo: '/media/images/amazon_web_services_logo.jpg',
    achievements: [
      'Designed and implemented an EBS automated bootstrapping system in Java with parent-child workflows and DynamoDB state management, accelerating server deployments by 30%.',
      'Integrated Apache Kafka to enable asynchronous event processing between microservices, resulting in a 25% improvement in real-time communication reliability.',
      'Designed and developed a secure full-stack web application (React, TypeScript, Node.js) for aggregating fleet-wide critical data; leveraged AWS Cognito and Midway authentication to reduce manual operator intervention by 45%.',
      'Led the design and implementation of a multi-region AWS CDK bootstrapping service using TypeScript, CodeCommit and leveraged infrastructure-as-code (IaC), to streamline deployment and enhance system reliability.',
      'Implemented a new platform type for provisioning EBS volumes for AWS Outposts improving performance across the fleet.',
      'Optimized CI/CD processes by automating build processes, decreasing deployment times by 30% and improving team productivity.',
      'Mentored new hires and conducted code reviews to enhance team coding standards and accelerated onboarding processes.'
    ],
  },
  {
    company: 'Accenture',
    position: 'Software Engineer Intern',
    period: 'June 2022 - July 2022',
    location: 'Los Angeles, California',
    logo: '/media/images/accenture_logo.jpg',
    achievements: [
      'Identified and resolved critical security vulnerabilities within the HyperLedger Typescript framework, strengthening the security posture and passing internal audits with zero major findings.'
    ],
  },
  {
    company: 'ChargeNet Stations',
    position: 'Software Engineer Intern',
    period: 'October 2021 - April 2022',
    location: 'Remote, California',
    logo: '/media/images/chargenet_stations_logo.jpg',
    achievements: [
      'Developed and deployed cloud-based RESTful API endpoints for ChargeOpt workflows, improving integration efficiency and reducing latency by 20%.',
      'Authored YAML CloudFormation scripts to streamline infrastructure as code, ensuring consistent and reliable deployments.',
      'Created and maintained automated CI/CD pipelines using GitHub Actions and AWS CodeBuild, reducing deployment errors by 35%.'
    ],
  },
  {
    company: 'Los Angeles Cleantech Incubator',
    position: 'Software Engineer Intern',
    period: 'May 2021 - September 2021',
    location: 'Los Angeles, California',
    logo: '/media/images/laincubator_logo.jpg',
    achievements: [
      'Built a full-stack inventory management system using React, Node.js, MongoDB, AWS EC2 and S3 storage, improving inventory accuracy and operational efficiency.',
      'Developed RESTful APIs and enhanced frontend responsiveness using modern JavaScript and CSS3/SASS.',
      'Implemented secure authentication and authorization mechanisms using JWT and bcrypt, enhancing system security protocols.'
    ],
  },
  {
    company: 'California Chrome Wheel Inc',
    position: 'Web Developer',
    period: 'June 2018 - May 2020',
    location: 'Valencia, California',
    logo: '/media/images/ccw-logo.png',
    achievements: [
      'Designed and developed a responsive e-commerce website using HTML, CSS, JavaScript, and WordPress, increasing online sales by 45%.',
      'Implemented SEO best practices and optimized site performance, resulting in a 30% improvement in search engine rankings and page load times.',
      'Created and maintained product databases and integrated payment gateways to improve user experience and checkout efficiency.'
    ],
  },
];

export function JobTimeline() {
  return (
    <div className="timeline-container mt-8 mb-16">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800"></div>

        {workExperience.map((job, index) => (
          <div 
            key={index} 
            className={`timeline-item mb-12 md:mb-16 relative flex flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-job-${index}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 top-6 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-neutral-500 dark:bg-neutral-400 z-10 shadow-md"></div>
            
            {/* Content */}
            <div className={`ml-10 flex-1 md:flex-none md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:mr-auto md:ml-0' : 'md:pl-8 md:ml-auto md:mr-0'}`}>
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{job.position}</h3>
                    <p className="text-base text-neutral-700 dark:text-neutral-300 font-medium">{job.company}</p>
                  </div>
                  {job.logo && (
                    <div className="w-10 h-10 flex-shrink-0 bg-white dark:bg-neutral-800 rounded-md overflow-hidden p-1">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                  )}
                </div>
                
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
                
                <ul className="list-disc list-outside text-sm text-neutral-700 dark:text-neutral-300 ml-4 space-y-1.5">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
