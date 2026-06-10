import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppButton() {
  return (
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <FaWhatsapp size={28} color="#ffffff" />
    </a>
  )
}