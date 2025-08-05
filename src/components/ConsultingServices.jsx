import AnimatedPage from "./AnimatedPage";
import Image from "./Image";

const ConsultingServices = () => {
  return (
    <AnimatedPage>
      <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
        <div className="space-y-8">
          <h3 className="text-4xl font-bold mb-2">Consulting Services:</h3>
          <div>
            <Image src="/consultingServices.jpg" alt="Consulting Services"/>
          </div>
          <p className="text-gray-700 mb-4">
            Benefit from our expertise in business strategy, financial planning,
            and operational efficiency to drive your business forward.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Sharp Gbs, we pride ourselves on offering a diverse range of
            professional services designed to meet the unique needs of your
            business. Our commitment to excellence ensures that you receive the
            highest quality support in every area we cover. Explore our key
            services...
          </p>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default ConsultingServices;
