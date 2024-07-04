/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { ProductListService } from '../services/productList.service'
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { Util } from '../utils/utils';

function Detail() {
    const toastRef = useRef();
    const [isLoading, setIsLoadind] = useState(false)
    const [detail, setDetail] = useState({ image: "", name: "", brand: "", model: "" })
    const service = new ProductListService(toastRef);
    const util = new Util(toastRef)
    const store = useSelector((state) => state.badgeSlice)
    useEffect(() => {

        (async () => {
            setIsLoadind(true)
            await service.getDetailProduct(store.productId, (res) => {
                setDetail(res);

                setIsLoadind(false)
            })
        })()
    }, [])



    return (

        <Loading loading={isLoading}>

            <div className='grid col-12 flex'>
                <div className='col-12 md:col-12  md:flex  gap-3 border-1 border-round-sm '>
                    <div className=''>
                        <img src={detail?.image} alt='image' width={'100%'} className='border-round-md' />
                    </div>
                    <div className='col-12 md:col-6'>
                        <p className='text-2xl font-semibold'>{detail?.brand}-{detail?.model} <span className='text-primary-400'>{util.moneyFormatter(detail.price)}</span></p>

                        <p className='text-sm text-600'>{detail?.description}</p>


                    </div>
                </div>
            </div>

        </Loading>

    )
}

export default Detail
