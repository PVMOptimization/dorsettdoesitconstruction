export default function Terms() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
        / Legal
      </div>
      <h1 className="mt-4 font-display text-5xl sm:text-6xl uppercase leading-[0.95] tracking-tight">
        Terms <span className="text-amber">of Service</span>
      </h1>
      <p className="mt-4 font-mono text-sm text-concrete">
        Last updated: January 1, 2026
      </p>

      <div className="mt-12 max-w-none space-y-8 text-bone">
        <Section title="Acceptance of Terms">
          <p>
            By accessing or using the website of Dorsett Does It LLC ("Company", "we",
            "us") or by engaging our construction and handyman services, you agree to
            be bound by these Terms of Service. If you do not agree, please do not use
            our website or services.
          </p>
        </Section>

        <Section title="Services">
          <p>
            Dorsett Does It LLC provides general contracting, remodeling, handyman, and
            related construction services. The specific scope, materials, timeline, and
            pricing for any project will be detailed in a separate written estimate or
            contract executed between you and Dorsett Does It LLC. These Terms govern
            your general use of our website and communications, and do not replace any
            project contract.
          </p>
        </Section>

        <Section title="Estimates & Quotes">
          <p>
            Estimates provided through our website or by phone are preliminary, subject
            to on-site verification, and valid for thirty (30) days unless otherwise
            stated in writing. Final pricing is determined in a written project
            agreement.
          </p>
        </Section>

        <Section title="SMS / Text Message Communications">
          <p className="border-l-4 border-amber pl-5 bg-amber/5 py-4">
            By providing your phone number and checking the SMS consent checkbox on our
            forms, you agree to receive automated promotional and transactional text
            messages from <strong>Dorsett Does It LLC</strong> at the number provided.
          </p>
          <ul>
            <li><strong>Consent is not a condition of any purchase.</strong></li>
            <li>Message and data rates may apply.</li>
            <li>Message frequency varies.</li>
            <li>Reply <strong>STOP</strong> at any time to opt-out.</li>
            <li>Reply <strong>HELP</strong> for help, or call (260) 258-5303.</li>
            <li>Supported carriers: AT&amp;T, Verizon, T-Mobile, Sprint, U.S. Cellular, and other major U.S. carriers. Carriers are not liable for delayed or undelivered messages.</li>
          </ul>
          <p>
            For full information on how we handle SMS and mobile data — including our
            commitment that mobile information is never shared with third parties for
            marketing — see our <a href="/privacy-policy" className="text-amber">Privacy Policy</a>.
          </p>
        </Section>

        <Section title="Website Use">
          <p>
            You agree to use the website only for lawful purposes. You may not:
          </p>
          <ul>
            <li>Attempt to gain unauthorized access to any portion of the website</li>
            <li>Interfere with or disrupt the website or servers</li>
            <li>Use the website to transmit harmful code, spam, or unlawful content</li>
            <li>Misrepresent your identity or affiliation</li>
          </ul>
        </Section>

        <Section title="Intellectual Property">
          <p>
            All content on this website — including text, graphics, logos, images, and
            the Dorsett Does It name and marks — is owned by Dorsett Does It LLC or
            its licensors and is protected by copyright and trademark law. You may not
            reproduce, distribute, or create derivative works without prior written
            permission.
          </p>
        </Section>

        <Section title="Disclaimers">
          <p>
            The website is provided "as is" and "as available". We make no warranties,
            express or implied, regarding the accuracy or availability of content on
            the website. Information on the website is general in nature and does not
            constitute professional advice for any specific project.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Dorsett Does It LLC shall not be
            liable for any indirect, incidental, special, consequential, or punitive
            damages arising out of your use of, or inability to use, this website.
          </p>
        </Section>

        <Section title="Indemnification">
          <p>
            You agree to indemnify and hold harmless Dorsett Does It LLC and its
            owners, employees, and contractors from any claims, damages, or expenses
            arising from your misuse of the website or violation of these Terms.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>
            These Terms are governed by the laws of the state in which Dorsett Does It
            LLC is principally located, without regard to conflict-of-law principles.
          </p>
        </Section>

        <Section title="Changes to These Terms">
          <p>
            We may update these Terms from time to time. Continued use of the website
            after changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="Contact">
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
