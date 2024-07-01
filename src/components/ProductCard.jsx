import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// eslint-disable-next-line react/prop-types
function ProductCard({ imgUrl, loader = false, onClick = null }) {
    const header = (
        <div className='flex border border-10'>
            <img width={"80px"} height={"60"} className="m1" alt="Card" src={imgUrl} />
        </div>
    );
    const footer = (
        <div className=''>
            <Button label="Save" icon="pi pi-check" loading={loader} onClick={onClick} />
        </div>
    );
    return (
        <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
        </Card>
    )
}

export default ProductCard
