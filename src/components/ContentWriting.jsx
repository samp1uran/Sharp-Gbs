import AnimatedPage from "./AnimatedPage";
import Image from "./Image";
import Button from "@mui/material/Button";
import { MdOutlineDrafts } from "react-icons/md";
import { RiSeoLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function ContentWriting() {
  return (
    <AnimatedPage>
    <section className="px-6 py-2 mb-3 text-gray-800 max-w-5xl mx-auto leading-relaxed">
      <div className=" space-y-16">
        {/* Intro */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            ✍️ Content Writing & Management Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In today's digital world, building a strong connection with your
            audience is vital. We help you create content that reflects your
            voice, builds trust, and drives real engagement.
          </p>
          <div>
             <Image src="/writing.jpg" alt="Content Writing"/>
           </div>
        </div>

        {/* Content Solutions */}
        <div className="space-y-10">
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            Comprehensive Content Solutions
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Blog Posts */}
            <div className="flex gap-4 items-start">
              <div>
                <h4 className="text-xl font-semibold">📝 Blog Posts</h4>
                <p className="text-gray-600">
                  Informative and engaging blog articles tailored to your
                  audience. We use storytelling, keyword research, and insights
                  to drive interaction and authority.
                </p>
              </div>
            </div>

            {/* Web Content */}
            <div className="flex gap-4 items-start">
              <div>
                <h4 className="text-xl font-semibold">🌐 Web Content</h4>
                <p className="text-gray-600">
                  Clear and persuasive website copy that enhances user
                  experience and encourages conversions — all while aligning
                  with your brand voice.
                </p>
              </div>
            </div>

            {/* Social Media Posts */}
            <div className="flex gap-4 items-start">
              <div>
                <h4 className="text-xl font-semibold">📱 Social Media Posts</h4>
                <p className="text-gray-600">
                  Eye-catching and interactive content crafted for each
                  platform. We help grow your following and spark conversation.
                </p>
              </div>
            </div>

            {/* Email Newsletters */}
            <div className="flex gap-4 items-start">
              <div>
                <h4 className="text-xl font-semibold">📧 Email Newsletters</h4>
                <p className="text-gray-600">
                  Visually appealing and personalized emails that build loyalty
                  and drive clicks — ideal for campaigns, updates, and
                  automation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Section */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            <RiSeoLine className="text-blue-600" size={32} /> SEO Expertise
          </h3>
          <p className="text-gray-600">
            We optimize all content with SEO in mind — from keyword placement to
            readability and search intent. Our SEO strategies include:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4">
            <li>In-depth keyword research</li>
            <li>Optimized meta tags and headings</li>
            <li>Internal linking and anchor text</li>
            <li>Ongoing SEO updates with algorithm changes</li>
          </ul>
        </div>

        {/* Strategy Section */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            <MdOutlineDrafts className="text-blue-600" size={32} /> Content
            Strategy Development
          </h3>
          <p className="text-gray-600">
            We help you build a data-driven content roadmap that supports your
            long-term goals. Our strategy services include:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4">
            <li>Persona creation and content mapping</li>
            <li>Channel and format planning</li>
            <li>Publishing calendar & frequency</li>
            <li>Performance tracking with analytics</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            🤝 Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4">
            <li>Experienced content creators across industries</li>
            <li>Fully customized and original work — no templates</li>
            <li>On-time delivery with quick revisions</li>
            <li>Collaborative and transparent workflow</li>
            <li>Scalable solutions for one-time or ongoing needs</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <h3 className="text-2xl font-semibold mb-2">
            🚀 Let’s Elevate Your Brand
          </h3>
          <p className="text-gray-700 mb-4">
            Create compelling, consistent content that builds trust and drives
            results. Reach out today!
          </p>
          <Link to="/contact">
            <Button variant="contained" className="!bg-gray-800">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </section>
    </AnimatedPage>
  );
}

export default ContentWriting;
