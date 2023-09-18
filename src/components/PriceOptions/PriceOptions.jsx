import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym facilities",
        "Cardio equipment",
        "Locker room access",
        "Open 7 days a week",
        "Online workout videos",
        "Discounts on gym merchandise",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "All Basic Membership features",
        "Free group fitness classes",
        "Access to swimming pool",
        "Personal trainer sessions (2/month)",
        "Sauna access",
        "Nutrition guidance",
      ],
    },
    {
      id: 3,
      name: "Ultimate Membership",
      price: 79.99,
      features: [
        "All Premium Membership features",
        "Unlimited personal trainer sessions",
        "Spa access",
        "Towel service",
        "Nutrition consultation (monthly)",
        "Massage therapy sessions (2/month)",
        "Access to exclusive members-only events",
      ],
    },
  ];
  return (
    <div className="m-12">
      <h2 className="text-4xl text-center ">Bast Prices in the town</h2>
      <div className="grid md:grid-cols-3  gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
