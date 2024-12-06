import { WorkPosts } from 'app/components/jobs'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Andrew Ramirez. <span className="wave">👋</span>
      </h1>
      <p className="mb-4">
        {`I'm a Software Engineer and Tech Enthusiast based in Seattle WA, that specializes in web technology. My love for technology has been shaped by my passion for Computers, Programming, and Video Games. I've worked on various projects in the tech industry, and I'm always eager to learn more.`}
      </p>
      <a 
        href="mailto:work@andrewramirez.io"
        className="inline-block bg-white text-black font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 button mb-16"
      >
        Email me
      </a>      
    </section>
  )
}
