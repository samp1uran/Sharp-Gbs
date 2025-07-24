import React from "react";

const Privacy = () => {
  return (
    <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
      {/* <div className="space-y-8"> */}
        

        <div className="space-y-8">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy of Sharp Gbs</h1>
          <h3 className="text-lg font-semibold mb-2">Effective Date: 20 Apr 2025</h3>

          <p className="mb-4">
            Your privacy is of utmost importance to us at Sharp Gbs. This Privacy Policy outlines how we collect, use,
            and safeguard your personal information when you interact with our services. By using our website and
            services, you consent to the practices described in this policy.
          </p>

          <h3 className="text-lg font-semibold mt-4">Information Collection</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              We collect personal information that you voluntarily provide to us when you interact with our website. This may include:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Contact Information:</strong> Such as your name, email address, phone number, and any other details you
                  provide when filling out our contact form or subscribing to our newsletter.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type,
                  pages visited, and the time and date of your visit.
                </li>
              </ul>
            </li>
          </ol>

          <h3 className="text-lg font-semibold mt-4">Use of Information</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              The information we collect is used for the following purposes:
              <ul className="list-disc pl-6 mt-2">
                <li>To Respond to Inquiries: Your contact info helps us respond to your questions or requests.</li>
                <li>To Provide Our Services: To deliver the services you request and improve offerings.</li>
                <li>To Communicate with You: We may send updates, promotions, or other relevant information.</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-lg font-semibold mt-4">Data Security</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              We take your security seriously. We implement measures including:
              <ul className="list-disc pl-6 mt-2">
                <li>Encryption: Protects sensitive info transmitted online.</li>
                <li>Access Controls: Limits access to authorized personnel only.</li>
                <li>Regular Security Audits: Ensures ongoing protection.</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-lg font-semibold mt-4">Cookies</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Our site may use cookies to enhance your experience. You can choose to accept or decline via browser settings.
              Declining may limit features.
            </li>
          </ol>

          <h3 className="text-lg font-semibold mt-4">Changes to this Policy</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Sharp Gbs reserves the right to update this policy at any time. Changes will appear on this page with an updated date.
            </li>
          </ol>

          <h3 className="text-lg font-semibold mt-4">Contact Us</h3>
          <ul className="list-disc pl-6">
            <li>If you have any questions or concerns about this Privacy Policy, contact us at the official email or phone.</li>
          </ul>
        </div>
      {/* </div> */}
    </main>
  );
};

export default Privacy;
