const conf = {

    emailjsServiceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),

    emailjsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),

    emailjsApiPublicKey: String(import.meta.env.VITE_EMAILJS_API_PUBLIC_KEY),
}

export default conf;