"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"

// EmailJS configuration
const REACT_APP_SERVICE_ID = "service_fxbox86"
const REACT_APP_TEMPLATE_ID = "template_wwjqefj"
const REACT_APP_PUBLIC_KEY = "zDtYRtCYE5DF5euta"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [disabled, setDisabled] = useState(false)
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  })

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type })
    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" })
    }, 5000)
  }

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    const { name, email, subject, budget, message } = data
    try {
      setDisabled(true)
      const templateParams = {
        name,
        email,
        budget,
        subject,
        message,
      }

      await emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, templateParams, REACT_APP_PUBLIC_KEY)

      toggleAlert("Message sent successfully! We'll get back to you soon.", "success")
    } catch (e) {
      console.error(e)
      toggleAlert("Something went wrong. Please try again.", "error")
    } finally {
      setDisabled(false)
      reset()
    }
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-40 sm:mt-40" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm text-purple-300">Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Let's get
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Started
            </span>
            <br></br>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Send us a message and let's create something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="relative">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-600/10 to-cyan-400/10 blur-3xl rounded-3xl" />

          <div className="relative bg-gradient-to-br from-purple-900/30 via-black/80 to-black/90 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 sm:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 block">Full Name *</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: { value: true, message: "Please enter your name" },
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                    className="w-full px-4 py-4 bg-black/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 block">Email Address *</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className="w-full px-4 py-4 bg-black/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">Please enter a valid email address</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Company *</label>
                <input
                  type="text"
                  {...register("subject", {
                    required: { value: true, message: "Please enter your Company Name" },
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                  className="w-full px-4 py-4 bg-black/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                  placeholder="Enter full company name"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
              </div>
                
                {/*Budget */}
                <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block"> Estimated Budget £ *</label>
                <input
                  type="number"
                  {...register("budget", {
                    required: true,
                  })}
                  className="w-full px-4 py-4 bg-black/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                  placeholder="Enter amount using numbers (e.g., 1500)"
                />
                {errors.budget && <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Message *</label>
                <textarea
                  rows={6}
                  {...register("message", {
                    required: { value: true, message: "Please enter a message" },
                  })}
                  className="w-full px-4 py-4 bg-black/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200 resize-none"
                  placeholder="Tell us about your idea for this web project..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={disabled}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="relative z-10 flex items-center">
                    {disabled ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">hello@reaktweb.com</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400">Remote Worldwide</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
            <p className="text-gray-400">Within 24 hours</p>
          </div>
        </div>
      </div>

      {/* Alert Message */}
      {alertInfo.display && (
        <div className="fixed top-4 right-4 z-100 max-w-md">
          <div
            className={`p-4 rounded-xl shadow-lg backdrop-blur-sm border ${
              alertInfo.type === "success"
                ? "bg-green-500/20 border-green-500/30 text-green-200"
                : "bg-red-500/20 border-red-500/30 text-red-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {alertInfo.type === "success" ? (
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span className="text-sm font-medium">{alertInfo.message}</span>
              </div>
              <button
                onClick={() => setAlertInfo({ display: false, message: "", type: "" })}
                className="ml-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm
