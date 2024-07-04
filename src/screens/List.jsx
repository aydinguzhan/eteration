/* eslint-disable react/prop-types */
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

function List({ productData, loading, pagenation, setPagenation, setPage }) {
    const nextData = () => {
        setPagenation({
            ...pagenation,
            page: pagenation.page,
            limit: pagenation.limit + 3

        })
    }
    return (
        <InfiniteScroll
            dataLength={productData.allProducts.length}
            next={nextData}
            hasMore={!loading}
            loader={<Loading loading={true} />}
        >
            <div className='grid col-12 '>

                {productData?.allProducts.map((p, index) => (
                    <div className='col-6 md:col-4 xl:col-3' key={index}>  <ProductCard key={p.id} data={p} loader={false} setPage={setPage} /></div>
                ))}
            </div>
        </InfiniteScroll>
    )
}

export default List
