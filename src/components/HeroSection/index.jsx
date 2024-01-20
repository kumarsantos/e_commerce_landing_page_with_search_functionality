import React from "react";
import useGetProducts from "../../hooks/useGetProducts";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const allProduct = useGetProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 md:py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Feature products
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allProduct?.map(({ productCategory }) => (
            <div
              className="group relative"
              key={productCategory.productCategoryId}
            >
              <div className=" w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={productCategory?.productCategoryImage}
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${productCategory.productCategoryId}`}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {productCategory?.productCategoryName}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {productCategory.retail ? "Retail" : "Wholesale"}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${Math.ceil(Math.random() * 1000)}
                </p>
              </div>
            </div>
          ))}
          {!allProduct.length && <div>No Products Founds</div>}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
