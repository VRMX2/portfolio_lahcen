import { streamText } from 'ai'
import { google } from '@ai-sdk/google'
import { personalInfo, skills, projects, experience } from '@/lib/data'

// Map data slightly so it's readable for the prompt
const systemPrompt = `You are a helpful, professional, and slightly witty AI assistant for Lahcen Grissi's developer portfolio.
You are embedded directly in his portfolio website to answer questions about him from recruiters and visitors.

Here is everything you need to know about Lahcen:
- Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Location: ${personalInfo.location}
- Bio: ${personalInfo.bio}
- Email: ${personalInfo.email}

Skills:
${skills.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Experience:
${experience.map(e => `- ${e.role} at ${e.organization} (${e.period})`).join('\n')}

Your goal is to be helpful and concise. Keep your answers brief (1-3 sentences maximum) unless specifically asked to elaborate.
Direct the user to contact Lahcen at ${personalInfo.email} if they want to hire him.
Always maintain a professional but approachable tone. Do not hallucinate skills or experience that are not listed here.`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Using gemini-1.5-flash which is perfect for fast chat bots
    const result = streamText({
      model: google('gemini-1.5-flash'),
      messages,
      system: systemPrompt,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Chat API Error:", error)
    return new Response("Error processing your request", { status: 500 })
  }
}
