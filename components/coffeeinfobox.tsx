import Coffee from "../interfaces/coffee";

const CoffeeInfoBox = (coffee: Coffee) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-raspberry text-2xl pb-2 p-2">
        Základní info o kafi
      </div>
      <div className="border-raspberry border-dashed border-2 p-2 rounded-lg">
        <div className="flex flex-row place-items-baseline">
          <div className="pr-2 text-chocolate font-semibold uppercase">
            Pražírna
          </div>
          <div className="text-2xl text-raspberry">{coffee.roastery}</div>
        </div>
        <div className="flex flex-row place-items-baseline">
          <div className="pr-2 text-chocolate font-semibold uppercase">
            Kafe
          </div>
          <div className="text-lg text-raspberry">{coffee.name}</div>
        </div>
        <div className="flex flex-row place-items-baseline">
          <div className="pr-2 text-chocolate font-semibold uppercase">
            Země původu
          </div>
          <div className="text-lg text-raspberry">{coffee.country}</div>
        </div>
        <div className="flex flex-row place-items-baseline">
          <div className="pr-2 text-chocolate font-semibold uppercase">
            Zpracování
          </div>
          <div className="text-lg text-raspberry">
            {coffee.processingMethod}
          </div>
        </div>
        <div className="flex flex-row place-items-baseline">
          <div className="pr-2 text-chocolate font-semibold uppercase">
            Stupeň pražení
          </div>
          <div className="text-lg text-raspberry">{coffee.roastedDegree}</div>
        </div>
        <div className="flex flex-row place-items-baseline">
          <div className="pr-2 text-chocolate font-semibold uppercase">
            Jak jsem kafe uvařil
          </div>
          <div className="text-lg text-raspberry">{coffee.preparedMethod}</div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeInfoBox;
