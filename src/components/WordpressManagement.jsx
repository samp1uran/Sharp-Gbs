import AnimatedPage from "./AnimatedPage";
import Image from "./Image";

export default function WordPressManagement() {
  return (
    <>
      <AnimatedPage>
        <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
          <div className="space-y-8">
            <h3 className="text-4xl font-semibold mb-2">
              WordPress Management
            </h3>

            <div>
              <Image src="/wordpressManagement.png" alt="Wordpress Management"/>
            </div>
            <p className="mb-2">
              <b> Comprehensive WordPress Site Management</b>
            </p>
            <p className="mb-4">
              Your website is often the first impression potential customers
              have of your business. Our WordPress management services cover all
              aspects of your site, including regular updates, secure backups,
              robust security measures, and performance optimization. We ensure
              that your website runs smoothly and efficiently, allowing you to
              engage your audience without technical worries.
            </p>
            <p>
              Our team also provides SEO optimization to enhance your site’s
              visibility and attract more visitors. Whether you need help with
              theme customization, plugin management, or troubleshooting, we are
              here to ensure your WordPress site is always at its best.
            </p>
          </div>
        </main>
      </AnimatedPage>
    </>
  );
}
