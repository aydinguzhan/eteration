/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
// eslint-disable-next-line react/prop-types
export default function Navbar({ items, productData, setProductData }) {
    const menu = useRef(null);
    const item = [
        {
            label: 'Ucuzdan Pahalıya',
            icon: 'pi pi-sort-amount-up',
            command: () => {
                let copyData = [...productData?.allProducts]
                copyData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                setProductData({ ...productData, allProducts: copyData })
            }

        },
        {
            label: 'Pahalıdan Ucuza',
            icon: 'pi pi-sort-amount-down',
            command: () => {
                let copyData = [...productData?.allProducts]
                copyData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                setProductData({ ...productData, allProducts: copyData })
            }

        },
        {
            label: 'Eskiden Yeniye',
            icon: 'pi pi-calendar',
            command: () => {
                let copyData = [...productData?.allProducts]
                copyData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                setProductData({ ...productData, allProducts: copyData })
            }
        },


    ];
    const start = <p className='flex gap-1'>Eteration</p>;
    const end = (
        <div className="flex align-items-center gap-2">
            <div className="card flex justify-content-center">
                <TieredMenu model={item} popup ref={menu} breakpoint="767px" />
                <Button label="Filtre" onClick={(e) => menu.current.toggle(e)} severity='secondary' />
            </div>
            <InputText placeholder="Ara..." type="text" className="w-8rem sm:w-auto" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
