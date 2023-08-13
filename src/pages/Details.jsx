import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { selectDetails } from '../store/details/details-selector';
import {
    clearDetails,
    loadCountryByName,
} from '../store/details/details-action';

export const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { country, status, error } = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));

        return () => {
            dispatch(clearDetails());
        };
    }, [name, dispatch]);

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>

            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {country && <Info push={navigate} {...country} />}
        </div>
    );
};
