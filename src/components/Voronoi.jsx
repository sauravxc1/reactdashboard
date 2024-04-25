import React from 'react';
import { ResponsiveVoronoi } from '@nivo/voronoi';
import { useTheme } from "@mui/material";

const generateMockData = (numPoints) => {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
        data.push({
            id: `point-${i}`,
            x: Math.random() * 100,
            y: Math.random() * 100
        });
    }
    return data;
}

const Voronoi = () => {
    const theme = useTheme();
    const colors = theme.palette;
    const data = generateMockData(50);

    const headerFooterHeight = 100; 

    return (
        <div style={{ height: `calc(100vh - ${headerFooterHeight}px)`, width: '100%' }}>
            <ResponsiveVoronoi
                data={data}
                xDomain={[0, 100]}
                yDomain={[0, 100]}
                enableLinks={true}
                linkLineColor={colors.grey[100]}
                cellLineColor={colors.secondary.main}
                pointColor={colors.primary.main}
                margin={{ top: 1, right: 1, bottom: 1, left: 1 }}
            />
        </div>
    );
}

export default Voronoi;
