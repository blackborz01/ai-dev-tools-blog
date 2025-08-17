                            {con.workaround && (
                              <p className="text-sm bg-white dark:bg-black p-2 border-2 border-red-300">
                                <strong>Workaround:</strong> {con.workaround}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Verdict Box */}
                  <div className="bg-black dark:bg-white text-white dark:text-black p-8">
                    <h3 className="text-2xl font-black mb-4">🎯 FINAL VERDICT</h3>
                    <p className="text-lg mb-4">{tool.verdict?.summary}</p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div>
                        <p className="font-black mb-1">OVERALL SCORE</p>
                        <p className="text-3xl font-black text-lime-400 dark:text-lime-600">
                          {tool.verdict?.score}/10
                        </p>
                      </div>
                      <div>
                        <p className="font-black mb-1">BEST FOR</p>
                        <p className="text-sm">{tool.verdict?.bestFor}</p>
                      </div>
                      <div>
                        <p className="font-black mb-1">AVOID IF</p>
                        <p className="text-sm">{tool.verdict?.avoidIf}</p>
                      </div>
                    </div>
                  </div>

                  {/* Alternatives Comparison */}
                  {tool.alternatives && tool.alternatives.length > 0 && (
                    <div>
                      <h3 className="text-3xl font-black mb-6">How {tool.name} Compares to Alternatives</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-4 border-black dark:border-white">
                          <thead>
                            <tr className="bg-black dark:bg-white text-white dark:text-black">
                              <th className="p-4 font-black text-left">TOOL</th>
                              <th className="p-4 font-black text-left">PRICE</th>
                              <th className="p-4 font-black text-left">BEST FOR</th>
                              <th className="p-4 font-black text-left">KEY DIFFERENCE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-lime-400 text-black">
                              <td className="p-4 font-black">{tool.name} ⭐</td>
                              <td className="p-4">${tool.pricing.tiers.pro?.price || 0}/mo</td>
                              <td className="p-4">{tool.verdict?.bestFor}</td>
                              <td className="p-4">YOUR CURRENT CHOICE</td>
                            </tr>
                            {tool.alternatives.map((alt: any, idx: number) => (
                              <tr key={idx} className="border-b-2 border-black dark:border-white">
                                <td className="p-4 font-bold">{alt.name}</td>
                                <td className="p-4">{alt.price}</td>
                                <td className="p-4">{alt.bestFor}</td>
                                <td className="p-4">{alt.difference}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="space-y-12">
                  <div>
                    <h2 className="text-4xl font-black mb-4 pb-2 border-b-4 border-black dark:border-white">
                      {tool.name} User Reviews & Testimonials
                    </h2>
                    <div className="flex items-center gap-6 mb-8">
                      <div>
                        <div className="text-5xl font-black">{tool.stats.rating}</div>
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-6 h-6 ${i < Math.floor(tool.stats.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <div className="text-sm font-mono">{tool.stats.reviews} REVIEWS</div>
                      </div>
                      <div className="flex-1">
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map(rating => {
                            const percentage = tool.stats.ratingDistribution?.[rating] || 0
                            return (
                              <div key={rating} className="flex items-center gap-2">
                                <span className="w-4 font-black">{rating}</span>
                                <Star className="w-4 h-4" />
                                <div className="flex-1 bg-gray-200 dark:bg-gray-800 h-4">
                                  <div 
                                    className="bg-yellow-400 h-full" 
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                                <span className="text-sm font-mono w-12">{percentage}%</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Reviews */}
                  {tool.reviews && tool.reviews.featured && (
                    <div>
                      <h3 className="text-2xl font-black mb-6">FEATURED REVIEWS</h3>
                      <div className="space-y-6">
                        {tool.reviews.featured.map((review: any, idx: number) => (
                          <div key={idx} className="border-4 border-black dark:border-white p-6 brutal-shadow-lg">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="font-black text-lg">{review.author}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {review.role} at {review.company} • {review.date}
                                </p>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <h5 className="font-black mb-2">{review.title}</h5>
                            <p className="mb-4">{review.content}</p>
                            {review.pros && (
                              <div className="mb-2">
                                <span className="font-black text-green-600">Pros:</span> {review.pros}
                              </div>
                            )}
                            {review.cons && (
                              <div className="mb-4">
                                <span className="font-black text-red-600">Cons:</span> {review.cons}
                              </div>
                            )}
                            {review.verified && (
                              <div className="flex items-center text-sm text-green-600">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Verified Purchase
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Review Sources */}
                  {tool.reviews && tool.reviews.sources && (
                    <div className="bg-gray-100 dark:bg-gray-900 p-6 border-4 border-black dark:border-white">
                      <h3 className="font-black mb-4">REVIEW SOURCES</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {tool.reviews.sources.map((source: any, idx: number) => (
                          <div key={idx} className="bg-white dark:bg-black p-4 border-2 border-gray-300 dark:border-gray-700">
                            <h4 className="font-black">{source.platform}</h4>
                            <div className="flex items-center my-2">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                              <span className="font-black">{source.rating}</span>
                              <span className="text-sm ml-2">({source.count} reviews)</span>
                            </div>
                            <a 
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-red-500 hover:underline"
                            >
                              View on {source.platform} →
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* User Feedback Summary */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 border-4 border-green-500">
                      <h3 className="font-black text-xl mb-4 text-green-700 dark:text-green-400">
                        👍 WHAT USERS LOVE
                      </h3>
                      <ul className="space-y-2">
                        {tool.reviews?.highlights?.positive?.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 border-4 border-red-500">
                      <h3 className="font-black text-xl mb-4 text-red-700 dark:text-red-400">
                        👎 COMMON COMPLAINTS
                      </h3>
                      <ul className="space-y-2">
                        {tool.reviews?.highlights?.negative?.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <XCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* FAQs Tab */}
              {activeTab === 'faqs' && (
                <div className="space-y-12">
                  <h2 className="text-4xl font-black mb-8 pb-2 border-b-4 border-black dark:border-white">
                    Frequently Asked Questions about {tool.name}
                  </h2>

                  {tool.faqs && tool.faqs.map((faq: any, idx: number) => (
                    <div key={idx} className="border-4 border-black dark:border-white brutal-shadow">
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                      >
                        <h3 className="font-black text-lg pr-4">{faq.question}</h3>
                        {expandedFAQs.includes(idx) ? (
                          <ChevronUp className="w-6 h-6 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFAQs.includes(idx) && (
                        <div className="p-6 pt-0">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                          {faq.example && (
                            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700">
                              <p className="font-mono text-sm mb-2">EXAMPLE:</p>
                              <code className="text-sm">{faq.example}</code>
                            </div>
                          )}
                          {faq.link && (
                            <a 
                              href={faq.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-4 text-red-500 hover:underline font-bold"
                            >
                              Learn more →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Quick Start Guide */}
                  {tool.quickStart && (
                    <div className="bg-lime-400 text-black p-8 border-4 border-black">
                      <h3 className="text-2xl font-black mb-6">⚡ QUICK START GUIDE</h3>
                      <div className="bg-black text-white p-4 font-mono text-sm mb-6 relative">
                        <button
                          onClick={copyInstallCommand}
                          className="absolute top-2 right-2 p-2 hover:bg-white/20 transition-colors"
                        >
                          {copiedCode ? (
                            <CheckCircle className="w-5 h-5 text-lime-400" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                        <pre>{tool.quickStart.install || `npm install ${tool.slug}`}</pre>
                      </div>
                      <ol className="space-y-3">
                        {tool.quickStart.steps?.map((step: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="font-black text-2xl mr-4">{idx + 1}.</span>
                            <span className="text-lg">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Support & Resources */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-4 border-black dark:border-white p-6">
                      <h3 className="font-black text-xl mb-4">📚 RESOURCES</h3>
                      <ul className="space-y-3">
                        {tool.resources?.map((resource: any, idx: number) => (
                          <li key={idx}>
                            <a 
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-red-500 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              <span className="font-bold">{resource.title}</span>
                            </a>
                            <p className="text-sm text-gray-600 dark:text-gray-400 ml-6">
                              {resource.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-4 border-black dark:border-white p-6">
                      <h3 className="font-black text-xl mb-4">🆘 SUPPORT</h3>
                      <ul className="space-y-3">
                        {tool.support?.channels?.map((channel: any, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="font-black mr-2">{channel.type}:</span>
                            <div>
                              <p>{channel.description}</p>
                              {channel.responseTime && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  Response time: {channel.responseTime}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                      {tool.support?.communityUrl && (
                        <a 
                          href={tool.support.communityUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-black brutal-hover"
                        >
                          JOIN COMMUNITY →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 bg-gradient-to-br from-red-500 to-orange-500 text-white border-t-4 border-black dark:border-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Try {tool.name}?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join {(tool.stats.users / 1000).toFixed(0)}K+ developers already using {tool.name} to {tool.benefit || 'boost their productivity'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href={tool.affiliateUrl || tool.urls.official}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black text-white font-black text-lg brutal-shadow-xl brutal-hover inline-flex items-center"
              >
                <Zap className="w-6 h-6 mr-2" />
                START FREE TRIAL
              </a>
              <a 
                href={tool.urls.demo || '#'}
                className="px-8 py-4 bg-white text-black font-black text-lg brutal-shadow-xl brutal-hover inline-flex items-center"
              >
                <PlayCircle className="w-6 h-6 mr-2" />
                WATCH DEMO
              </a>
            </div>
            {tool.pricing.moneyBackGuarantee && (
              <p className="mt-6 text-sm font-mono">
                <Shield className="inline w-4 h-4 mr-1" />
                {tool.pricing.moneyBackGuarantee} Money-Back Guarantee
              </p>
            )}
          </div>
        </section>

        {/* Related Tools */}
        {tool.relatedTools && tool.relatedTools.length > 0 && (
          <section className="py-12 border-t-4 border-black dark:border-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-black mb-8">RELATED TOOLS</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tool.relatedTools.map((related: any, idx: number) => (
                  <Link 
                    key={idx}
                    href={`/tools/${related.slug}`}
                    className="border-4 border-black dark:border-white p-6 brutal-shadow brutal-hover block"
                  >
                    <h3 className="font-black text-xl mb-2">{related.name}</h3>
                    <p className="text-sm mb-4">{related.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono">
                        ⭐ {related.rating} ({related.reviews})
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        <section className="py-12 bg-black dark:bg-white text-white dark:text-black border-t-4 border-black dark:border-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-black mb-4">
                GET DAILY AI TOOL UPDATES
              </h2>
              <p className="mb-6">
                Join 50K+ developers getting the latest AI tools, tips, and exclusive deals
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white dark:bg-black text-black dark:text-white border-4 border-white dark:border-black font-mono"
                />
                <button className="px-6 py-3 bg-red-500 text-white font-black brutal-shadow-xl brutal-hover">
                  SUBSCRIBE →
                </button>
              </form>
              <p className="mt-4 text-xs font-mono opacity-80">
                NO SPAM • UNSUBSCRIBE ANYTIME • 2 EMAILS/WEEK MAX
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t-4 border-black dark:border-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-black mb-4">TOOLS</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/tools" className="hover:text-red-500">All Tools</Link></li>
                  <li><Link href="/tools?category=ai" className="hover:text-red-500">AI Tools</Link></li>
                  <li><Link href="/tools?category=dev" className="hover:text-red-500">Dev Tools</Link></li>
                  <li><Link href="/tools?trending=true" className="hover:text-red-500">Trending</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black mb-4">CONTENT</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog" className="hover:text-red-500">Blog</Link></li>
                  <li><Link href="/mcp" className="hover:text-red-500">MCP Servers</Link></li>
                  <li><Link href="/reviews" className="hover:text-red-500">Reviews</Link></li>
                  <li><Link href="/comparisons" className="hover:text-red-500">Comparisons</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black mb-4">COMPANY</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-red-500">About</Link></li>
                  <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
                  <li><Link href="/advertise" className="hover:text-red-500">Advertise</Link></li>
                  <li><Link href="/submit" className="hover:text-red-500">Submit Tool</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black mb-4">FOLLOW</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-red-500">Twitter/X</a></li>
                  <li><a href="#" className="hover:text-red-500">GitHub</a></li>
                  <li><a href="#" className="hover:text-red-500">Discord</a></li>
                  <li><a href="#" className="hover:text-red-500">RSS Feed</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-8 border-t-2 border-gray-200 dark:border-gray-800">
              <p className="font-mono text-xs">
                © 2025 AI.TOOLS // BUILT WITH ❤️ AND ☕ // ALL SYSTEMS OPERATIONAL
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}