import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import FullPage from "../components/FullPage";
import {toast, ToastContainer} from "react-toastify";
import Loading from "../components/Loading";
import DataService from '../services/DataService'
import SideBar from "../components/SideBar";
import {DataGrid} from '@material-ui/data-grid'
import styles from "../styles/styles";
import LinkTable from "../components/LinkTable";

//sprawdzenie tokena
//odesłanie na /denied jak brak
const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'description', headerName: 'Zawartość', width: 150, sortable: false, description: 'Komentarz dodany do linku' },
    { field: 'category', headerName: 'Kategoria', width: 150, description: 'Jedna z 6 przypisanych kategorii' },
    { field: 'url', headerName: 'Link', width: 500, sortable: false },
    { field: 'date', headerName: 'Data utworzenia', width: 500, sortable: false },
];

const rows = [
    {id: 1, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 2, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 3, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 4, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 5, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 6, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 7, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 8, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 9, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 10, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 11, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 12, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 13, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 16, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 14, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
    {id: 15, description: 'test', category: 'test', url: 'http://localhost:3000', date: '12-12-2020'},
];



const MainView = props => {

    const history = useHistory();
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if(props.tokenLoaded)
        {
            if(props.token) {

                const t = new DataService();
                t.getData(props.token).then(r => console.log(r));
                history.push('/main')
                setDataLoaded(true)
            }
            else
                history.push('/denied')
        }
    }, [props.tokenLoaded])

    useEffect(() => {
        if(props.counter === 0 && props.tokenLoaded)
        {
            props.setCounter(prevState => ++prevState);
            toast.success('Zalogowano pomyślnie!');
        }
    })

    if(!props.tokenLoaded)
        return <Loading backgroundStyle={loadingStyle} />

    return(
        <FullPage contentStyle={cStyle} backgroundStyle={{height: '90vh'}} toastify={<ToastContainer />}>
            {(!dataLoaded) ? <Loading backgroundStyle={{height: '90vh'}} /> :
                    <div style={{...styles.flexCenter, ...cStyle}}>
                        <div style={{height: '70%', width: '80%', marginTop: '2.5%'}}>
                            <LinkTable rows={rows} cols={columns} />
                            {/*<DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>*/}
                        </div>
                        <SideBar />

                    </div>
            }
        </FullPage>
    )
}

const cStyle = {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    flexFlow: 'column'
}

const loadingStyle = {
    position: 'absolute',
    top: 0,
    left: 0
}

export default MainView;