// TermsOfService.jsx
import React from "react";
import "./termsOfService.scss";
import waveLine from "@/images/wave-line.png";

const TermsOfService = () => {
  return (
    <div className="terms-of-service texture-bg-2">
      <div className="terms-container">
        <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-20">
          <img className="w-100" src={waveLine} alt="line" />
        </div>
        <h1 className="terms-title">
          TERMS OF <span className="highlight">SERVICE</span>
        </h1>

        <div className="terms-meta">
          <p>
            <strong>Returnus Terms of Service</strong>
          </p>
          <p>
            <strong>Effective Date:</strong> 10.22.2025
          </p>
          <p>
            <strong>Company: </strong> Returnus, a Maryland Limited Liability
            Company("Returnus","we","our",or "us")
          </p>
          <p className="company-info">Address: Baltimore, Maryland, USA</p>
          <p>
            Contact
            <a href="mailto:legal@returnus..com">legal@returnus.com</a>
          </p>
        </div>

        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Returnus. These Terms of Service ("Terms", "Agreement")
            govern your access to and use of Returnus's websites, products, and
            services (the "Services"). By accessing or using our Services, you
            agree to be bound by these Terms. If you do not agree to these
            Terms, do not use our Services. These Terms apply to all visitors,
            users, and others who access or use the Services.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 13 years old to use our Services. By
            participating in, we maintain your country's age to use our
            Services. You must be of legal age in your country of residence.
          </p>
          <ul>
            <li>You meet the legal age requirement</li>
            <li>You have not been banned from our Services</li>
            <li>
              You are not located in a country that is subject to a U.S.
              Government embargo
            </li>
          </ul>
          <p>
            If you are using our Services on behalf of an organization, you
            represent that you have the authority to bind that organization to
            these Terms and do so bind them.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Scope of Services</h2>
          <p>
            Returnus provides various gaming and esports-related services
            including, but not limited to, competitive gaming features,
            tournament organization, and educational and entertainment content.
          </p>
          <h3>Our Services Include:</h3>
          <ul>
            <li>Account creation and user profile management</li>
            <li>Participation in tournaments and competitive events</li>
            <li>
              Community forums and social features ("Returnus Plus Content+")
            </li>
            <li>In-game purchases, virtual items, and digital merchandise</li>
            <li>Access to gaming content and other exclusive offerings</li>
            <li>
              All related skills and affiliate marketplace service products,
              services and experiences
            </li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            notify you of material changes by posting the updated version on our
            website or otherwise notifying you. Your continued use of our
            Services after such changes constitutes your acceptance of the new
            Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. User Accounts and Registration</h2>
          <h3>5.1 Account Creation</h3>
          <p>
            To access certain features of our Services, you must create an
            account by providing accurate, current, and complete information.
            You agree to notify us immediately if any changes to the information
            provided in any account registration.
          </p>
          <h3>5.2 Account Security</h3>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. You agree to immediately notify Returnus of any
            unauthorized use of your account. Returnus is not responsible for
            any loss or damage from your failure to comply with these Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. User Content and Submissions</h2>
          <h3>6.1 Your Content</h3>
          <p>
            "Your Content" includes any data, video, images, text, or materials
            you post to our Services, including such items that is broadcast,
            live, published, or transmitted via our platforms or through any of
            our Services.
          </p>
          <h3>6.2 License Grant</h3>
          <p>
            By uploading or submitting content to our Services you grant
            Returnus a royalty-free non-exclusive license to use, reproduce,
            modify, adapt, publish, translate, create derivative works from,
            distribute, publicly perform, and publicly display Your Content
            worldwide and in connection with the Services, without any
            requirement for compensation or attribution.
          </p>
          <h3>6.3 Restrictions</h3>
          <p>
            You must not upload, transmit, post, or otherwise make available via
            our Services:
          </p>
          <ul>
            <li>Hate, harassment, defamatory, or abusive content</li>
            <li>Spam, commercial, or promotional content</li>
            <li>Content in violation of any law or third party's rights</li>
            <li>Misleading or false information</li>
            <li>
              Malicious software or code, unauthorized promotions, or other
              harmful content
            </li>
          </ul>
          <p>
            Returnus may remove any content that violates these restrictions or
            otherwise violates these Terms or our policies.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Intellectual Property</h2>
          <h3>7.1 Returnus's Content</h3>
          <p>
            Returnus owns or has licensed all content on the Services,
            including, but not limited to, text, graphics, logos, icons, images,
            audio clips, downloads, interfaces, code and software (collectively
            "Returnus Content"), and including any future versions,
            improvements, revisions or otherwise. Returnus Content is protected
            by copyright, trademark, patent, trade secret, international
            treaties, state and federal laws.
          </p>
          <h3>7.2 Trademarks</h3>
          <p>
            All of Returnus's trademarks, logos, and service names, whether or
            not registered, are our exclusive rights.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Content Moderation</h2>
          <p>
            Returnus has the right, but not the obligation, to monitor, edit or
            delete any content uploaded to the Services, without notice for any
            reason, including if we determine, in our sole discretion, that the
            content violates our policies and is otherwise inappropriate. We may
            also automatically flag or remove any content through automated
            mechanisms.
          </p>
          <h3>8.1 Reports</h3>
          <p>
            If you wish to report content that you believe is in violation of
            these Terms, you may do so through our reporting mechanism at
            <a href="mailto:support@Returnus.gg">support@Returnus.gg</a>. We
            will review all reports, but we are not obligated to take action on
            any report.
          </p>
          <h3>8.2 Prohibited Uses</h3>
          <p>
            You agree that your use of the services will not include any
            "malicious or illegal activities," defined as:
          </p>
          <ul>
            <li>Cheating or using unauthorized software or tools</li>
            <li>Fraudulent transactions or billing</li>
            <li>Harassment or abuse of other users</li>
            <li>
              Violation of any applicable local, state, national or
              international law
            </li>
            <li>
              Posting false, inaccurate, or incomplete information about
              yourself or others
            </li>
            <li>
              Probing, scanning, or testing the vulnerability of any system or
              network, or breaching or circumventing any security or
              authentication measures
            </li>
          </ul>
          <p>
            Returnus reserves the right, in addition to any other remedies
            available to us at law or in equity, to suspend or terminate your
            account and bar you from using the Services, without notice, for any
            reason or no reason at all. We will have no liability for taking
            action pursuant to this section.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Acceptable Use</h2>
          <p>You agree that when using our Services you will not:</p>
          <ul>
            <li>Exploit or harm minors in any way</li>
            <li>Engage in harassment of other users</li>
            <li>Impersonate any person or entity</li>
            <li>Interfere with the services or servers</li>
            <li>Attempt to gain unauthorized access</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>10. Payment Terms</h2>
          <h3>10.1 Pricing</h3>
          <p>
            Certain aspects of our Services may require payment of fees. You
            agree to pay all fees associated with your account. All payment
            information must be accurate and current. We reserve the right to
            modify our pricing and you will be notified of price changes before
            they are effective.
          </p>
          <h3>10.2 Refunds</h3>
          <p>
            All sales are final unless otherwise stated. Refunds may be provided
            at our sole discretion. You may request a refund by contacting us at
            <a href="mailto:support@Returnus.gg">support@Returnus.gg</a> within
            [NUMBER] days of your purchase. We are not obligated to provide
            refunds for any reason other than those required by law or our
            refund policy.
          </p>
        </section>

        <section className="terms-section">
          <h2>11. Third-Party Links</h2>
          <p>
            Our Services may contain links to third-party websites, services, or
            applications that are not owned or controlled by Returnus. We are
            not responsible for the privacy practices or the content of any
            third-party services. By using the Services, you expressly relieve
            Returnus from any and all liability arising from your use of any
            third-party service.
          </p>
        </section>

        <section className="terms-section">
          <h2>12. Disclaimer of Warranties</h2>
          <p>
            The Services are provided on an "as is" and "as available" basis.
            Returnus disclaims all warranties, either express or implied,
            statutory or otherwise, including but not limited to the implied
            warranties of merchantability, non-infringement of third parties'
            rights, and fitness for a particular purpose.
          </p>
          <ul>
            <li>
              The operation of the Services will be uninterrupted or error-free
            </li>
            <li>Any defects or errors in the Services will be corrected</li>
            <li>The Services will meet your requirements</li>
            <li>
              The Services will be compatible with all hardware and software you
              may use
            </li>
            <li>
              The results obtained from the use of the Services will be accurate
              or reliable
            </li>
          </ul>
          <p>
            Some jurisdictions do not allow the disclaimer of implied
            warranties. In such jurisdictions, the foregoing disclaimers may not
            apply to you insofar as they relate to implied warranties.
          </p>
        </section>

        <section className="terms-section">
          <h2>13. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL Returnus,
            ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS,
            OR LICENSORS BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL,
            SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN
            CONNECTION WITH YOUR USE OF THE SERVICES, WHETHER BASED ON WARRANTY,
            CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY,
            AND WHETHER OR NOT Returnus HAS BEEN ADVISED OF THE POSSIBILITY OF
            SUCH DAMAGES.
          </p>
          <ul>
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Loss of profits, goodwill or revenue or anticipated savings</li>
            <li>Loss of or damage to data or information</li>
            <li>
              Business interruption or procurement of substitute goods or
              services
            </li>
            <li>
              Any other commercial damages or losses, even if they've been
              advised of the possibility of such damages or losses arising out
              of or in connection with the Services
            </li>
          </ul>
          <p>
            In no event shall Returnus's total liability to you for all damages
            exceed the amount you paid to Returnus in the six (6) months prior
            to the cause of action OR one hundred U.S. dollars ($100.00),
            whichever is greater.
          </p>
        </section>

        <section className="terms-section">
          <h2>14. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Returnus and its
            affiliates from and against any and all claims, damages,
            obligations, losses, liabilities, costs, or debt, and expenses
            (including but not limited to attorney's fees) arising from:
          </p>
          <ul>
            <li>Your use of, or access to, the Services</li>
            <li>Your violation of any term of these Terms</li>
            <li>
              Your violation of any third-party right, including without
              limitation any copyright, property, or privacy right
            </li>
            <li>Any claim that Your Content caused damage to a third party</li>
          </ul>
          <p>
            This defense and indemnification obligation will survive these Terms
            and your use of the Services.
          </p>
        </section>

        <section className="terms-section">
          <h2>15. Privacy</h2>
          <p>
            Your use of the Services is also governed by our Privacy Policy, a
            copy of which is located at <a href="#">[Privacy Policy Link]</a>.
            The Privacy Policy explains how we collect, use, and disclose your
            information when you use our Services. By using our Services, you
            consent to all actions taken by us with respect to your information
            as set forth in the Privacy Policy.
          </p>
        </section>

        <section className="terms-section">
          <h2>16. Termination</h2>
          <p>
            Returnus may terminate or suspend your access to all or part of the
            Services, with or without cause, with or without notice, effective
            immediately, which may result in the forfeiture and destruction of
            all information associated with your account.
          </p>
          <p>
            If you wish to terminate your account, you may do so by contacting
            us at <a href="mailto:support@Returnus.gg">support@Returnus.gg</a>
            or by using the account deletion feature in the settings section of
            your account.
          </p>
          <p>
            All provisions of these Terms that by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity,
            and limitations of liability.
          </p>
        </section>

        <section className="terms-section">
          <h2>17. Mediation and Arbitration</h2>
          <h3>17.1 Mediation</h3>
          <p>
            If a dispute arises between you and Returnus, we strongly encourage
            you to first contact us at{" "}
            <a href="mailto:support@Returnus.gg">support@Returnus.gg</a> to seek
            a resolution. If we are unable to resolve the dispute within sixty
            (60) days, either party may submit the dispute to mediation.
          </p>
        </section>

        <section className="terms-section">
          <h2>17.2 Binding Arbitration</h2>
          <p>
            Any dispute, controversy, or claim arising out of or relating to
            these Terms, including the formation, interpretation, breach or
            termination thereof, including whether the claims asserted are
            arbitrable, will be referred to and finally determined by
            arbitration in accordance with the laws and rules in your applicable
            jurisdiction.
          </p>
          <p>The seat, or legal place, of arbitration shall be [LOCATION].</p>
          <p>
            The arbitration will be confidential and the results, documents,
            materials, evidence, and testimony exchanged or produced as part of
            the arbitration are not public record.
          </p>
        </section>

        <section className="terms-section">
          <h2>17.3 Exceptions to Binding Arbitration</h2>
          <p>
            Either party may bring qualifying claims in small claims court. You
            and Returnus both retain the right to seek injunctive or other
            equitable relief from a court to enjoin infringement or other misuse
            of intellectual property rights.
          </p>
        </section>

        <section className="terms-section">
          <h2>17.4 No Class Actions</h2>
          <p>
            YOU AND Returnus AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER
            ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR
            CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
            Unless both you and Returnus agree, no arbitrator or judge may
            consolidate more than one person's claims or otherwise preside over
            any form of a representative or class proceeding.
          </p>
        </section>

        <section className="terms-section">
          <h2>17.5 Rights Granted</h2>
          <p>
            If the Class Action Waiver clause is found to be illegal or
            unenforceable, you and Returnus agree that it will not be severable,
            and this entire arbitration provision will be void and unenforceable
            and any dispute will be resolved in court.
          </p>
        </section>

        <section className="terms-section">
          <h2>18. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of [Your State/Country], without regard to its conflict of
            law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect.
          </p>
        </section>

        <section className="terms-section">
          <h2>19. Dispute Resolution and Governing Law</h2>
          <h3>19.1 Venue</h3>
          <p>
            Any claims not subject to arbitration shall be brought in the state
            or federal courts located in [Location]. You consent to the
            exclusive jurisdiction of those courts. The United Nations
            Convention on Contracts for the International Sale of Goods and the
            Uniform Computer Information Transactions Act shall not apply to
            these Terms.
          </p>
          <h3>19.2 Statute of Limitations</h3>
          <p>
            You agree that regardless of any statute or law to the contrary, any
            claim or cause of action arising out of or related to these Terms or
            the Services must be filed within one (1) year after such claim or
            cause of action arose or be forever barred.
          </p>
        </section>

        <section className="terms-section">
          <h2>20. Severability</h2>
          <p>
            If any provision of these Terms is held to be unlawful, void, or for
            any reason unenforceable, then that provision will be limited or
            eliminated from these Terms to the minimum extent necessary and will
            not affect the validity and enforceability of any remaining
            provisions.
          </p>
        </section>

        <section className="terms-section">
          <h2>21. No Waiver</h2>
          <p>
            A waiver of any right or provision of these Terms by us will only be
            effective if in writing and signed by a duly authorized
            representative of Returnus.
          </p>
        </section>

        <section className="terms-section">
          <h2>22. Entire Agreement</h2>
          <p>
            The Terms and Privacy Policy constitute the sole and entire
            agreement between you and Returnus regarding the Services and
            supersede all prior and contemporaneous understandings, agreements,
            representations and warranties, both written and oral, regarding the
            Services.
          </p>
        </section>

        <section className="terms-section">
          <h2>23. Contact Information</h2>
          <p>If you have questions or comments about these Terms:</p>
          <p>
            Email us:{" "}
            <a href="mailto:support@Returnus.gg">support@Returnus.gg</a>
          </p>
          <p>Mailing Address: [Your Company Address]</p>
        </section>

        <section className="terms-section">
          <h2>24. Acknowledgment</h2>
          <p>
            BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE
            TERMS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT
            AGREE TO THESE TERMS, YOU ARE NOT AUTHORIZED TO USE THE SERVICES. WE
            RESERVE THE RIGHT TO CHANGE THESE TERMS AT ANY TIME. SEE THE TOP OF
            THIS PAGE FOR THE DATE THESE TERMS WERE LAST REVISED.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
