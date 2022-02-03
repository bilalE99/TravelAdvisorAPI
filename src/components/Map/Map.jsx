import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Papr, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';


const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = { lat: 0, lng: 0 };

    return (
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD5NodBRt-ikcLvSImUsgr0njZ0vbeKFrU' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
        >

        </GoogleMapReact>
    );

}

export default Map;