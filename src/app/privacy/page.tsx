import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Long Draw Home Services collects, uses, and protects your personal information.",
};

function MailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-oxide underline underline-offset-4 hover:text-oxide/80 transition-colors"
    >
      {email}
    </a>
  );
}

const tableRows = [
  { category: "A. Identifiers", examples: "Contact details, such as real name, postal address, telephone or mobile contact number, IP address, email address", collected: "NO" },
  { category: "B. Protected classification characteristics", examples: "Gender, age, date of birth, race and ethnicity", collected: "NO" },
  { category: "C. Commercial information", examples: "Transaction information, purchase history, payment information", collected: "NO" },
  { category: "D. Biometric information", examples: "Fingerprints and voiceprints", collected: "NO" },
  { category: "E. Internet or other similar network activity", examples: "Browsing history, search history", collected: "NO" },
  { category: "F. Geolocation data", examples: "Device location", collected: "NO" },
  { category: "G. Audio, electronic, sensory, or similar information", examples: "Images and recordings", collected: "NO" },
  { category: "H. Professional or employment-related information", examples: "Business contact details", collected: "NO" },
  { category: "I. Education Information", examples: "Student records", collected: "NO" },
  { category: "J. Inferences drawn from collected personal information", examples: "Profile or summary about preferences", collected: "NO" },
  { category: "K. Sensitive personal Information", examples: "—", collected: "NO" },
];

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <h1 className="font-serif text-h1 text-charcoal leading-tight">
          Privacy Policy
        </h1>
        <Eyebrow className="mt-3 mb-10">Last updated: May 09, 2026</Eyebrow>

        <div className="flex flex-col gap-10 font-sans text-body text-charcoal leading-loose">

          {/* Intro */}
          <div className="flex flex-col gap-4">
            <p>
              This Privacy Notice for Long Draw Ventures (doing business as Long
              Draw Home Services, &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) describes how and why we might access, collect,
              store, use, and/or share (&ldquo;process&rdquo;) your personal
              information when you use our services (&ldquo;Services&rdquo;),
              including when you visit our website at{" "}
              <a
                href="https://longdraw.co"
                className="text-oxide underline underline-offset-4 hover:text-oxide/80 transition-colors"
              >
                https://longdraw.co
              </a>{" "}
              or any website of ours that links to this Privacy Notice, or
              engage with us in other related ways, including any marketing or
              events.
            </p>
            <p>
              <strong className="font-medium">Questions or concerns?</strong>{" "}
              Reading this Privacy Notice will help you understand your privacy
              rights and choices. We are responsible for making decisions about
              how your personal information is processed. If you do not agree
              with our policies and practices, please do not use our Services.
              If you still have any questions or concerns, please contact us at{" "}
              <MailLink email="info@longdraw.co" />.
            </p>
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              Summary of Key Points
            </h2>
            <p>
              <strong className="font-medium">
                What personal information do we process?
              </strong>{" "}
              When you visit, use, or navigate our Services, we may process
              personal information depending on how you interact with us and the
              Services, the choices you make, and the products and features you
              use.
            </p>
            <p>
              <strong className="font-medium">
                Do we process any sensitive personal information?
              </strong>{" "}
              We do not process sensitive personal information.
            </p>
            <p>
              <strong className="font-medium">
                Do we collect any information from third parties?
              </strong>{" "}
              We do not collect any information from third parties.
            </p>
            <p>
              <strong className="font-medium">
                How do we process your information?
              </strong>{" "}
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your
              information for other purposes with your consent.
            </p>
            <p>
              <strong className="font-medium">
                In what situations and with which parties do we share personal
                information?
              </strong>{" "}
              We may share information in specific situations and with specific
              third parties.
            </p>
            <p>
              <strong className="font-medium">What are your rights?</strong>{" "}
              Depending on where you are located geographically, the applicable
              privacy law may mean you have certain rights regarding your
              personal information.
            </p>
            <p>
              <strong className="font-medium">
                How do you exercise your rights?
              </strong>{" "}
              The easiest way to exercise your rights is by contacting us. We
              will consider and act upon any request in accordance with
              applicable data protection laws.
            </p>
          </div>

          {/* 1. What Information */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              1. What Information Do We Collect?
            </h2>

            <h3 className="font-serif text-[1.25rem] text-charcoal">
              Personal information you disclose to us
            </h3>
            <p className="text-saddle italic">
              In Short: We collect personal information that you provide to us.
            </p>
            <p>
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and Services, when you participate in activities on
              the Services, or otherwise when you contact us.
            </p>
            <p>
              <strong className="font-medium">
                Personal Information Provided by You.
              </strong>{" "}
              The personal information we collect may include the following:
            </p>
            <ul className="flex flex-col gap-1 pl-5 list-disc marker:text-saddle">
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
              <li>Mailing addresses</li>
              <li>Contact preferences</li>
            </ul>
            <p>
              <strong className="font-medium">Sensitive Information.</strong> We
              do not process sensitive information.
            </p>
            <p>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>

            <h3 className="font-serif text-[1.25rem] text-charcoal mt-2">
              Information automatically collected
            </h3>
            <p className="text-saddle italic">
              In Short: Some information — such as your Internet Protocol (IP)
              address and/or browser and device characteristics — is collected
              automatically when you visit our Services.
            </p>
            <p>
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity but may include device and usage information,
              such as your IP address, browser and device characteristics,
              operating system, language preferences, referring URLs, device
              name, country, location, and other technical information.
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-saddle">
              <li>
                <strong className="font-medium">Log and Usage Data.</strong>{" "}
                Service-related, diagnostic, usage, and performance information
                our servers automatically collect when you access or use our
                Services.
              </li>
              <li>
                <strong className="font-medium">Device Data.</strong>{" "}
                Information about your computer, phone, tablet, or other device
                you use to access the Services.
              </li>
              <li>
                <strong className="font-medium">Location Data.</strong>{" "}
                Information about your device&apos;s location, which can be
                either precise or imprecise.
              </li>
            </ul>
          </div>

          {/* 2. How Do We Process */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              2. How Do We Process Your Information?
            </h2>
            <p className="text-saddle italic">
              In Short: We process your information to provide, improve, and
              administer our Services, communicate with you, for security and
              fraud prevention, and to comply with law.
            </p>
            <p>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-saddle">
              <li>
                <strong className="font-medium">
                  To deliver and facilitate delivery of services to the user.
                </strong>{" "}
                We may process your information to provide you with the
                requested service.
              </li>
              <li>
                <strong className="font-medium">
                  To respond to user inquiries/offer support to users.
                </strong>{" "}
                We may process your information to respond to your inquiries and
                solve any potential issues you might have.
              </li>
              <li>
                <strong className="font-medium">
                  To fulfill and manage your orders.
                </strong>{" "}
                We may process your information to fulfill and manage your
                orders, payments, returns, and exchanges.
              </li>
              <li>
                <strong className="font-medium">To request feedback.</strong>{" "}
                We may process your information when necessary to request
                feedback and to contact you about your use of our Services.
              </li>
              <li>
                <strong className="font-medium">
                  To send you marketing and promotional communications.
                </strong>{" "}
                We may process personal information you send to us for our
                marketing purposes, if in accordance with your preferences.
              </li>
              <li>
                <strong className="font-medium">To post testimonials.</strong>{" "}
                We post testimonials on our Services that may contain personal
                information.
              </li>
              <li>
                <strong className="font-medium">
                  To evaluate and improve our Services, products, marketing, and
                  your experience.
                </strong>
              </li>
            </ul>
          </div>

          {/* 3. Sharing */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              3. When and With Whom Do We Share Your Personal Information?
            </h2>
            <p className="text-saddle italic">
              In Short: We may share information in specific situations
              described in this section and/or with the following third parties.
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-saddle">
              <li>
                <strong className="font-medium">Business Transfers.</strong> We
                may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </li>
            </ul>
          </div>

          {/* 4. Cookies */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              4. Do We Use Cookies and Other Tracking Technologies?
            </h2>
            <p className="text-saddle italic">
              In Short: We may use cookies and other tracking technologies to
              collect and store your information.
            </p>
            <p>
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to gather information when you interact with
              our Services. Some online tracking technologies help us maintain
              the security of our Services, prevent crashes, fix bugs, save your
              preferences, and assist with basic site functions.
            </p>
            <p>
              We also permit third parties and service providers to use online
              tracking technologies on our Services for analytics and
              advertising.
            </p>
          </div>

          {/* 5. Retention */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              5. How Long Do We Keep Your Information?
            </h2>
            <p className="text-saddle italic">
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this Privacy Notice unless
              otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless
              a longer retention period is required or permitted by law.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information.
            </p>
          </div>

          {/* 6. Minors */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              6. Do We Collect Information from Minors?
            </h2>
            <p className="text-saddle italic">
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </p>
            <p>
              We do not knowingly collect, solicit data from, or market to
              children under 18 years of age, nor do we knowingly sell such
              personal information. By using the Services, you represent that
              you are at least 18 or that you are the parent or guardian of such
              a minor and consent to such minor dependent&apos;s use of the
              Services. If you become aware of any data we may have collected
              from children under age 18, please contact us at{" "}
              <MailLink email="info@longdraw.co" />.
            </p>
          </div>

          {/* 7. Privacy Rights */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              7. What Are Your Privacy Rights?
            </h2>
            <p className="text-saddle italic">
              In Short: You may review, change, or terminate your account at any
              time, depending on your country, province, or state of residence.
            </p>
            <p>
              <strong className="font-medium">Withdrawing your consent:</strong>{" "}
              If we are relying on your consent to process your personal
              information, you have the right to withdraw your consent at any
              time.
            </p>
            <p>
              <strong className="font-medium">
                Opting out of marketing and promotional communications:
              </strong>{" "}
              You can unsubscribe from our marketing and promotional
              communications at any time by replying &ldquo;STOP&rdquo; or
              &ldquo;UNSUBSCRIBE&rdquo; to the SMS messages that we send, or by
              contacting us.
            </p>
            <p>
              No mobile information will be shared with third parties or
              affiliates for marketing or promotional purposes.
            </p>
            <p>
              <strong className="font-medium">
                Cookies and similar technologies:
              </strong>{" "}
              Most web browsers are set to accept cookies by default. You can
              usually choose to set your browser to remove cookies and to reject
              cookies.
            </p>
            <p>
              If you have questions or comments about your privacy rights, you
              may email us at <MailLink email="info@longdraw.co" />.
            </p>
          </div>

          {/* 8. DNT */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              8. Controls for Do-Not-Track Features
            </h2>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (&ldquo;DNT&rdquo;) feature
              or setting. At this stage, no uniform technology standard for
              recognizing and implementing DNT signals has been finalized. As
              such, we do not currently respond to DNT browser signals.
            </p>
          </div>

          {/* 9. US Residents */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-h3 text-charcoal">
              9. Do United States Residents Have Specific Privacy Rights?
            </h2>
            <p className="text-saddle italic">
              In Short: If you are a resident of Texas, you may have the right
              to request access to and receive details about the personal
              information we maintain about you, correct inaccuracies, get a
              copy of, or delete your personal information.
            </p>

            <h3 className="font-serif text-[1.25rem] text-charcoal">
              Categories of Personal Information We Collect
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-saddle/20 font-sans text-body-sm">
                <thead>
                  <tr className="border-b border-saddle/20">
                    <th className="text-left p-3 font-medium text-charcoal border-r border-saddle/20 w-1/3">
                      Category
                    </th>
                    <th className="text-left p-3 font-medium text-charcoal border-r border-saddle/20">
                      Examples
                    </th>
                    <th className="text-left p-3 font-medium text-charcoal w-24">
                      Collected
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-saddle/20 last:border-b-0"
                    >
                      <td className="p-3 border-r border-saddle/20 text-charcoal align-top">
                        {row.category}
                      </td>
                      <td className="p-3 border-r border-saddle/20 text-saddle align-top">
                        {row.examples}
                      </td>
                      <td className="p-3 text-saddle align-top">
                        {row.collected}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              We may also collect other personal information outside of these
              categories through instances where you interact with us in person,
              online, or by phone or mail.
            </p>

            <h3 className="font-serif text-[1.25rem] text-charcoal">
              Your Rights
            </h3>
            <p>
              You have rights under certain US state data protection laws:
            </p>
            <ul className="flex flex-col gap-1 pl-5 list-disc marker:text-saddle">
              <li>
                <strong className="font-medium">Right to know</strong> whether
                or not we are processing your personal data
              </li>
              <li>
                <strong className="font-medium">Right to access</strong> your
                personal data
              </li>
              <li>
                <strong className="font-medium">Right to correct</strong>{" "}
                inaccuracies in your personal data
              </li>
              <li>
                <strong className="font-medium">Right to request</strong> the
                deletion of your personal data
              </li>
              <li>
                <strong className="font-medium">Right to obtain a copy</strong>{" "}
                of the personal data you previously shared with us
              </li>
              <li>
                <strong className="font-medium">
                  Right to non-discrimination
                </strong>{" "}
                for exercising your rights
              </li>
              <li>
                <strong className="font-medium">Right to opt out</strong> of the
                processing of your personal data if it is used for targeted
                advertising, the sale of personal data, or profiling
              </li>
            </ul>

            <h3 className="font-serif text-[1.25rem] text-charcoal">
              How to Exercise Your Rights
            </h3>
            <p>
              To exercise these rights, you can contact us by visiting{" "}
              <a
                href="/contact"
                className="text-oxide underline underline-offset-4 hover:text-oxide/80 transition-colors"
              >
                longdraw.co/contact
              </a>{" "}
              or by referring to the contact details at the bottom of this
              document.
            </p>
            <p>
              We have not disclosed, sold, or shared any personal information to
              third parties for a business or commercial purpose in the
              preceding twelve (12) months.
            </p>
          </div>

          {/* 10. Updates */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              10. Do We Make Updates to This Notice?
            </h2>
            <p className="text-saddle italic">
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </p>
            <p>
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated &ldquo;Revised&rdquo; date
              at the top of this Privacy Notice.
            </p>
          </div>

          {/* 11. Contact */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              11. How Can You Contact Us About This Notice?
            </h2>
            <p>
              If you have questions or comments about this notice, you may email
              us at <MailLink email="info@longdraw.co" /> or contact us by post
              at:
            </p>
            <address className="not-italic flex flex-col gap-1 text-saddle pl-4 border-l border-saddle/20">
              <span className="font-medium text-charcoal">Long Draw Ventures</span>
              <span>11816 Inwood Rd, PMB 70476</span>
              <span>Dallas, TX 75244</span>
              <span>United States</span>
            </address>
          </div>

          {/* 12. Review/Delete */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              12. How Can You Review, Update, or Delete the Data We Collect from
              You?
            </h2>
            <p>
              You have the right to request access to the personal information
              we collect from you, details about how we have processed it,
              correct inaccuracies, or delete your personal information. To
              request to review, update, or delete your personal information,
              please contact us at <MailLink email="info@longdraw.co" />.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}
