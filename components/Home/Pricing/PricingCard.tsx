type Feature = {
  label: string;
  isAvailable: boolean;
};

type Props = {
  plan: string;
  price: string;
  desc: string;
  features: Feature[];
};

const PricingCard = ({ plan, price, desc, features }: Props) => {
  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xl">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          {plan}
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">{desc}</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Rp. {price}
          </strong>
        </p>

        <a
          className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6 transition-all duration-300"
          href="#"
        >
          Pilih Paket
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Fitur:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.isAvailable ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-red-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}

              <span className="text-gray-700">{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
