import React from 'react';
import Grid from '@mui/material/Grid';
import CasinoCard from './CasinoCard';
import { getObjectFromArrayByKeyValue } from '@/src/helpers'



export default function CasinoGrid(props) {
    
    const { data } = props;

    return (
        <Grid item xs={12}>
            <Grid container>
                {data.map((item)=>{
                    return <Grid key={`casino-grid-item-${item.id}`} item xs={12} sm={6} md={4} xl={3}>
                        <CasinoCard 
                            logoProps={{...item.logo}}
                            title={item.title}
                            welcomeBonus={getObjectFromArrayByKeyValue(item.bonuses,"type","welcome")}
                            rating={4}
                            freeSpins={item.total_free_spins}
                            slug={item.slug}
                        />
                    </Grid>
                })}
            </Grid>
        </Grid>
    );
}
