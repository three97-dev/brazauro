import React from "react";

import miningServicesLogo from "../../assets/homepage/mining-services.png";

const MainServiceContract = () => {
  return (
    <div className="w-full bg-gray-gold">
      <div className="w-full max-w-[1440px] mx-auto px-10 sm:px-12 lg:px-[100px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] md:items-center gap-x-8 lg:px-16">
          <div className="flex items-center justify-center justify-self-center md:justify-self-start w-64 h-28 p-5 bg-[#D9D9D9] rounded-[20px] shadow-[10px_10px_40px_rgba(0,0,0,0.25)]">
            <img src={miningServicesLogo} alt="Mining Services Logo" className="w-full h-full object-contain" />
          </div>
          <div className="mt-12 md:mt-0 text-white">
            <h4>Contrato Principal de Serviços</h4>
            <ul className="mt-5 ml-6 list-disc max-w-[665px] font-open-sans text-lg leading-6">
              <li>Apoio de um grupo de profissionais técnicos altamente qualificados e experientes.</li>
              <li>Mais de US$ 2 bilhões de despesas de capital entregues dentro do prazo e do orçamento</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServiceContract;
