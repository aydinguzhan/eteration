/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { pages } from '../utils/pages';
import { useSelector } from 'react-redux';
import { InputNumber } from 'primereact/inputnumber';
import { Util } from '../utils/utils';
// eslint-disable-next-line react/prop-types
export default function Navbar({ items, productData, setProductData, page, setPage }) {
    const menu = useRef(null);
    const sepet = useRef(null);
    const store = useSelector((state) => state.badgeSlice)
    const util = new Util(null)
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


    const dataCount = store.data.reduce((acc, product) => {
        if (acc[product.name]) {
            acc[product.name] += 1
        } else {
            acc[product.name] = 1;
        }
        return acc;
    }, {});

    let sepetItem = Object.entries(dataCount).map((i) => {
        return {
            label: <span onClick={() => setPage(pages.badget)}>{i[0]}</span>,
            icon: <Badge className='mx-1' value={i[1]} severity="primery" />

        }
    })

    const end = (
        <div className="flex align-items-center gap-2">
            <div className="card flex justify-content-center">
                <TieredMenu model={item} popup ref={menu} breakpoint="767px" />
                {page === pages.main && < Button label="Filtre" onClick={(e) => menu.current.toggle(e)} severity='secondary' />}
            </div>
            <div className="card flex justify-content-center">
                <TieredMenu model={sepetItem} popup ref={sepet} breakpoint="767px" />

            </div>
            {page === pages.badget && <span className=''>
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">$</span>
                    <InputNumber placeholder="Price" value={util.paymendCalculator(store.data)} disabled />
                    <span className="p-inputgroup-addon">.00</span>
                </div>
            </span>
            }

            <Button type="button" label="Sepetim" icon="pi pi-shop" severity="secondary" onClick={(e) => store.data.length > 0 && sepet.current.toggle(e)}>
                <Badge value={store.data.length} severity="primery"></Badge>
            </Button>
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} end={end} />
        </div>
    )
}
