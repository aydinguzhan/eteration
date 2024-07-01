import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

// eslint-disable-next-line react/prop-types
export default function Navbar({ items }) {

    const start = <p className='flex gap-1'>Eteration</p>;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Ara..." type="text" className="w-8rem sm:w-auto" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
