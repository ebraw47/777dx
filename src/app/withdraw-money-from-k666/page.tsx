import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DOWNLOAD_APP_URL } from '@/lib/constants';

import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'How to Withdraw Money from K666? | Fast & Secure Withdrawal Guide 2026',
  description: 'Learn how to withdraw money from K666 using JazzCash, EasyPaisa, and Bank Transfer. Follow our step-by-step guide for quick and secure withdrawals.',
  keywords: 'withdraw money K666, K666 withdrawal, jazzcash withdrawal, easypaisa withdrawal, cash out K666, K666 payout',
  openGraph: {
    title: 'How to Withdraw Money from K666? | Fast & Secure Withdrawal Guide',
    description: 'Step-by-step guide to withdraw money from K666 using JazzCash, EasyPaisa, and Bank Transfer. Quick and secure withdrawals.',
    url: 'https://k666-app.com.pk/withdraw-money-from-k666',
    siteName: 'K666',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Withdraw Money from K666?',
    description: 'Learn how to withdraw money from K666 using our complete withdrawal guide.',
  },
  alternates: {
    canonical: 'https://k666-app.com.pk/withdraw-money-from-k666',
  },
};

export default function WithdrawMoneyPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section — text left, withdraw screenshot right */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                How to Withdraw Money from <span className="text-[#fbdf03]">K666</span>?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Fast, Secure & Easy Cash Out with JazzCash, EasyPaisa & Bank Transfer
              </p>
              <div className="flex justify-center md:justify-start">
                <DownloadButton label="WITHDRAW NOW" />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-44 h-80 md:w-52 md:h-[22rem] rounded-2xl overflow-hidden border border-[#fbdf03]/35 shadow-[0_12px_40px_rgba(0,0,0,0.45)] bg-primary">
                <Image
                  src="/k666-withdraw.webp"
                  alt="K666 - Withdraw via JazzCash, EasyPaisa & Bank Transfer"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 176px, 208px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <Link href="/" className="text-accent hover:underline font-semibold">K666</Link> is a well-known real-money gaming app with earning games and short mobile rounds. If you haven't already, <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">download K666</a> to get started. Many players play it to earn extra income. Once you win money, the first step is to cash out your funds securely.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                New players can feel confused when they try to withdraw cash from K666. But the withdrawal process is straightforward, so that everyone can do it without any confusion. You can send your earnings to your personal accounts, such as Easypaisa and Jazzcash. Before withdrawing, make sure you have <Link href="/deposit-money-in-k666" className="text-accent hover:underline font-semibold">deposited money in K666</Link> to start playing and winning.
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
              Step-By-Step Guide to Withdraw Money from K666
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#134e22] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Open K666 App</h3>
                    <p className="text-gray-300 leading-relaxed">
                      First, open the K666 app on your phone and log in to your account using your registered mobile number and password. You must have a strong internet connection to avoid login issues.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#134e22] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Click on Wallet Option</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After logging in to your K666 account, click on the wallet option. You will see your current balance and other options, such as the withdraw and deposit buttons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#134e22] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-[#134e22] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-[#134e22] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Select Payment Method</h3>
                    <p className="text-gray-300 leading-relaxed">
                      K666 provides many payment methods, including Easypaisa, Jazzcash, and Bank Transfer. Select the payment method that you want to use easily.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#134e22] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-[#134e22] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-[#134e22] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    8
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Wait for Processing</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After confirming the withdrawal, K666 will start processing your withdrawal request. It usually takes 24 hours or less. It may take longer due to network issues or payment delays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 9 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#134e22] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
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
                  <span className="text-lg text-gray-300">Use the same account information that you have used to create a K666 account.</span>
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
                  <span className="text-lg text-gray-300">Update your K666 app for smooth payouts.</span>
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
                Cashing out funds from K666 is very easy if you know the proper steps. Re-check your account information and select a real payment method. You can enjoy your earnings without any trouble if you follow the whole process correctly.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Follow all rules and withdrawal limits to avoid problems. It provides safe, quick withdrawals to all its users. You can securely collect your winnings and enjoy your favorite games in K666 by following these simple steps.
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
                  What is the minimum amount that we can withdraw from the K666 Game?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You can easily withdraw a minimum of Rs 100 from your K666 account, as it supports withdrawals of that amount.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  How long does K666 take to send withdrawals?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  K666 usually processes withdrawals in 3 to 24 hours. It may take longer due to some issues.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  What should we do if our payout fails on K666?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  If your withdrawal fails on K666, contact its customer support team to approve your withdrawal.
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
              Download K666 now and start withdrawing your earnings securely!
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
                "@id": "https://k666-app.com.pk/withdraw-money-from-k666#webpage",
                "url": "https://k666-app.com.pk/withdraw-money-from-k666",
                "name": "How to Withdraw Money from K666 | JazzCash, EasyPaisa & Bank 2026",
                "description": "Step-by-step guide to withdraw money from K666 using JazzCash, EasyPaisa, and Bank Transfer in Pakistan.",
                "inLanguage": "en-US",
                "about": { "@type": "Thing", "name": "K666", "url": "https://k666-app.com.pk" },
                "mainEntity": { "@id": "https://k666-app.com.pk/withdraw-money-from-k666#howto" },
                "primaryImageOfPage": { "@type": "ImageObject", "url": "https://k666-app.com.pk/k666-logo.webp" }
              },
              {
                "@id": "https://k666-app.com.pk/withdraw-money-from-k666#howto",
                "@type": "HowTo",
                "name": "How to Withdraw Money from K666",
                "description": "Step-by-step guide to withdraw money from K666 using JazzCash, EasyPaisa, and Bank Transfer in Pakistan.",
                "totalTime": "PT5M",
                "url": "https://k666-app.com.pk/withdraw-money-from-k666",
                "step": [
                  { "@type": "HowToStep", "position": 1, "name": "Open K666 App", "text": "Open the K666 app and log in with your registered mobile number and password." },
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

