import ReactOnRails from 'react-on-rails';

// Chart Module
import TotalChart from '../bundles/Charts/components/Total';
import SalesChart from '../bundles/Charts/components/Sales';

// Form Module
import FormCreator from '../bundles/Forms/components/FormCreator';

// Payment Module
import PaymentContainer from '../bundles/Payments/components/PaymentContainer';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  TotalChart,
  SalesChart,
  FormCreator,
  PaymentContainer
});
