import Merchant from "./merchant";
import PrepaidCards from "./preparidcards";
import Wallet from "./wallet";

function Pages() {
  return (
    <div>
      <Merchant />
      <Wallet />
      <PrepaidCards />
    </div>
  );
}
export default Pages;
