import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LeadFormPopup = ({ open, setOpen }) => {
  const [submitted, setSubmitted] = useState(false);

  // Auto-open after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(timer);
  }, [setOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Optional: auto-close popup after 5 seconds
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false); // reset for next time
    }, 5000);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Popup Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="fixed z-50 justify-center left-[7%] sm:left-[22%] lg:left-[35%] top-[15%] w-[85%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 text-center"
          >
            {!submitted ? (
              <>
                <h2 className=" text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Get Your Special Offer 🎁
                </h2>
                <p className="text-gray-600 mb-3">
                  Enter your details and claim your <strong>$89.99 Lash Set!</strong>
                </p>

                <form className="space-y-2" onSubmit={handleSubmit}>
                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  />

                  {/* Message */}
                  <textarea
                    placeholder="Message (optional)"
                    rows="2"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>

                  {/* Select Service */}
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Select Service </option>
                    <option value="classic">TrueXpress</option>
                    <option value="hybrid">Hybrid Lashes</option>
                    <option value="volume">Volume Lashes</option>
                    <option value="mega">Mega Volume </option>
                  </select>

                  <button type="submit" className="btn-primary w-full">
                    Book Now
                  </button>
                </form>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 w-full text-center text-sm text-gray-500 hover:text-primary-500"
                >
                  Close
                </button>
              </>
            ) : (
              // Thank You popup
              <>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">
                  Thank You! 🎉
                </h2>
                <p className="text-gray-700 mb-6">
                  Your appointment request has been received. We’ll contact you soon!
                </p>
                <button
                  onClick={() => {
                    setOpen(false);
                    setSubmitted(false);
                  }}
                  className="btn-primary w-full"
                >
                  Close
                </button>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadFormPopup;
