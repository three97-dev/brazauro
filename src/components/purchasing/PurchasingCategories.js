import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { GatsbyImage } from "gatsby-plugin-image";
import "./PurchasingCategories.css";

const PurchasingCategories = ({ purchasingCategoriesData }) => {
  return (
    <div className="w-full h-full max-w-[1440px] mx-auto px-7 md:px-12 lg:px-[100px] pb-12">
      <Tabs selectedTabClassName="bg-gold lg:rounded-t-[10px]">
        <TabList className="tab-list">
          {purchasingCategoriesData.map((category) => (
            <Tab className="text-dark-gold py-3 px-6 cursor-pointer">
              <button>
                <h5>{category.categoryName}</h5>
              </button>
            </Tab>
          ))}
        </TabList>
        <hr className="bg-dark-gold mb-12" />

        {purchasingCategoriesData.map((category, index) => {
          return (
            <TabPanel key={index} className="grid xl:grid-cols-2 gap-x-10 gap-y-6">
              {category?.itemsProcured?.map((item, index) => (
                <div key={index} className="shadow sm:flex p-4 rounded-[10px] border-[5px] border-gold">
                  <h5 className="block sm:hidden mb-4 text-center">{item.itemName}</h5>
                  <GatsbyImage
                    objectFit="contain"
                    image={item.itemImage.gatsbyImageData}
                    alt={item.itemImage.title}
                    className="flex-shrink-0 block h-fit mx-auto sm:mr-10 mb-3 sm:mb-0"
                  />
                  <div>
                    <h5 className="hidden sm:block mb-2">{item.itemName}</h5>
                    <p className="mb-2">{item.description.description}</p>
                    <p className="font-bold text-gray-gold underline">$ {item.price}</p>
                  </div>
                </div>
              ))}
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

export default PurchasingCategories;
