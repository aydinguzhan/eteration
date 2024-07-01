import { Suspense, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Loading from './components/Loading';
import { ProductList } from './services/productList.service';
import './App.css'

function App() {
  const toastRef = useRef()
  const service = new ProductList(toastRef);
  const [pagenation, setPagenation] = useState({
    page: 1,
    limit: 10
  })
  const [productData, setProductData] = useState({
    loading: false,
    allProducts: [],
    selectProduct: {}
  })

  const items = [
    {
      label: 'Anasayfa',
      icon: 'pi pi-home',
      command: () => console.log("a")
    },
    {
      label: 'Sepetim',
      icon: 'pi pi-shopping-bag'
    },
    {
      label: 'Profilim',
      icon: 'pi pi-user',

    },

  ];
  const veriGetir = async (page = pagenation.page, limit = pagenation.limit) => {
    setProductData({ ...productData, loading: true })
    await service.getAllProductList(page, limit, (data) => {
      setProductData({ ...productData, allProducts: data, loading: false })
    })
  }
  useEffect(() => {
    veriGetir()
  }, [pagenation.limit, pagenation.page])
  if (!productData.allProducts) {
    return <Loading />;
  }
  return (
    <>
      <Navbar items={items} />
      <Loading loading={productData.loading}>
        {productData.allProducts.map((p) => (
          <ProductCard key={p.id} imgUrl={p.image} loader={false} onClick={() => console.log(p.id)} />
        ))}
      </Loading>





    </>
  )
}

export default App
