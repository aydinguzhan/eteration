import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Loading from './components/Loading';
import { ProductList } from './services/productList.service';
import InfiniteScroll from "react-infinite-scroll-component";

import './App.css'

function App() {
  const toastRef = useRef()
  const service = new ProductList(toastRef);
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [pagenation, setPagenation] = useState({
    page: 1,
    limit: 6,


  })
  const [productData, setProductData] = useState({
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
  const veriGetir = async (page, limit) => {
    setLoading(true)

    await service.getAllProductList(page, limit, (data) => {
      setProductData({ ...productData, allProducts: data })
      setLoading(false)

    })
  }
  useEffect(() => {

    veriGetir(pagenation.page, pagenation.limit)
  }, [pagenation.limit])

  const nextData = () => {
    setPagenation({
      ...pagenation,
      page: pagenation.page,
      limit: pagenation.limit + 3

    })
  }

  return (
    <div>
      <Navbar items={items} productData={productData} setProductData={setProductData} />
      <Loading loading={false}>
        <InfiniteScroll
          dataLength={productData.allProducts.length}
          next={nextData}
          hasMore={!loading}
          loader={<Loading loading={true} />}
        >
          <div className='grid col-12 '>

            {productData?.allProducts.map((p, index) => (
              <div className='col-6 md:col-4 xl:col-3' key={index}>  <ProductCard key={p.id} data={p} loader={false} onClick={() => console.log(p.id)} /></div>
            ))}
          </div>
        </InfiniteScroll>
      </Loading>





    </div>
  )
}

export default App
