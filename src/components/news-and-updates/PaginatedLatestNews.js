import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { StaticImage } from "gatsby-plugin-image";
import icon from "../../assets/paginator/arrow-right.svg";

import LatestNews from "./LatestNews";

function PaginatedLatestNews({ latestNewsTitle, latestNewsData }) {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const latestNews = latestNewsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(latestNewsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % latestNewsData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <LatestNews latestNewsTitle={latestNewsTitle} latestNews={latestNews} />
      <div className="flex justify-center">
        {latestNewsData.length > itemsPerPage && (
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <StaticImage
                className="ml-4 cursor-pointer"
                src="../../assets/paginator/arrow-right.svg"
                alt="next arrow"
              />
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <StaticImage
                className="mr-4 cursor-pointer"
                src="../../assets/paginator/arrow-left.svg"
                alt="previous arrow"
              />
            }
            renderOnZeroPageCount={null}
            className="flex gap-x-5 items-center pb-12"
            pageClassName="font-bold text-gold cursor-pointer"
            activeClassName="text-dark-gold"
          />
        )}
      </div>
    </>
  );
}

// const LatestNews = ({ latestNewsTitle, latestNewsData }) => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto px-7 md:px-12 lg:px-[100px] pt-3 pb-12">
//       <h4 className="mb-10">{latestNewsTitle}</h4>
//       <div>
//         {latestNewsData.map((item, index) => (
//           <div key={index} className="shadow sm:flex p-4 mb-6 rounded-[10px] border-[5px] border-gold">
//             <h5 className="block sm:hidden mb-4 text-center">{item.title}</h5>
//             <GatsbyImage
//               objectFit="contain"
//               image={item.image.gatsbyImageData}
//               alt={item.image.title}
//               className="flex-shrink-0 block h-fit mx-auto sm:mr-10 mb-3 sm:mb-0"
//             />
//             <div>
//               <h5 className="hidden sm:block mb-2">{item.title}</h5>
//               <p className="mb-2">{item.description.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default PaginatedLatestNews;
