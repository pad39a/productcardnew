import { ProductPageTemplate } from '@/app/components/ProductPageTemplate';
import { inertialTestServicesData } from '@/app/data/inertial-test-services';

export default function App() {
  return <ProductPageTemplate data={inertialTestServicesData} />;
}