// app/faq/page.tsx
export default function FAQ() {
  const faqs = [
    {
      question: "Do I need to pay to create a player profile?",
      answer:
        "No. Creating a basic player profile is completely free. You can upgrade later to unlock advanced features like unlimited videos and scout contact access.",
    },
    {
      question: "How does verification work?",
      answer:
        "Our team reviews your profile for authenticity using provided documents, club references, and video evidence. Verified profiles display a badge and receive higher visibility.",
    },
    {
      question: "Can I upload my own videos?",
      answer:
        "Yes. You can upload highlight videos directly or provide YouTube links. If you submit raw footage for us to edit and publish on our channel, you agree to our Video License Agreement (revenue belongs to KDAconnect AI).",
    },
    {
      question: "How do scouts find me?",
      answer:
        "Scouts use advanced filters (position, age, stats, nationality) to search our database. Verified profiles appear higher in results. Premium players also get featured in 'Rising Stars' and newsletters.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We comply with GDPR and never sell your data. Your profile is only visible to registered scouts and clubs. You control what information is public.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-6">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="/contact" className="text-black font-medium">
              Contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
