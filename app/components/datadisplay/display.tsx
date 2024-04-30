
import { PieChart } from '@mui/x-charts/PieChart';
import getWaitlist from '@/app/actions/getWaitlist';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { WaitlistMember } from '@prisma/client';

export default function Display() {
    
    const [waitlist, setWaitlist] = useState<WaitlistMember[]>([])
    const [data, setData] = useState([
        { id: 0, value: 1, label: 'Word of Mouth' },
        { id: 1, value: 1, label: 'Social Media' },
        { id: 2, value: 1, label: 'Advertisement' },
        { id: 3, value: 1, label: 'Newsletter' },
        { id: 4, value: 1, label: 'Podcast' },
        { id: 5, value: 1, label: 'Event or Conference' },
        { id: 6, value: 1, label: 'Other' },    
    ])

    useEffect(() => {
        fetch('/api/getWaitlist', {method: 'GET'})
        .then((res) =>
            res.json()
        ).then((res) => {
            const newWaitlist: WaitlistMember[] = res.waitlist;
            setWaitlist(newWaitlist);
            let leadMap: any = {
                'wordOfMouth': 0,
                'socialMedia': 0,
                'advertisement': 0,
                'newsletter': 0,
                'podcast': 0,
                'eventOrConference': 0,
                'other': 0
            }
            for (let i = 0 ; i<newWaitlist.length ; i++) {

                leadMap[newWaitlist[i].leads]++;
                
            }
            const newData = [
                { id: 0, value: leadMap['wordOfMouth'], label: 'Word of Mouth' },
                { id: 1, value: leadMap['socialMedia'], label: 'Social Media' },
                { id: 2, value: leadMap['advertisement'], label: 'Advertisement' },
                { id: 3, value: leadMap['newsletter'], label: 'Newsletter' },
                { id: 4, value: leadMap['podcast'], label: 'Podcast' },
                { id: 5, value: leadMap['eventOrConference'], label: 'Event or Conference' },
                { id: 6, value: leadMap['other'], label: 'Other' },
            ];
            setData(newData);
        }
        )
    }, [])

   

    const columns: GridColDef<(typeof waitlist)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'email',
          headerName: 'Email',
          width: 250,
          editable: true,
        },
        {
            field: 'leads',
            headerName: 'Lead',
            width: 250,
            editable: false
        }
      ];
    
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
        <div style={{
            marginTop: 100
        }}>
        <DataGrid
            columns={columns}
            rows={waitlist}
            initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 100,
                  },
                },
              }}
              pageSizeOptions={[20, 100]}
        />
        </div>
        </>
    );
}