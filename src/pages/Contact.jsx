import React from 'react';

const ContactInfo = () => {
  return (
    <div className="py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase font-maname">ස්ථානය</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-indigo-900 sm:text-4xl font-maname">
            අපගේ වැඩපල
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-maname">
            අපි ඔබට වඩා හොඳින් සේවය කිරීම සඳහා පහසු ස්ථානයක පිහිටා ඇත. අප වෙත ළඟා වීමට නිදහස් වන්න!
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Address Section */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 text-indigo-500">
                  {/* Address Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c-6.627 0-12 5.373-12 12 0 6.627 12 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm0 16.5V21m0-3.75a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 font-maname">ලිපිනය</dt>
                <dd className="mt-2 text-base text-gray-500 font-maname">3/54 ශ්‍රී මේධානන්ද මාවත, ලක්ෂපතිය, මොරටුව. 10400</dd>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 text-indigo-500">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 font-maname">දුරකථන අංකය</dt>
                <dd className="mt-2 text-base text-gray-500">
                  <a href="tel:+94729677030" className="text-blue-600 font-maname">+(94) 72 967 7030</a>
                </dd>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 text-indigo-500">
                  {/* Email Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 font-maname">Email</dt>
                <dd className="mt-2 text-base text-gray-500">
                  <a href="mailto:sahasrakesara@gmail.com" className="text-blue-600 font-maname">sahasrakesara@gmail.com</a>
                </dd>
              </div>
            </div>

            {/* Social Media Links */}
          <div>
            {/* WhatsApp Icon */}
            <a href="https://wa.me/qr/WT7Q3WU3K6FYM1" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-12 h-12 mb-2 hover:scale-110 transition-transform duration-200"
              />
              <span className='font-maname'>WhatsApp</span>
            </a>

            {/* Facebook Icon */}
            <a href="https://www.facebook.com/your-page-link" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-12 h-12 hover:scale-110 transition-transform duration-200"
              />
              <span className='font-maname'>Facebook</span>
            </a>
          </div>

            {/* Store Hours Section */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 text-indigo-500">
                  {/* Clock Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 font-maname">වැඩ කරන වේලාවන්</dt>
                <dd className="mt-2 text-base text-gray-500 font-maname">
                  සඳුදා - සිකුරාදා: පෙ.ව. 9 සිට ප.ව. 8 දක්වා<br />
                  සෙනසුරාදා: පෙ.ව. 10 සිට සවස 6 දක්වා<br />
                  ඉරිදා: ප.ව. 12 සිට ප.ව. 4 දක්වා
                </dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Google Map Embed */}
        <div className="mt-10 flex">
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2 font-maname">අපව මෙතැනින් සොයා ගන්න:</h3>
            <iframe
              title="Google Map of Our Store"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4024717.7281196807!2d75.76065573061891!3d9.901572720903122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2454a6fbd7123%3A0x401a21a950b7af7b!2sWood%20Tech!5e0!3m2!1sen!2slk!4v1730049755789!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
