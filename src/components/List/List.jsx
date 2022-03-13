import {React, useState} from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@material-ui/core"
import useStyles from './style'
import { Rating } from "@material-ui/lab";
import PlaceDetails from "../PlaceDetails/PlaceDetails"

const List =()=>{

    const classes = useStyles();
    const [type, setType] = useState('resturents')
    const [rating, setRating] = useState('')
    const places = [
        {name : 'The Best Hotel'},
        {name : 'The Best par'},
        {name : 'The Best Beer'}
    ]
    return(
        <div className={classes.container}>
            <Typography variant="h4">Resturent, Hotel ande Attraction around you </Typography>

            <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select  type={type} onClick={(e)=>{setType(e.target.value)}} >
                <MenuItem value="resturents">Resturents</MenuItem>
                <MenuItem value="hotel">Hotel</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
            <InputLabel>Ratings</InputLabel>
            <Select  type={rating} onClick={(e)=>{setRating(e.target.value)}} >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="3">Avobe 3.0</MenuItem>
                <MenuItem value="4">Avobe 4.0</MenuItem>
                <MenuItem value="4.5">Avobe 4.5</MenuItem>
            </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i)=>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default List