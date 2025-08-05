import AnimatedPage from "./AnimatedPage";
import Image from "./Image";

const ContentWriting = () => {
  return (
    <AnimatedPage>
      <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
        <div className="p-4 overflow-y-auto rounded-lg">
          <h3 className="text-4xl font-bold mb-4">
            Content Writing Management
          </h3>

          <div>
            <Image src="/writing.jpg" alt="Content Writing"/>
          </div>

          <p className="text-lg font-medium mb-2">
            Professional Content Writing and Management Services
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Engaging your audience is key to building a strong online presence.
            Our content writing management services offer professional writing
            tailored to your brand’s voice and goals. From blog posts to website
            copy, social media content, and email newsletters, we create
            compelling content that resonates with your audience and enhances
            your visibility in the digital landscape. Our team of skilled
            writers understands the importance of SEO and will incorporate
            relevant keywords to help improve your search engine rankings. We
            also offer content strategy development to ensure your messaging is
            consistent and effective across all platforms.
          </p>

          <div>
            <Image src="/writing (2).jpg" alt="Writing Showcase"/>
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default ContentWriting;
