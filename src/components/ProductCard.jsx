/* eslint-disable react/prop-types */
import moment from 'moment';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, addProductId } from '../redux/reducers/badgeSlice'
import { Util } from '../utils/utils';
import { pages } from '../utils/pages';
// eslint-disable-next-line react/prop-types
function ProductCard({ data, loader = false, setPage }) {
    const dispatch = useDispatch();
    const toastRef = useRef()
    const [value, setValue] = useState(data?.rating);
    const [count, setCount] = useState(0);
    const util = new Util(toastRef)
    const addCart = (data) => {
        setCount(count + 1);
        dispatch(addItem(data));
    }


    const addId = (data) => {
        dispatch(addProductId(data.id))

    }
    return (
        <div className='flex flex-column border-2 border-200 border-round  gap-1 shadow-6 hover:shadow-8  '>
            <div className='flex cursor-pointer' onClick={() => {
                setPage(pages.detail)
                addId(data.id)
            }
            }>
                <img className='border-round' width={"100%"} alt="Card" src={data?.image} />
            </div>
            <div className='col-12 flex justify-content-between align-items-center	'>
                <span className={`text-xl font-semibold ml-3  text-primary`}>{util.moneyFormatter(data?.price)}</span>
                <span className='text-xs text-400'>{moment(data?.createdAt).format("DD/MM/YYYY")}</span>

            </div>
            <p className="px-1 text-center text-xl">
                {data?.name}

            </p>
            <div className='flex mb-3'><Rating className='m-auto' value={value} onChange={(e) => setValue(e.value)} cancel={false} readOnly />
            </div>
            <div className='flex justify-content-center gap-2	my-4'>
                <Button label="Ekle" icon="pi pi-cart-plus" badge={count} loading={loader} onClick={() => addCart(data)} rounded />
                {/* <Button severity="danger" label="Çıkar" icon="pi pi-cart-minus" loading={loader} onClick={minusCart} rounded /> */}
            </div>
        </div>
    )
}

export default ProductCard
