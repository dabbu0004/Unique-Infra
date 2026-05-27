import React, { useEffect } from "react";

const TermsAndConditionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-16 md:pt-38 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-700 mb-4">
            TERMS AND <span className="text-[#19587e]">CONDITIONS</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-7xl leading-relaxed text-justify">
            These Terms and Conditions govern your access to and use of the
            website{" "}
            <a
              href="https://www.uisppl.com"
              className="font-semibold underline text-[#19587e]"
            >
              www.uisppl.com
            </a>{" "}
            and any related services provided by{" "}
            <span className="font-semibold">
              Unique Infra & Sustainable Power Private Limited
            </span>{" "}
            (hereinafter referred to as{" "}
            <span className="font-semibold">"UISPPL"</span>). By accessing or
            using this Website, you acknowledge that you have read, understood,
            and agree to be bound by these Terms and Conditions.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            1. Information about us
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We are{" "}
            <span className="font-semibold">
              Unique Infra & Sustainable Power Private Limited
            </span>{" "}
            (hereinafter referred to as{" "}
            <span className="font-semibold">"UISPPL"</span>), a company
            incorporated under the laws of India and engaged in the business of
            authorised distribution and supply of infrastructure, power, and
            sustainable energy solutions.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            2. Acceptance
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Your access to and use of this website (hereinafter referred to as
            the "Website") is subject to the following Terms and Conditions and
            all applicable laws and regulations. By accessing, browsing, or
            using this Website, you agree to accept these Terms and Conditions
            without limitation or qualification. If you do not agree with any
            part of these Terms, you must discontinue use of the Website
            immediately.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            3. Intellectual Property Rights
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            All content available on this Website, including but not limited to
            text, graphics, logos, images, videos, documents, software, and
            other material (collectively referred to as the "Content"), is the
            property of UISPPL or its licensors and is protected by applicable
            copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            Unless otherwise expressly stated, the Content may be viewed,
            downloaded, or printed solely for personal and non-commercial use,
            provided that the Content is not modified and all copyright and
            proprietary notices are retained. Any other use of the Content,
            including but not limited to reproduction, distribution,
            modification, transmission, display, or publication, without the
            prior written consent of UISPPL, is strictly prohibited.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            All intellectual property rights, including trademarks, trade names,
            patents, copyrights, design rights, know-how, and processes,
            displayed or made accessible on this Website shall remain the
            exclusive property of UISPPL or the respective rights holders at all
            times.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            4. Disclaimer of warranties
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            While UISPPL endeavours to ensure that the information provided on
            this Website is accurate and up to date, UISPPL makes no
            representations or warranties of any kind, express or implied,
            regarding the accuracy, completeness, reliability, or suitability of
            the information contained herein.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            All information, specifications, and descriptions on this Website
            are provided on an "as is" and "as available" basis and are
            indicative in nature. UISPPL expressly disclaims all warranties,
            including but not limited to implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            UISPPL does not warrant that this Website will be uninterrupted,
            error-free, secure, or free from viruses or other harmful
            components. Under no circumstances shall UISPPL be liable for any
            direct, indirect, incidental, consequential, punitive, or special
            damages (including, without limitation, loss of business, revenue,
            profits, data, or information) arising out of or in connection with
            the use or inability to use this Website or its Content, even if
            UISPPL has been advised of the possibility of such damages.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            5. Links to third-party websites
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            This Website may contain links to third-party websites that are not
            owned or controlled by UISPPL. Such links are provided solely for
            the convenience of users. UISPPL has no control over, and assumes no
            responsibility for, the content, privacy policies, or practices of
            any third-party websites.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            The inclusion of any link does not imply endorsement, approval, or
            association by UISPPL with the linked website or its content. Users
            access such third-party websites at their own risk.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            6. Jurisdiction and governing law
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of India. Any dispute, claim, or legal
            proceeding arising out of or relating to the use of this Website or
            these Terms shall be subject to the exclusive jurisdiction of the
            competent courts in India.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            If any provision of these Terms is held to be unlawful, void, or
            unenforceable for any reason, such provision shall be deemed
            severable and shall not affect the validity or enforceability of the
            remaining provisions. These Terms constitute the entire agreement
            between UISPPL and the user with respect to the use of this Website
            and supersede all prior understandings or agreements.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            7. Questions or complaints
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            If you have any questions, concerns, complaints, or comments
            regarding these Terms and Conditions or the Website, you may contact
            us at{" "}
            <a
              href="mailto:info@uisppl.com"
              className="text-[#19587e] font-semibold hover:underline"
            >
              info@uisppl.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionPage;
