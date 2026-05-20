export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
        / Legal
      </div>
      <h1 className="mt-4 font-display text-5xl sm:text-6xl uppercase leading-[0.95] tracking-tight">
        Privacy <span className="text-amber">Policy</span>
      </h1>
      <p className="mt-4 font-mono text-sm text-concrete">
        Last updated: January 1, 2026
      </p>

      <div className="mt-12 prose prose-invert max-w-none space-y-8 text-bone">
        <Section title="Introduction">
          <p>
            Dorsett Does It LLC ("we", "us", or "our") respects your privacy and is
            committed to protecting your personal information. This Privacy Policy
            explains what information we collect, how we use it, and the choices you
            have regarding it.
          </p>
        </Section>

        <Section title="Information We Collect">
          <p>We may collect the following information when you interact with us:</p>
          <ul>
            <li>Name and contact details (email address, phone number, mailing address)</li>
            <li>Project details you provide via our estimate form</li>
            <li>Communications between you and Dorsett Does It LLC</li>
            <li>Basic analytics about your visit (pages viewed, device type, referrer)</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <p>We use your information to:</p>
          <ul>
            <li>Respond to estimate requests and provide quotes</li>
            <li>Schedule and complete contracted work</li>
            <li>Send service-related communications (appointment reminders, project updates)</li>
            <li>Send promotional messages, only with your express consent</li>
            <li>Improve our services and website</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        {/* === REQUIRED A2P 10DLC SMS NON-SHARING DISCLOSURE === */}
        <Section title="SMS / Text Messaging Communications">
          <p className="border-l-4 border-amber pl-5 bg-amber/5 py-4">
            <strong>No mobile information will be shared with third parties or affiliates
            for marketing or promotional purposes.</strong> All the above categories
            exclude text messaging originator opt-in data and consent; this information
            will not be shared with any third parties.
          </p>
          <p>
            If you provide your phone number and opt-in to SMS communications, you may
            receive automated promotional and transactional text messages from Dorsett
            Does It LLC regarding your project, appointments, estimates, and related
            services.
          </p>
          <p>
            <strong>Message and data rates may apply.</strong> Message frequency varies.
            Consent is not a condition of any purchase. You may opt-out at any time by
            replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong>{' '}
            for assistance. For support, contact us at (260) 258-5303.
          </p>
          <p>
            We use your mobile information solely to communicate with you about your
            inquiry and the services we provide. Your phone number and SMS opt-in
            consent are <strong>never</strong> sold, rented, traded, or shared with any
            third party for any marketing purpose.
          </p>
        </Section>

        <Section title="How We Share Information">
          <p>
            We do not sell your personal information. We may share information only in
            these limited cases:
          </p>
          <ul>
            <li>With trusted service providers (e.g., scheduling, payment processing) who help us operate our business and are bound by confidentiality</li>
            <li>With subcontractors directly involved in completing your project, only to the extent required to do the work</li>
            <li>When required by law, subpoena, or to protect rights and safety</li>
          </ul>
          <p>
            As stated above, SMS opt-in data and mobile phone numbers are excluded from
            all sharing arrangements and are never shared with third parties or
            affiliates for any marketing or promotional purpose.
          </p>
        </Section>

        <Section title="Data Retention">
          <p>
            We retain your information for as long as needed to provide services, comply
            with legal obligations, resolve disputes, and enforce our agreements. You
            may request deletion of your information at any time by contacting us.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Withdraw SMS consent at any time by replying STOP</li>
          </ul>
        </Section>

        <Section title="Cookies & Analytics">
          <p>
            Our website may use cookies and similar technologies to remember your
            preferences and understand how visitors use the site. You can control
            cookies through your browser settings.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            Our services are not directed to children under 13, and we do not knowingly
            collect personal information from children.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. The "Last updated"
            date at the top reflects the most recent revision.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            Questions about this Privacy Policy? Reach out:
          </p>
          <ul>
            <li><strong>Business:</strong> Dorsett Does It LLC</li>
            <li><strong>Phone:</strong> <a href="tel:+12602585303" className="text-amber">(260) 258-5303</a></li>
            <li><strong>Website:</strong> dorsettdoesit.com</li>
          </ul>
        </Section>
      </div>
    </section>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl uppercase text-amber tracking-wide">{title}</h2>
      <div className="mt-4 space-y-4 text-concrete leading-relaxed [&_a]:text-amber [&_strong]:text-bone [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  )
}
