import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import GoogleMap from "./GoogleMap";

const Location = () => {
  const hours = [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "09:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "09:00 AM - 5:00 PM" },
    { day: "Thursday", time: "09:00 AM - 5:00 PM" },
    { day: "Friday", time: "09:00 AM - 8:00 PM" },
    { day: "Saturday", time: "09:00 AM - 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section id="location" className="py-20 bg-gray-50 scroll-smooth">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Visit Our Studio</h2>
          <p className="section-subtitle">
            Experience luxury lash services in our beautiful, welcoming studio
          </p>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <GoogleMap />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600">Deka Lash Hilltop</p>
                  <p className="text-gray-600">6458 Old Beulah St</p>
                  <p className="text-gray-600">Alexandria, VA 22315</p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://www.google.com/maps/place/Deka+Lash/@38.742307,-77.163056,15z/data=!4m15!1m8!3m7!1s0x89b7ad1ba7b5fa05:0x10e5ad425e11e557!2s6458+Old+Beulah+St,+Alexandria,+VA+22315!3b1!8m2!3d38.7423068!4d-77.1630558!16s%2Fg%2F11pvcwvdr4!3m5!1s0x89b7ad86d677ba99:0xc09d631d5ba7795d!8m2!3d38.7423068!4d-77.1630558!16s%2Fg%2F11fkyyggbc?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary-600 font-semibold hover:text-primary-700"
                  >
                    Get Directions →
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="tel:+17038289213"
                    className="text-2xl font-semibold text-primary-600 hover:text-primary-700"
                  >
                    (703) 828-9213
                  </motion.a>
                  <p className="text-gray-600 mt-2">
                    Call us to book your appointment
                  </p>
                </div>
              </div>
            </motion.div>
            {/* email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Email
                  </h3>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:hilltopftbelvoir@dekalash.com"
                    className="text-2xl font-semibold text-primary-600 hover:text-primary-700"
                  >
                    hilltopftbelvoir@dekalash.com
                  </motion.a>
                  <p className="text-gray-600 mt-2">
                    Email us for inquiries or support
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-3">
                Ready to Transform Your Look?
              </h3>
              <p className="mb-6 text-white/90">
                Book your appointment today and experience the confidence of
                beautiful lashes!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+17038289213"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Book Now - Call Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Business Hours
              </h3>
            </div>

            <div className="space-y-4">
              {hours.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                >
                  <span className="font-semibold text-gray-900">
                    {item.day}
                  </span>
                  <span
                    className={`${
                      item.time === "Closed" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Walk-ins are welcome based on
                availability, but we recommend booking in advance to secure your
                preferred time slot.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
