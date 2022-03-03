import React from "react";

import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import {LocationOutlinedIcon} from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './style'
const Map = () =>{

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');
    const coordinates = { lat: 0 , lng : 0}

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBwxrJoQpx1vpRn51e9Yl0eVZIYdFDwu5I' }}
                defaultCenter={coordinates}
                center={coordinates} 
                defaultZoom={10}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}>
            </GoogleMapReact>
        </div>
    )
}

export default Map