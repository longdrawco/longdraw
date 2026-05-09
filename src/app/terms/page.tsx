import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Long Draw Home Services website.",
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

function Address() {
  return (
    <address className="not-italic flex flex-col gap-1 text-saddle pl-4 border-l border-saddle/20 my-2">
      <span className="font-medium text-charcoal">Long Draw Ventures</span>
      <span>11816 Inwood Rd, PMB 70476</span>
      <span>Dallas, TX 75244</span>
      <span>United States</span>
    </address>
  );
}

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <h1 className="font-serif text-h1 text-charcoal leading-tight">
          Terms of Service
        </h1>
        <Eyebrow className="mt-3 mb-10">Last updated: May 09, 2026</Eyebrow>

        <div className="flex flex-col gap-10 font-sans text-body text-charcoal leading-loose">

          {/* Agreement */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              Agreement to Our Legal Terms
            </h2>
            <p>
              We are Long Draw Ventures, LLC, doing business as Long Draw Home
              Services (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; &ldquo;our&rdquo;).
            </p>
            <p>
              We operate the website longdraw.co, as well as any other related
              products and services that refer or link to these legal terms (the
              &ldquo;Legal Terms&rdquo;) (collectively, the
              &ldquo;Services&rdquo;).
            </p>
            <p>You can contact us by email at <MailLink email="info@longdraw.co" /> or by mail to:</p>
            <Address />
            <p>
              These Legal Terms constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity
              (&ldquo;you&rdquo;), and Long Draw Ventures, concerning your
              access to and use of the Services. You agree that by accessing the
              Services, you have read, understood, and agreed to be bound by all
              of these Legal Terms.{" "}
              <strong className="font-medium">
                IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
                EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
                DISCONTINUE USE IMMEDIATELY.
              </strong>
            </p>
            <p>
              We reserve the right, in our sole discretion, to make changes or
              modifications to these Legal Terms at any time and for any reason.
              We will alert you about any changes by updating the &ldquo;Last
              updated&rdquo; date of these Legal Terms, and you waive any right
              to receive specific notice of each such change. It is your
              responsibility to periodically review these Legal Terms to stay
              informed of updates.
            </p>
            <p>We recommend that you print a copy of these Legal Terms for your records.</p>
          </div>

          {/* Table of Contents */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-h3 text-charcoal">Table of Contents</h2>
            <ol className="flex flex-col gap-1 pl-5 list-decimal marker:text-saddle text-saddle">
              {[
                "Our Services",
                "Intellectual Property Rights",
                "User Representations",
                "Prohibited Activities",
                "Services Management",
                "Term and Termination",
                "Modifications and Interruptions",
                "Governing Law",
                "Dispute Resolution",
                "Corrections",
                "Disclaimer",
                "Limitations of Liability",
                "Indemnification",
                "User Data",
                "Electronic Communications, Transactions, and Signatures",
                "Miscellaneous",
                "Contact Us",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </div>

          {/* 1 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">1. Our Services</h2>
            <p>
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              2. Intellectual Property Rights
            </h2>
            <h3 className="font-serif text-[1.25rem] text-charcoal">
              Our intellectual property
            </h3>
            <p>
              We are the owner or the licensee of all intellectual property
              rights in our Services, including all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics in the Services (collectively, the
              &ldquo;Content&rdquo;), as well as the trademarks, service marks,
              and logos contained therein (the &ldquo;Marks&rdquo;).
            </p>
            <p>
              Our Content and Marks are protected by copyright and trademark
              laws and treaties around the world.
            </p>
            <p>
              The Content and Marks are provided in or through the Services
              &ldquo;AS IS&rdquo; for your personal, non-commercial use or
              internal business purpose only.
            </p>
            <h3 className="font-serif text-[1.25rem] text-charcoal">
              Your use of our Services
            </h3>
            <p>
              Subject to your compliance with these Legal Terms, we grant you a
              non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className="flex flex-col gap-1 pl-5 list-disc marker:text-saddle">
              <li>access the Services; and</li>
              <li>
                download or print a copy of any portion of the Content to which
                you have properly gained access,
              </li>
            </ul>
            <p>
              solely for your personal, non-commercial use or internal business
              purpose.
            </p>
            <p>
              Except as set out in this section or elsewhere in our Legal Terms,
              no part of the Services and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </p>
            <p>
              If you wish to make any use of the Services, Content, or Marks
              other than as set out in this section, please address your request
              to: <MailLink email="info@longdraw.co" />.
            </p>
            <p>
              Any breach of these Intellectual Property Rights will constitute a
              material breach of our Legal Terms and your right to use our
              Services will terminate immediately.
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              3. User Representations
            </h2>
            <p>
              By using the Services, you represent and warrant that: (1) you
              have the legal capacity and you agree to comply with these Legal
              Terms; (2) you are not a minor in the jurisdiction in which you
              reside; (3) you will not access the Services through automated or
              non-human means, whether through a bot, script or otherwise; (4)
              you will not use the Services for any illegal or unauthorized
              purpose; and (5) your use of the Services will not violate any
              applicable law or regulation.
            </p>
            <p>
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to refuse any and all
              current or future use of the Services (or any portion thereof).
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              4. Prohibited Activities
            </h2>
            <p>
              You may not access or use the Services for any purpose other than
              that for which we make the Services available. As a user of the
              Services, you agree not to:
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-saddle">
              {[
                "Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
                "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
                "Circumvent, disable, or otherwise interfere with security-related features of the Services.",
                "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.",
                "Use any information obtained from the Services in order to harass, abuse, or harm another person.",
                "Make improper use of our support services or submit false reports of abuse or misconduct.",
                "Use the Services in a manner inconsistent with any applicable laws or regulations.",
                "Engage in unauthorized framing of or linking to the Services.",
                "Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services.",
                "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
                "Delete the copyright or other proprietary rights notice from any Content.",
                "Attempt to impersonate another user or person.",
                "Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.",
                "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.",
                "Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services.",
                "Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
                "Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services, except as permitted by applicable law.",
                "Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 5 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              5. Services Management
            </h2>
            <p>
              We reserve the right, but not the obligation, to: (1) monitor the
              Services for violations of these Legal Terms; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Legal Terms, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, or limit the availability of any portion of the Services; and
              (4) otherwise manage the Services in a manner designed to protect
              our rights and property and to facilitate the proper functioning
              of the Services.
            </p>
          </div>

          {/* 6 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              6. Term and Termination
            </h2>
            <p>
              These Legal Terms shall remain in full force and effect while you
              use the Services.{" "}
              <strong className="font-medium">
                WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE
                RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE
                OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
                BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR
                FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL
                TERMS OR OF ANY APPLICABLE LAW OR REGULATION.
              </strong>
            </p>
            <p>
              In addition to terminating or suspending your access, we reserve
              the right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </div>

          {/* 7 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              7. Modifications and Interruptions
            </h2>
            <p>
              We reserve the right to change, modify, or remove the contents of
              the Services at any time or for any reason at our sole discretion
              without notice. We cannot guarantee the Services will be available
              at all times. You agree that we have no liability whatsoever for
              any loss, damage, or inconvenience caused by your inability to
              access or use the Services during any downtime or discontinuance
              of the Services.
            </p>
          </div>

          {/* 8 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              8. Governing Law
            </h2>
            <p>
              These Legal Terms shall be governed by and defined following the
              laws of the State of Texas. Long Draw Ventures and yourself
              irrevocably consent that the courts of Dallas County, Texas shall
              have exclusive jurisdiction to resolve any dispute which may arise
              in connection with these Legal Terms.
            </p>
          </div>

          {/* 9 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              9. Dispute Resolution
            </h2>
            <h3 className="font-serif text-[1.25rem] text-charcoal">
              Informal Negotiations
            </h3>
            <p>
              The Parties agree to first attempt to negotiate any Dispute
              informally for at least thirty (30) days before initiating
              arbitration. Such informal negotiations commence upon written
              notice from one Party to the other Party.
            </p>
            <h3 className="font-serif text-[1.25rem] text-charcoal">
              Binding Arbitration
            </h3>
            <p>
              Any dispute arising out of or in connection with these Legal
              Terms, including any question regarding its existence, validity,
              or termination, shall be referred to and finally resolved by
              binding arbitration administered in Dallas County, Texas, under
              the rules of the American Arbitration Association. The seat of
              arbitration shall be Dallas, Texas. The language of the
              proceedings shall be English. The governing law shall be the
              substantive law of the State of Texas.
            </p>
            <h3 className="font-serif text-[1.25rem] text-charcoal">
              Restrictions
            </h3>
            <p>
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. There is no right or
              authority for any Dispute to be arbitrated on a class-action basis
              or to utilize class action procedures.
            </p>
            <h3 className="font-serif text-[1.25rem] text-charcoal">
              Exceptions
            </h3>
            <p>
              The Parties agree that the following Disputes are not subject to
              the above provisions: (a) any Disputes seeking to enforce or
              protect, or concerning the validity of, any of the intellectual
              property rights of a Party; (b) any Dispute related to
              allegations of theft, piracy, invasion of privacy, or unauthorized
              use; and (c) any claim for injunctive relief.
            </p>
          </div>

          {/* 10 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">10. Corrections</h2>
            <p>
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, and availability. We reserve the right to
              correct any errors, inaccuracies, or omissions and to change or
              update the information on the Services at any time, without prior
              notice.
            </p>
          </div>

          {/* 11 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">11. Disclaimer</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
              THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SERVICES&rsquo; CONTENT AND
              WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
              MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
              INJURY OR PROPERTY DAMAGE OF ANY NATURE WHATSOEVER, RESULTING
              FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED
              ACCESS TO OR USE OF OUR SECURE SERVERS, (4) ANY INTERRUPTION OR
              CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
              VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO
              OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS
              OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
              DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT
              POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
              SERVICES.
            </p>
          </div>

          {/* 12 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              12. Limitations of Liability
            </h2>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>

          {/* 13 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              13. Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys&rsquo; fees and expenses, made by any third party due
              to or arising out of: (1) use of the Services; (2) breach of
              these Legal Terms; (3) any breach of your representations and
              warranties set forth in these Legal Terms; (4) your violation of
              the rights of a third party, including but not limited to
              intellectual property rights; or (5) any overt harmful act toward
              any other user of the Services.
            </p>
          </div>

          {/* 14 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">14. User Data</h2>
            <p>
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services. You agree that we
              shall have no liability to you for any loss or corruption of any
              such data.
            </p>
          </div>

          {/* 15 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              15. Electronic Communications, Transactions, and Signatures
            </h2>
            <p>
              Visiting the Services, sending us emails, and completing online
              forms constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically satisfy any legal requirement that such
              communication be in writing.
            </p>
            <p>
              YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
              ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
              POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY
              US OR VIA THE SERVICES.
            </p>
          </div>

          {/* 16 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">
              16. Miscellaneous
            </h2>
            <p>
              These Legal Terms and any policies or operating rules posted by us
              on the Services constitute the entire agreement and understanding
              between you and us. Our failure to exercise or enforce any right
              or provision of these Legal Terms shall not operate as a waiver of
              such right or provision. We may assign any or all of our rights
              and obligations to others at any time. If any provision or part of
              a provision of these Legal Terms is determined to be unlawful,
              void, or unenforceable, that provision is deemed severable from
              these Legal Terms and does not affect the validity and
              enforceability of any remaining provisions.
            </p>
            <p>
              There is no joint venture, partnership, employment or agency
              relationship created between you and us as a result of these Legal
              Terms or use of the Services. You agree that these Legal Terms
              will not be construed against us by virtue of having drafted them.
            </p>
          </div>

          {/* 17 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h3 text-charcoal">17. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Services or to
              receive further information regarding use of the Services, please
              contact us at:
            </p>
            <address className="not-italic flex flex-col gap-1 text-saddle pl-4 border-l border-saddle/20">
              <span className="font-medium text-charcoal">Long Draw Ventures</span>
              <span>11816 Inwood Rd, PMB 70476</span>
              <span>Dallas, TX 75244</span>
              <span>United States</span>
              <MailLink email="info@longdraw.co" />
            </address>
          </div>

        </div>
      </div>
    </Section>
  );
}
