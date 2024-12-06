import { WorkPosts } from 'app/components/jobs'

export const metadata = {
  title: 'Work Experience',
  description: 'About Andrew Ramirez\'s professional work experience.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Work Experience</h1>
      <WorkPosts />
    </section>
  )
}
