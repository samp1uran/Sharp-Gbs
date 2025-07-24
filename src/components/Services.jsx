import React from 'react';

const Services = () => {
  return (
    <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
      <div className="space-y-8">

    <div className="">
      <h3 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h3>
      <p className="mb-4">
        At Sharp Gbs, we pride ourselves on offering a diverse range of professional services designed to meet the unique
        needs of your business. Our commitment to excellence ensures that you receive the highest quality support in every
        area we cover. Explore our key services...
      </p>
      <div>
        <img src="/Sharp Gbs.jpg" alt="Sharp Gbs" className="w-full h-auto rounded-xl" />
      </div>
    </div>

    <div className="space-y-4">
      <marquee>
        <h3 className="text-xl font-semibold italic text-black-700">Additional Services</h3>
      </marquee>
      <p>
        In addition to our core offerings, we also provide a range of supplementary services to further support your
        business needs. These include:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Social Media Management:</strong> Enhance your online presence and engage with your audience through effective
          social media strategies.
        </li>
        <li>
          <strong>Graphic Design:</strong> Create visually appealing graphics and branding materials that reflect your business identity.
        </li>
        <li>
          <strong>Virtual Assistance:</strong> Streamline your operations with our virtual assistant services, handling administrative
          tasks and freeing up your time for strategic initiatives.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900">Consulting Services</h3>
      <p>
        Benefit from our expertise in business strategy, financial planning, and operational
        efficiency to drive your business forward.
      </p>

      <h2 className="text-xl font-bold text-gray-800">
        At Sharp Gbs, we are dedicated to helping your business thrive through our comprehensive suite of services.
        Whether you need meticulous bookkeeping, expert WordPress management, insightful data analysis, engaging content
        writing, or any of our additional services, we have the expertise to support your growth.
      </h2>

      <h3 className="text-xl font-semibold text-gray-900">Contact Us Today!</h3>
      <p>
        Ready to take your business to the next level? Reach out to us today to discuss your specific needs and discover how
        we can tailor our services to help you achieve your business objectives. Our team is here to provide you with the
        support and guidance you need to succeed.
      </p>
    </div>
  </div>
</main>

  );
};

export default Services;
