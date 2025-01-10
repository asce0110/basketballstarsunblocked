import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Basketball Stars Unblocked Games',
  description: 'Our commitment to your privacy. Learn how Basketball Stars Unblocked Games protects your data and ensures a safe gaming experience.',
}

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: January 15, 2024
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
          <p className="text-gray-600 mb-4">
            At Basketball Stars Unblocked Games, we are committed to protecting your privacy and providing a safe gaming experience. This Privacy Policy explains how we handle information when you use our website and services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Don't Collect</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Personal identification information</li>
            <li>Email addresses</li>
            <li>Payment information</li>
            <li>Location data</li>
            <li>Device information</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Game Data</h2>
          <p className="text-gray-600 mb-4">
            All game progress and settings are stored locally in your browser. We do not track or store any gameplay data on our servers.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
          <p className="text-gray-600 mb-4">
            We use essential cookies only to ensure the proper functioning of our website. These cookies do not track your behavior or collect any personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 mb-4">
            Our games are embedded using secure iframes. We do not share any information with third-party services or advertisers.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
          <p className="text-gray-600 mb-4">
            Our service is suitable for all ages. We do not knowingly collect any personal information from children under 13 years of age.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please visit our website: <a href="https://basketballstarsunblocked.org" className="text-blue-600 hover:underline">basketballstarsunblocked.org</a>
          </p>
        </div>
      </section>
    </div>
  )
} 