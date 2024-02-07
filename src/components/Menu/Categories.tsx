const Categories = () => {
  const categories = [
    "New daily Specials",
    "Salads",
    "How Power Bowls",
    "Gym Food",
    "Bundles",
    "Rainbow Wraps",
    "Vegan Menu",
    "Snacks & Sides",
    "Yoghurt & fruit",
    "Cold Drinks",
    "Smoothies, shakes & juice",
  ];
  return (
    <div className="flex py-6 gap-4 border-y-[1px] border-gray-200 px-[3%]">
      {categories.map((category, index) => {
        if (index === 0)
          return (
            <span className="cursor-pointer bg-[#00ccbc] rounded-full px-4 py-0.5 text-sm font-bold text-white">
              {category}
            </span>
          );
        return (
          <span
            key={index}
            className="cursor-pointer px-4 py-0.5 text-sm text-[#00ccbc] hover:opacity-80"
          >
            {category}
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
