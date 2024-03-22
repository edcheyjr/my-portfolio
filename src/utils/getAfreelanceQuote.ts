export default function getAQuote(
  receiver: string,
  sender: string,
  services: string[]
): string {
  const emailContent = `
    Subject: Request for Freelance Quote

    Dear ${receiver},

    I hope this email finds you well. My name is ${sender} and I am reaching out to inquire about your freelance services.

    I am currently in need of [brief description of the project or service needed]. After reviewing your portfolio and previous work, I believe that your expertise aligns well with the requirements of my project.

    Could you please provide me with a quote for the following services:

    ${formatServices(services)}

    Additionally, I would appreciate if you could provide an estimated timeframe for completion and any other relevant details regarding your process or terms of service.

    If you require any further information or clarification, please do not hesitate to reach out to me. I am more than happy to provide additional details as needed.

    Thank you for considering my request. I look forward to hearing back from you soon.

    Warm regards,

    ${sender}
  `
  return emailContent
}

const formatServices = (services: string[]) => {
  let formattedServices = ''
  for (const key in services) {
    formattedServices += `${key}: ${services[key]}\n`
  }
  return formattedServices
}
