import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Basketball Stars Unblocked Games',
  description: 'Read our Terms of Service to understand the rules and guidelines for using Basketball Stars Unblocked Games. Fair play and safe gaming environment for all players.',
}

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: January 10, 2025
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using Basketball Stars Unblocked Games, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Service Description</h2>
          <p className="text-gray-600 mb-4">
            Basketball Stars Unblocked Games provides free online basketball games through our website. Our services are provided "as is" and may be updated or modified at any time.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. User Conduct</h2>
          <p className="text-gray-600 mb-4">
            Users must:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Play fairly and respect other players</li>
            <li>Not attempt to cheat or exploit game mechanics</li>
            <li>Not use any automated systems or bots</li>
            <li>Not interfere with the service's operation</li>
            <li>Not attempt to access restricted areas</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content, including games, graphics, and code, is protected by copyright and other intellectual property rights. Users may not copy, modify, or distribute our content without permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Fair Play Policy</h2>
          <p className="text-gray-600 mb-4">
            We are committed to maintaining a fair and enjoyable gaming environment. Any form of cheating, harassment, or disruptive behavior may result in service access restrictions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Service Availability</h2>
          <p className="text-gray-600 mb-4">
            While we strive to provide uninterrupted service, we do not guarantee continuous availability. We reserve the right to modify or discontinue services at any time.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-gray-600 mb-4">
            Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our services will be error-free or uninterrupted.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            Basketball Stars Unblocked Games shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Information</h2>
          <p className="text-gray-600 mb-4">
            For questions about these Terms of Service, please visit: <a href="https://basketballstarsunblocked.org" className="text-blue-600 hover:underline">basketballstarsunblocked.org</a>
          </p>
        </div>
      </section>
    </div>
  )
} 