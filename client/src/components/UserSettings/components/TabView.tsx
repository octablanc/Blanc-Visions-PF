import React from 'react';
import { Box } from '@mui/joy';
import TabPanel from '@mui/lab/TabPanel';
import { Title } from './styled-components/Tabs.styled';

export default function TabView({ value, title, subtitle, content }: { value: Number; title: String; subtitle: String; content: React.ReactElement}){
    return (
        <TabPanel value={`${value}`} sx={{ margin: '0px', padding: '0px', width: '100%', height: '100%'}}>
            <Title style={{ marginBottom: '-30px' }}>{title}</Title>
            <span style={{ paddingLeft: '50px', color: 'grey', fontSize: '17px' }}>{subtitle}</span>
            <Box width='100%' height='81%'>
                {
                    content
                }
            </Box>
        </TabPanel>
    );
}