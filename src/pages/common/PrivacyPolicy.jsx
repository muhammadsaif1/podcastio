// PrivacyPolicy.jsx
import React from "react";
import "./privacyPolicy.scss";
import waveLine from "@/images/wave-line.png";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy texture-bg-2">
      <div className="privacy-container">
        <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-20">
          <img className="w-100" src={waveLine} alt="line" />
        </div>
        <h1 className="privacy-title">
          PRIVACY <span className="highlight">POLICY</span>
        </h1>

        <div className="privacy-meta">
          <p>
            <strong>Effective Date: 10/22/2025</strong>
          </p>
          <p>
            <strong>Company:</strong> Returnus("Returnus","we","our", or "us")
          </p>
          <p>
            <strong>Address:</strong> Baltimore, Maryland,USA
          </p>
          <p>
            <strong>Contact:</strong>{" "}
            <a href="mailto:privacy@returnus.gg">privacy@Returnus.com</a>
          </p>
        </div>

        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Returnus. We are committed to protecting your personal
            data and your right to privacy. This Privacy Policy explains what
            information we collect, how we use it, and what rights you have in
            relation to it. When you interact with our platform, contents,
            community, or services, you trust us with your personal information.
            We take your privacy very seriously.
          </p>
          <p>
            In this Privacy Policy, we describe how we collect, use, and share
            your data. If you do not agree with the terms of this Privacy
            Policy, please do not access or use our Services. We again try to be
            as transparent as possible.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Who We Are</h2>
          <p>
            We are Returnus Inc. ("Returnus", "we", "us", or "our"), a company
            incorporated under the laws of [Jurisdiction]. This Privacy Policy
            describes the "data we collect".
          </p>
          <p>
            We ask that you read this Privacy Policy carefully as it contains
            important information regarding your privacy.
          </p>
          <p>
            Returnus is committed to the highest level of information from
            learners and experts, policies, and users to provide our Services
            and manage community interactions appropriately.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. Scope of This Policy</h2>
          <p>
            This Privacy Policy applies to personal information processed by us,
            including on our websites and in related online or offline
            offerings:
          </p>
          <ul>
            <li>Our gaming websites and applications</li>
            <li>Events, competitions, and promotions</li>
            <li>
              Quizzes, surveys, and polls (including accessing to Returnus
              offers)
            </li>
            <li>Games and platforms maintained by us</li>
            <li>Customer support services</li>
            <li>
              Newsletters, communications, and offers through our websites,
              applications, content, emails, or other direct interactions
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Information We Collect</h2>
          <h3>4.1 Personal Information You Provide</h3>
          <p>
            We collect information you provide when you register, create an
            account, or use our services. This includes, but is not limited to,
            information such as name, email, date of birth (year), phone number
            (if applicable), username, profile picture, password (securely
            hashed), payment details (if applicable), and any other information
            you choose to provide.
          </p>

          <h3>4.2 Automatically Collected Information</h3>
          <p>
            When you access or use our Services, we may automatically collect
            information, including but not limited to:
          </p>
          <ul>
            <li>Device information (e.g., hardware model, operating system)</li>
            <li>IP address and browser information</li>
            <li>Geolocation data, browsing history, and content</li>
            <li>Access times and referring website addresses</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>4.3 Information from Third-Party Services</h3>
          <p>This helps us improve our services and enhance your experience:</p>
          <ul>
            <li>Social media or single sign-on services</li>
            <li>Third-party gaming platforms</li>
            <li>Payment processors</li>
          </ul>

          <h3>4.4 Content & Behavioral Information</h3>
          <p>
            If you post or upload or in-game on our Services, we may collect:
          </p>
          <ul>
            <li>Content of posts/comments</li>
            <li>Messages sent through our platform</li>
            <li>
              User-generated content (e.g., game replays, clips, or images)
            </li>
            <li>In-game activities and statistics</li>
            <li>Your preferences and settings</li>
            <li>
              How users interact with the platform (e.g., of each application)
            </li>
          </ul>

          <h3>4.5 Payment & Subscription Information</h3>
          <p>For purchase or premium subscriptions, we may collect:</p>
          <ul>
            <li>Contact and payment details for verification</li>
            <li>
              Billing and transaction history (e.g., via Stripe, PayPal, or
              other payment gateways)
            </li>
            <li>Subscription preferences and management data</li>
          </ul>
          <p>
            We also third-party payment processors and do not store full payment
            card numbers.
          </p>

          <h3>4.6 Communications</h3>
          <p>
            If you contact us directly (e.g., via email) or through our social
            networks, we collect:
          </p>
          <ul>
            <li>Your name, email, and message content</li>
            <li>Any files or attachments you may send</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our Services and user experience</li>
            <li>Process payments, process user support, and deliver prizes</li>
            <li>
              Personalize content, ads/emails, tournaments, or services as your
              competition
            </li>
            <li>
              Send emails, updates, newsletters, promotions, or marketing if you
              have opted-in to receive them
            </li>
            <li>
              Monitor usage and analyze aggregate trends and/or gather
              demographic information
            </li>
            <li>
              Manage and analyze our engagement and to optimize performance
            </li>
            <li>
              Ensure safety, enforce our rules, and detect fraud or misuse
            </li>
            <li>Comply with legal or other regulatory requirements</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>6. Legal Basis for Processing</h2>
          <p>
            We process your personal data on the basis of one or more of the
            following legal bases:
          </p>
          <ul>
            <li>
              <strong>Consent:</strong> When you have given your consent to
              process your data
            </li>
            <li>
              <strong>Contract:</strong> Necessary to carry out contracts with
              you (e.g., to deliver services, process tournaments, conduct
              payments)
            </li>
            <li>
              <strong>Legal Obligation:</strong> To comply with legal or
              regulatory obligations (e.g., tax, anti-money laundering laws)
            </li>
            <li>
              <strong>Legitimate interests:</strong> To operate, improve, and
              promote our business (e.g., analytics and personalization)
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>7. Sharing and Disclosure</h2>
          <p>We may share limited data with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party vendors,
              specialists, and service providers
            </li>
            <li>
              <strong>Partners:</strong> With our content-partner privacy
              practices or in joint ventures, affiliate partners
            </li>
            <li>
              <strong>Third Parties or Sponsors:</strong> Marketing partners,
              promotions of tournaments & finals, etc.
            </li>
            <li>
              <strong>Legal Authorities:</strong> To comply with legal
              obligations, prevent fraud, or protect our rights and safety
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of mergers,
              acquisitions, or sale of assets
            </li>
          </ul>
          <p>We never sell your personal data for profit.</p>
        </section>

        <section className="privacy-section">
          <h2>8. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Authenticate users and enable certain functions</li>
            <li>Remember preferences and settings</li>
            <li>Track user activity and analyze usage patterns</li>
            <li>Deliver targeted advertising (if applicable)</li>
          </ul>
          <p>
            You can manage cookies in your browser settings. Disabling cookies
            may impact your user experience. Please see our Cookie Policy for
            more information about the types of cookies we use and how to opt
            out of non-essential cookies.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to fulfill the
            purposes outlined above or as long as required by law. Once your
            account is deleted, we will anonymize or delete your data unless we
            need to retain it for legal compliance, dispute resolution, or for
            legitimate business purposes (e.g., analytics, financial records).
          </p>
          <p>
            We may retain certain data to prevent fraud, resolve disputes, and
            comply with our legal obligations.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Data Security</h2>
          <p>
            We use administrative, technical, and physical safeguards to protect
            your information from unauthorized access, use, disclosure,
            alteration, or destruction. While we strive to protect your data, no
            method of transmission or storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section className="privacy-section">
          <h2>11. International Data Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries outside
            your place of residence. We take steps to ensure that your personal
            data receives an adequate level of protection wherever it is
            processed. If you are in the EU or EEA, we ensure appropriate
            safeguards are in place through Standard Contractual Clauses, or
            rely on other legal mechanisms to transfer data.
          </p>
          <p>
            If we transfer data outside the EU/EEA, we ensure that data was
            collected from a secure and proper authorization.
          </p>
        </section>

        <section className="privacy-section">
          <h2>12. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights under
            applicable law:
          </p>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of the data we hold about
              you
            </li>
            <li>
              <strong>Correction:</strong> Request updates or corrections to
              inaccurate data
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal data
              (subject to legal exceptions)
            </li>
            <li>
              <strong>Restriction:</strong> Request to limit our use of your
              data
            </li>
            <li>
              <strong>Portability:</strong> Receive a portable copy of your data
              in a structured format
            </li>
            <li>
              <strong>Objection:</strong> Object to certain data processing
              (e.g., direct marketing)
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> Withdraw previously given
              consent at any time
            </li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@Returnus.gg">privacy@Returnus.gg</a>. We may
            verify your identity before fulfilling your request.
          </p>
        </section>

        <section className="privacy-section">
          <h2>13. California Residents</h2>
          <p>
            If you are a California resident, you may have additional rights
            under the California Consumer Privacy Act (CCPA):
          </p>
          <ul>
            <li>Right to know about personal data collection</li>
            <li>Right to request deletion of personal data</li>
            <li>Right to opt-out of the sale of personal data</li>
            <li>Right to non-discrimination for exercising privacy rights</li>
          </ul>
          <p>
            We do not sell personal data. For more information or to submit a
            "Do Not Sell My Personal Information" request, visit the "Data
            Access Request" section on our website or contact us.
          </p>
        </section>

        <section className="privacy-section">
          <h2>14. Third-Party Websites</h2>
          <p>
            Our Services may include links to third-party websites, platforms,
            or services outside our control and responsibility. We are not
            responsible for the privacy practices or content of these websites.
          </p>
        </section>

        <section className="privacy-section">
          <h2>15. Data Subject Requests (for California & EU Users)</h2>
          <p>
            If you are a resident of California or in the European Economic Area
            (EEA), you can submit personal privacy rights, and you may request
            to withdraw or request personal information. Please note:
          </p>
          <ul>
            <li>We'll process all requests in compliance with GDPR and CCPA</li>
            <li>Right to be informed of personal information</li>
            <li>Right to know/portability of personal data</li>
            <li>Right to deletion (with some legal exceptions)</li>
          </ul>
          <p>
            Submit your request at:{" "}
            <a href="mailto:privacy@Returnus.gg">privacy@Returnus.gg</a> or use
            our "Data Access Request" portal.
          </p>
        </section>

        <section className="privacy-section">
          <h2>16. Children's Privacy</h2>
          <p>
            Our Services are not intended for children under the age of 13 (or
            16 in certain regions). We do not knowingly collect personal
            information from children. If we become aware that a child has
            provided us with personal data, we will take steps to delete it.
          </p>
        </section>

        <section className="privacy-section">
          <h2>17. Audio/Visual Data and Public Use</h2>
          <p>
            If you participate in live streams, tournaments, public events, or
            esports content:
          </p>
          <ul>
            <li>Your image, voice, game play, and likeness may be recorded</li>
            <li>Streams and content may be broadcast and archived publicly</li>
            <li>
              Third-party or affiliated partners may use this data publicly
            </li>
            <li>
              Marketing and promotional use may occur (see Terms of Service)
            </li>
          </ul>
          <p>By using our services, you consent to this use as outlined.</p>
        </section>

        <section className="privacy-section">
          <h2>18. Data Breach Procedures</h2>
          <p>If we detect a breach of your data, procedures we will:</p>
          <ul>
            <li>Notify you within the legally required timeframe</li>
            <li>Provide information on the nature of the breach</li>
            <li>Detail steps we're taking to address it</li>
            <li>Advise you on protective measures</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>19. Changes to This Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Changes will be posted on this page with an updated "Effective
            Date." For material changes, we may notify you by email or via
            in-app notifications before the updated Policy takes effect.
          </p>
          <p>
            We encourage you to periodically review this page for the latest
            information on our privacy practices.
          </p>
        </section>

        <section className="privacy-section">
          <h2>20. Contact Us</h2>
          <p>
            If you have questions, concerns, comments, or privacy requests,
            contact:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@Returnus.gg">privacy@Returnus.gg</a>
          </p>
          <p>
            <strong>Mailing Address:</strong>
          </p>
          <p>
            Returnus Inc.
            <br />
            123 Gaming Street, Suite 456
            <br />
            Tech City, ST 12345
            <br />
            United States
          </p>
        </section>

        <section className="privacy-section">
          <h2>21. Acceptance</h2>
          <p>
            By accessing or using our Services or submitting any personal
            information, you acknowledge that you have read, understood, and
            agreed to this Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
