import { useLocation } from "react-router-dom";

const OfferPage = () => {
    const location = useLocation();
    const { priceGenerated } = location.state

  return (
    <div>
      <h1>Offer: ${priceGenerated}</h1>
    </div>
  );
}

export default OfferPage;