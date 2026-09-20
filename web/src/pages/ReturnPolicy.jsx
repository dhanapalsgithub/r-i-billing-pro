import React from 'react';

export default function ReturnPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-800 font-sans antialiased">
      
      {/* Logo Header */}
      <div className="flex justify-center mb-12">
        <img src="/favicon.png" alt="RI Billing Pro Logo" className="w-44 h-9 object-contain" />
      </div>

      {/* Main Content Body */}
      <div>
        <h1 className="text-3xl font-bold text-black mb-2">RETURN POLICY</h1>
        <p className="text-sm text-gray-500 font-semibold mb-8">Last updated September 20, 2026</p>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <div>
            <h2 className="font-bold text-base text-black mb-2">1. OVERVIEW</h2>
            <p>
              Thank you for purchasing software and business solutions from <strong>RI Billing Pro</strong>. We appreciate your trust and want to ensure you have a rewarding experience while exploring our products and services.
            </p>
            <p className="mt-2">
              As we primarily provide digital software solutions, ERP systems, POS software, and web development services, please read our return and refund guidelines carefully before making a purchase.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base text-black mb-2">2. DIGITAL PRODUCTS & SOFTWARE LICENSES</h2>
            <p>
              Due to the digital nature of our billing software, ERP deployments, and activation keys, all sales of software licenses and customized digital assets are generally final. Once a license key has been issued or a deployment has been initiated, we do not offer direct refunds or returns unless the software fails to perform as formally promised and our technical team is unable to resolve the issue.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base text-black mb-2">3. SERVICE CANCELLATIONS</h2>
            <p>
              If you have commissioned a custom web application, admin dashboard, or business website development project:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Cancellations requested before the commencement of design and coding phases may be eligible for a partial refund, minus any administrative or transaction charges.</li>
              <li>Once development work or deployment has progressed past the initial wireframe/setup stage, cancellation requests will not qualify for a refund.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-base text-black mb-2">4. CONTACT US</h2>
            <p>
              If you have any questions or concerns regarding our Return Policy or wish to request assistance with your subscription/service, please reach out to us at:
            </p>
            <p className="mt-2 font-semibold">
              RI Billing Pro<br />
              Trichy, Tamil Nadu, 621712<br />
              India<br />
              Email: <a href="mailto:dhanapaul2020@gmail.com" className="text-blue-600 underline">dhanapaul2020@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}