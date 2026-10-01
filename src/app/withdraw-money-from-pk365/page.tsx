import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DOWNLOAD_APP_URL } from '@/lib/constants';

import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'How to Withdraw Money from PK365? | Fast & Secure Withdrawal Guide 2026',
  description: 'Learn how to withdraw money from PK365 using JazzCash, EasyPaisa, and Bank Transfer. Follow our step-by-step guide for quick and secure withdrawals.',
  keywords: 'withdraw money PK365, PK365 withdrawal, jazzcash withdrawal, easypaisa withdrawal, cash out PK365, PK365 payout',
  openGraph: {
    title: 'How to Withdraw Money from PK365? | Fast & Secure Withdrawal Guide',
    description: 'Step-by-step guide to withdraw money from PK365 using JazzCash, EasyPaisa, and Bank Transfer. Quick and secure withdrawals.',
    url: 'https://pk365-app.pk/withdraw-money-from-pk365',
    siteName: 'PK365',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Withdraw Money from PK365?',
    description: 'Learn how to withdraw money from PK365 using our complete withdrawal guide.',
  },
  alternates: {
    canonical: 'https://pk365-app.pk/withdraw-money-from-pk365',
  },
};

export default function WithdrawMoneyPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative w-40 h-72 md:w-48 md:h-80 mx-auto mb-6 rounded-xl overflow-hidden border border-gray-700">
              <Image
                src="/pk365-game-withdraw-methods.webp"
                alt="PK365 - Withdraw via JazzCash, EasyPaisa & Bank Transfer"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to Withdraw Money from <span className="text-[#FFA500]">PK365</span>?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Fast, Secure & Easy Cash Out with JazzCash, EasyPaisa & Bank Transfer
            </p>
            <DownloadButton label="WITHDRAW NOW" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <Link href="/" className="text-accent hover:underline font-semibold">PK365</Link> is a well-known online card game that offers many variants of Teen Patti and allows players to earn real money. If you haven't already, <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">download PK365</a> to get started. Many players play it to earn extra income. Once you win money, the first step is to cash out your funds securely.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                New players can feel confused when they try to withdraw cash from PK365. But the withdrawal process is straightforward, so that everyone can do it without any confusion. You can send your earnings to your personal accounts, such as Easypaisa and Jazzcash. Before withdrawing, make sure you have <Link href="/deposit-money-in-pk365" className="text-accent hover:underline font-semibold">deposited money in PK365</Link> to start playing and winning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-By-Step Guide */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Step-By-Step Guide to Withdraw Money from PK365
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004038] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Open PK365 App</h3>
                    <p className="text-gray-300 leading-relaxed">
                      First, open the PK365 app on your phone and log in to your account using your registered mobile number and password. You must have a strong internet connection to avoid login issues.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004038] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Click on Wallet Option</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After logging in to your PK365 account, click on the wallet option. You will see your current balance and other options, such as the withdraw and deposit buttons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004038] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Choose Withdraw Button</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After clicking on the wallet option, choose the withdraw button to start the withdrawal process. You will see different options, such as payment methods and payment amounts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004038] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Type Amount</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Type the amount that you want to cash out. It must be within withdrawal limits. Review your winnings before typing the withdrawal amount.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004038] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Select Payment Method</h3>
                    <p className="text-gray-300 leading-relaxed">
                      PK365 provides many payment methods, including Easypaisa, Jazzcash, and Bank Transfer. Select the payment method that you want to use easily.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004038] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Enter Payment Details</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Now enter your account information, including account number and name. Enter the correct payment details to avoid problems in the withdrawal process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004038] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    7
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Confirm Payout</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Re-check all withdrawal details carefully. If the information is correct, confirm your withdrawal by clicking on the withdraw button.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 8 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004038] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    8
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Wait for Processing</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After confirming the withdrawal, PK365 will start processing your withdrawal request. It usually takes 24 hours or less. It may take longer due to network issues or payment delays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 9 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004038] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    9
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Check Your Account</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After successfully withdrawing the withdrawal request, you will receive your payment in your personal account. Check your account, and if you have received money, you can use it however you like.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Efficient Payout */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Tips for Efficient Payout
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Use the same account information that you have used to create a PK365 account.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Do not cash out tiny amounts to save time.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Update your PK365 app for smooth payouts.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Your account must be verified to avoid problems.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Contact the customer support team if you do not receive payment within a given time.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Conclusion</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Cashing out funds from PK365 is very easy if you know the proper steps. Re-check your account information and select a real payment method. You can enjoy your earnings without any trouble if you follow the whole process correctly.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Follow all rules and withdrawal limits to avoid problems. It provides safe, quick withdrawals to all its users. You can securely collect your winnings and enjoy your favorite games in PK365 by following these simple steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  What is the minimum amount that we can withdraw from the PK365 Game?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You can easily withdraw a minimum of Rs 100 from your PK365 account, as it supports withdrawals of that amount.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  How long does PK365 take to send withdrawals?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  PK365 usually processes withdrawals in 3 to 24 hours. It may take longer due to some issues.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  What should we do if our payout fails on PK365?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  If your withdrawal fails on PK365, contact its customer support team to approve your withdrawal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Withdraw Your Winnings?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Download PK365 now and start withdrawing your earnings securely!
            </p>
            <DownloadButton label="WITHDRAW NOW" />
          </div>
        </div>
      </section>

      {/* Structured Data: HowTo + WebPage for GEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://pk365-app.pk/withdraw-money-from-pk365#webpage",
                "url": "https://pk365-app.pk/withdraw-money-from-pk365",
                "name": "How to Withdraw Money from PK365 | JazzCash, EasyPaisa & Bank 2026",
                "description": "Step-by-step guide to withdraw money from PK365 using JazzCash, EasyPaisa, and Bank Transfer in Pakistan.",
                "inLanguage": "en-US",
                "about": { "@type": "Thing", "name": "PK365", "url": "https://pk365-app.pk" },
                "mainEntity": { "@id": "https://pk365-app.pk/withdraw-money-from-pk365#howto" },
                "primaryImageOfPage": { "@type": "ImageObject", "url": "https://pk365-app.pk/PK365-Game-Icon.webp" }
              },
              {
                "@id": "https://pk365-app.pk/withdraw-money-from-pk365#howto",
                "@type": "HowTo",
                "name": "How to Withdraw Money from PK365",
                "description": "Step-by-step guide to withdraw money from PK365 using JazzCash, EasyPaisa, and Bank Transfer in Pakistan.",
                "totalTime": "PT5M",
                "url": "https://pk365-app.pk/withdraw-money-from-pk365",
                "step": [
                  { "@type": "HowToStep", "position": 1, "name": "Open PK365 App", "text": "Open the PK365 app and log in with your registered mobile number and password." },
                  { "@type": "HowToStep", "position": 2, "name": "Click on Wallet Option", "text": "Tap the Wallet option to see your balance and withdraw or deposit buttons." },
                  { "@type": "HowToStep", "position": 3, "name": "Choose Withdraw Button", "text": "Tap Withdraw to start the withdrawal process and see payment methods and amounts." },
                  { "@type": "HowToStep", "position": 4, "name": "Type Amount", "text": "Enter the amount you want to cash out, within the withdrawal limits." },
                  { "@type": "HowToStep", "position": 5, "name": "Select Payment Method", "text": "Select EasyPaisa, JazzCash, or Bank Transfer." },
                  { "@type": "HowToStep", "position": 6, "name": "Enter Payment Details", "text": "Enter your account number and name. Use correct details to avoid failed payouts." },
                  { "@type": "HowToStep", "position": 7, "name": "Confirm Payout", "text": "Review all details and confirm the withdrawal." },
                  { "@type": "HowToStep", "position": 8, "name": "Wait for Processing", "text": "Processing usually completes within 24 hours; JazzCash and EasyPaisa are often faster." },
                  { "@type": "HowToStep", "position": 9, "name": "Check Your Account", "text": "Check your wallet or bank account to confirm the payment has been received." }
                ]
              }
            ]
          }).replace(/</g, "\\u003c")
        }}
      />
    </div>
  );
}

