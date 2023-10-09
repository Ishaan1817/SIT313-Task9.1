import '../Header.css';
import Header from '../Header'
import CardList from '../CardList';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function HomePage() {


    const [searchterm, setsearchterm] = useState('')
    function handlechange(e) {
        setsearchterm(e.target.value)

    }
    return (<div>
        <Outlet />
        <div className='header'>
            <Header
                text=' Staff List' />

            <input
                onChange={handlechange}
                type='text'
                placeholder='Search staff'
            />
        </div>

        <CardList
            searchstaff={searchterm}
        />

        
    </div>

    );

}
export default HomePage