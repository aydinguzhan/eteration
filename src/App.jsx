import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { Util } from './utils/utils';
import { ProductListService } from './services/productList.service';
import { pages } from './utils/pages';
import Detail from './screens/Detail';
import List from './screens/List';
import './App.css'
import Badget from './screens/Badget';
import { useDispatch } from 'react-redux';
import { addLocalStoge } from './redux/reducers/badgeSlice'


function App() {
  const toastRef = useRef()
  const service = new ProductListService(toastRef);
  const dispatch = useDispatch();
  const util = new Util(toastRef)
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(pages.main)
  const [pagenation, setPagenation] = useState({
    page: 1,
    limit: 6,

  })
  const [productData, setProductData] = useState({
    allProducts: [],
    selectProduct: {}
  })


  const veriGetir = async (page, limit) => {

    await service.getAllProductList(page, limit, (data) => {
      setProductData({ ...productData, allProducts: data })
      setLoading(false)
    })
  }
  useEffect(() => {
    setLoading(true)
    veriGetir(pagenation.page, pagenation.limit)
    dispatch(addLocalStoge());

  }, [pagenation.limit])



  return (
    <div>
      <Navbar items={util.navbarItemsCreated(pages, setPage)} productData={productData} setProductData={setProductData} page={page} setPage={setPage} />
      <Loading loading={false}>
        {page === pages.main && (
          <>

            <List loading={loading} pagenation={pagenation} setPagenation={setPagenation} productData={productData} setPage={setPage} />
          </>
        )}
        {page === pages.detail && (
          <>
            <Detail />
          </>
        )}

        {page === pages.badget && <Badget />}

      </Loading>





    </div>
  )
}

export default App
