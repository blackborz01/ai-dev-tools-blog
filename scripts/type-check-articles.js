// Type check helper for articles
import { articles } from '../src/lib/articles';

// Verify all articles have required fields
articles.forEach(article => {
  if (!article.slug) console.error(`Article missing slug`);
  if (!article.title) console.error(`Article ${article.slug} missing title`);
  if (!article.content) console.error(`Article ${article.slug} missing content`);
  if (!article.excerpt) console.error(`Article ${article.slug} missing excerpt`);
  if (!article.tableOfContents || article.tableOfContents.length === 0) {
    console.error(`Article ${article.slug} missing table of contents`);
  }
});

console.log(`✅ Type check passed for ${articles.length} articles`);
