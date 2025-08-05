import AnimatedPage from "./AnimatedPage";
import Image from "./Image";

const BookKeeping = () => {
  return (
    <AnimatedPage>
      <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
        <div className="space-y-8">
          <div className="w-full">
            <div className="mb-6">
              <Image src="/Book.jpg" alt="Finance Book"/>
            </div>

            <p className="text-gray-800 leading-relaxed text-justify mb-6 whitespace-pre-line">
              Finance is a broad field that deals with the management, creation,
              and study of money, investments, and other financial instruments.
              It encompasses various activities and concepts, which can be
              categorized into several key areas:
              {"\n\n"}Personal Finance: This involves managing individual or
              household financial activities, including budgeting, saving,
              investing, and planning for retirement. Key concepts include:
              {"\n"} • Budgeting: Creating a plan for spending and saving money.
              {"\n"} • Saving: Setting aside money for future needs or
              emergencies.
              {"\n"} • Investing: Allocating money to assets like stocks, bonds,
              or real estate to generate returns.
              {"\n"} • Debt Management: Handling loans and credit responsibly.
              {"\n\n"}Corporate Finance: This area focuses on how businesses
              manage their financial resources. It includes:
              {"\n"} • Capital Structure: Determining the best mix of debt and
              equity financing.
              {"\n"} • Investment Decisions: Evaluating potential projects or
              investments to maximize returns.
              {"\n"} • Financial Analysis: Assessing a company's financial
              health through metrics like ROI and NPV.
              {"\n\n"}Public Finance: This involves the management of a
              country's revenue, expenditures, and debt load through various
              government and quasi-government institutions. Key components
              include:
              {"\n"} • Taxation: How governments collect revenue.
              {"\n"} • Public Expenditure: How governments allocate funds for
              services.
              {"\n"} • Budgeting: Planning government spending and revenue.
              {"\n\n"}Investment Finance: This area focuses on the management of
              investments and portfolios. It includes:
              {"\n"} • Asset Management: Managing investments for
              clients/institutions.
              {"\n"} • Risk Management: Identifying and mitigating risks.
              {"\n"} • Market Analysis: Studying trends and indicators.
              {"\n\n"}Financial Markets:
              {"\n"} • Stock Markets: Shares of publicly traded companies are
              bought/sold.
              {"\n"} • Bond Markets: Debt securities are issued and traded.
              {"\n"} • Derivatives Markets: Financial contracts derived from
              assets.
              {"\n\n"}Behavioral Finance: This field studies how psychological
              factors influence decision-making, including biases and irrational
              behaviors.
              {"\n\n"}Finance is essential for individuals and organizations to
              make informed decisions, manage risks, and achieve financial
              goals.
            </p>

            <div>
              <Image src="/Books.jpg" alt="Finance Resources"/>
            </div>
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default BookKeeping;
