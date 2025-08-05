import AnimatedPage from "./AnimatedPage";
import Image from "./Image";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const FinancialServices = () => {
  return (
    <AnimatedPage>
      {/* <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
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
      </main> */}

      <section className="px-6 py-2 mb-4 text-gray-800 max-w-5xl mx-auto leading-relaxed">
      <div className="space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">💼 Professional Financial Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In today’s competitive market, strong financial management is key to sustainable growth. Our financial services are designed to streamline operations, ensure compliance, and empower your decision-making with data-driven insights.
          </p>
          <div className="mb-6">
              <Image src="/Book.jpg" alt="Finance Book"/>
            </div>
        </div>

        {/* Services Overview */}
        <div className="space-y-10">
          <h3 className="text-3xl font-semibold">🧩 What We Offer</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold">🧾 Financial Recordkeeping</h4>
              <p className="text-gray-600">
                We maintain accurate, organized records of all your transactions, creating a solid financial foundation for reporting and audits.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">💳 Accounts Management</h4>
              <p className="text-gray-600">
                Timely and accurate management of accounts receivable and payable to keep your cash flow healthy and operations running smoothly.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">📊 Financial Reporting & Analysis</h4>
              <p className="text-gray-600">
                Gain insights with custom reports: balance sheets, income statements, and cash flow analysis to guide smart business decisions.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">🏦 Bank Reconciliation</h4>
              <p className="text-gray-600">
                We reconcile your books with bank records to ensure accuracy, uncover discrepancies, and maintain integrity in financial reporting.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">👥 Payroll Services</h4>
              <p className="text-gray-600">
                Accurate payroll processing with tax compliance and reporting — ensuring your employees are paid correctly and on time.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">📈 Financial Strategy & Forecasting</h4>
              <p className="text-gray-600">
                We help you plan for the future with budget forecasting, break-even analysis, and performance projections aligned with your goals.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">🚀 Why Financial Services Matter</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
            <li><strong>Time Efficiency:</strong> Focus on your core operations while we manage the numbers.</li>
            <li><strong>Financial Clarity:</strong> Make confident decisions based on accurate and up-to-date data.</li>
            <li><strong>Risk Reduction:</strong> Minimize errors and ensure regulatory compliance.</li>
            <li><strong>Scalability:</strong> Our services grow with your business, from startup to enterprise.</li>
            <li><strong>Peace of Mind:</strong> Know your finances are handled by professionals who care about your success.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">🤝 Why Choose Us?</h3>
          <p className="text-gray-600">
            With years of experience and a commitment to excellence, we offer dependable financial support that adapts to your business goals.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
            <li>Personalized, client-focused approach</li>
            <li>Up-to-date knowledge of financial regulations</li>
            <li>Transparent pricing and flexible packages</li>
            <li>Fast turnaround times and clear communication</li>
            <li>Data security and confidentiality guaranteed</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <h3 className="text-2xl font-semibold mb-2">📞 Let’s Talk Numbers</h3>
          <p className="text-gray-700 mb-4">
            Ready to transform your financial management? Get in touch to discuss your needs with our experts today!
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
};

export default FinancialServices;
