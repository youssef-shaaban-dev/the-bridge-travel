import emailjs from "@emailjs/browser";

/**
 * Sends an email using Email.js
 * @param {Object} templateParams - The parameters for the email template
 * @param {string} [templateId] - Optional template ID (defaults to VITE_EMAILJS_TEMPLATE_ID)
 * @returns {Promise} - Resolves if success, rejects if error
 */
export const sendEmail = async (templateParams, templateId = null) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const defaultTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!serviceId || !publicKey) {
    console.error(
      "EmailJS Service ID or Public Key is missing in environment variables.",
    );
    throw new Error("Configuration error");
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId || defaultTemplateId,
      templateParams,
      publicKey,
    );
    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
