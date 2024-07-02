/* eslint-disable react/prop-types */
import moment from 'moment';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function ProductCard({ data, loader = false, onClick = null }) {
    const [value, setValue] = useState(data?.rating);
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <div className='flex flex-column border-2 border-200 border-round  gap-1 shadow-6 ' >
            <div className='flex '>
                <img className='border-round' width={"100%"} alt="Card" src={data?.image} />
            </div>
            <div className='col-12 flex justify-content-between align-items-center	'>
                <span className={`text-xl font-semibold ml-3  text-primary`}>{USDollar.format(data?.price)}</span>
                <span className='text-xs text-400'>{moment(data?.createdAt).format("DD/MM/YYYY")}</span>

            </div>
            <p className="px-1 text-center text-xl">
                {data?.name}

            </p>
            <div className='flex mb-3'><Rating className='m-auto' value={value} onChange={(e) => setValue(e.value)} cancel={false} readOnly />
            </div>
            <div className='flex justify-content-center gap-2	my-4'>
                <Button label="Ekle" icon="pi pi-cart-plus" badge={data.id} loading={loader} onClick={onClick} rounded />
                <Button severity="danger" label="Çıkar" icon="pi pi-cart-minus" loading={loader} onClick={onClick} rounded />
            </div>
        </div>
    )
}

export default ProductCard
