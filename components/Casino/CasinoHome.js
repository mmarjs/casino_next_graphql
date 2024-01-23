import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonUi from '@/components/Ui/ButtonUi';
import SectionContainer from '@/components/Ui/SectionContainer';
import CasinoInfoBar from '@/components/Casino/CasinoInfoBar';
import apollo from '@/apollo';
import {GET_CASINOS} from '@/graphql/Casinos';
import {formatCasinosArray} from '@/formatter/Casinos';
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export default function CasinoHome({casinos, casinosPagination, casinosNumber}) {

    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);
    const [casinosList, setCasinosList] = useState([])


    useEffect(() => {
        setCasinosList(formatCasinosArray(casinos))
    }, [casinos])

    useEffect(() => {
        setPageCount(parseInt(casinosPagination.pageCount))
    }, [casinosPagination])


    /*const loadMoreArticles = async () => {

        setLoadingMore(true)
        //GET_CASINOS GRAPHQL 
        const res2 = await apollo.query({
            query: GET_CASINOS,
            //fetchPolicy: 'no-cache',
            variables: {
                pagination: {
                    page: parseInt(page + 1),
                    pageSize: publicRuntimeConfig.casinos_page_size
                }
            }
        })

        if (res2) {
            setPage(res2.data.casinos.meta.pagination.page)
            setCasinosList([...casinosList, ...formatCasinosArray(res2.data.casinos.data)]);
        }
        setLoadingMore(false)
    }*/

    return (
        <SectionContainer enableCardGutter>
            <Grid item xs={12}>
                <div id="casinos">

                    <Grid container>
                        {casinosList.map((item) => {
                            return <Grid key={`CasinoInfoBar-item-${item.id}`} item xs={12} sm={6} md={12}>
                                <CasinoInfoBar
                                    logoProps={{...item.logo}}
                                    title={item.title}
                                    //welcomeBonus={getObjectFromArrayByKeyValue(item.bonuses,"type","welcome")}
                                    bonuses={item.bonuses}
                                    rating={item.average_rating}
                                    freeSpins={item.total_free_spins}
                                    domain={item.web_url}
                                    features={item.features}
                                    id={item.id}
                                    minWager={item.min_wager}
                                    slug={item.slug}
                                    bonus1={item.textbonus1}
                                    value1={item.valuebonus1}
                                    sum1={item.sumbonus1}
                                    value2={item.valuebonus2}
                                    sum2={item.sumbonus2}
                                />
                            </Grid>
                        })}
                    </Grid>
                </div>
            </Grid>
            <Grid mt={4} item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Box display="flex" flexDirection="column" width={220}>
                        <ButtonUi
                            component="a"
                            href="/casinos"
                            title="See More"
                            color="primary"
                            variant="contained"
                            size="medium"
                        />
                    </Box>
                </Box>
            </Grid>
            {/*{page !== pageCount &&
            <Grid mt={4} item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Box display="flex" flexDirection="column" width={220}>
                        <ButtonUi
                            title="See more"
                            color="primary"
                            variant="contained"
                            size="large"
                            handleClick={() => loadMoreArticles()}
                            loading={loadingMore}
                            disabled={loadingMore}
                        />
                    </Box>
                </Box>
            </Grid>}*/}
        </SectionContainer>
    );
}
