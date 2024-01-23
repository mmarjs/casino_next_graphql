import React, {useEffect, useState} from 'react';
import FeaturedSlotCard from "@/components/FeaturedSlots/FeaturedSlotCard";
import {formatFeaturedSlotsArray} from "@/formatter/FeaturedSlots";

export const FeaturedSlotList = ({slots}) => {
    const [slotsData, setSlotsData] = useState(null);
    useEffect(() => {
        setSlotsData(formatFeaturedSlotsArray(slots));
    }, [slots]);
    return (slotsData || [])
        .map((slot, ix)=> <FeaturedSlotCard key={`featuredSlot${ix}`} slot={slot}/>)
}