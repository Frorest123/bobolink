
import { PieChart } from '@mui/x-charts/PieChart';
import getWaitlist from '@/app/actions/getWaitlist';
import { useEffect, useState } from 'react';

const data = [
    { id: 0, value: 10, label: 'Word of Mouth' },
    { id: 1, value: 15, label: 'Social Media' },
    { id: 2, value: 20, label: 'Advertisements' },
    { id: 3, value: 20, label: 'Newsletter' },
    { id: 4, value: 20, label: 'Podcast' },
    { id: 5, value: 20, label: 'Event or Conference' },
    { id: 6, value: 20, label: 'Other' },
]

export default function Display() {

    const [waitlist, setWaitlist] = useState([])
    useEffect(() => {
        fetch('/api/getWaitlist', {method: 'GET'})
        .then((res) =>
            res.json()
        ).then((res) => {
            console.log(res)
            setWaitlist(res.waitlist)
            }
        )
    }, [])
    
    return(
        <>
        <PieChart
            colors={["#23171b","#3987f9","#2ee5ae","#95fb51","#feb927","#e54813","#900c00"]}
            series={[
            {
                
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            innerRadius: 9,
            outerRadius: 145,
            paddingAngle: 1,
            cornerRadius: 9,
            startAngle: -180,
            endAngle: 180,
            cx: 150,
            cy: 150,
            },
        ]}
        width={550}
        height={300}

        
        />
        </>
    )
}