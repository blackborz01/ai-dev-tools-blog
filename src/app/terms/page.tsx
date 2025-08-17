import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900/10">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using AI Dev Tools Blog ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you do not have permission to access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials on AI Dev Tools Blog for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on AI Dev Tools Blog</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p className="mb-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by AI Dev Tools Blog at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property Rights</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of AI Dev Tools Blog and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. User Content</h2>
            <p className="mb-4">
              Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for Content that you post, including its legality, reliability, and appropriateness.
            </p>
            <p className="mb-4">By posting Content, you represent and warrant that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Content is yours or you have the right to use it</li>
              <li>Your use of Content does not infringe upon any rights of third parties</li>
              <li>Content does not contain viruses, malware, or harmful code</li>
              <li>Content is not spam, misleading, or fraudulent</li>
              <li>Content does not violate any applicable law or regulation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Prohibited Uses</h2>
            <p className="mb-4">You may not use our Service:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To interfere with or circumvent the security features of the Service</li>
              <li>To scrape, spider, or crawl any part of the Service without permission</li>
              <li>To use any automated system to access the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Account Terms</h2>
            <p className="mb-4">When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintaining the confidentiality of your account and password</li>
              <li>Restricting access to your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Disclaimer</h2>
            <p className="mb-4">
              The information on AI Dev Tools Blog is provided on an "as is" basis. AI Dev Tools Blog makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Implied warranties or conditions of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property or other violation of rights</li>
            </ul>
            <p className="mb-4">
              AI Dev Tools Blog does not warrant that the Service will function uninterrupted, secure, or available at any particular time or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall AI Dev Tools Blog, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless AI Dev Tools Blog and its licensees and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including attorney's fees).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-4">
              Upon termination, your right to use the Service will cease immediately. All provisions of the Terms shall survive termination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Third-Party Services</h2>
            <p className="mb-4">
              Our Service may contain links to third-party websites or services that are not owned or controlled by AI Dev Tools Blog. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="mb-4">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <ul className="list-none mb-4">
              <li><strong>Email:</strong> legal@aidevtools.blog</li>
              <li><strong>Website:</strong> https://aidevtools.blog/contact</li>
              <li><strong>Address:</strong> [Your Business Address]</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
