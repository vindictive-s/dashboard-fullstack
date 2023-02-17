import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();

  return (
    <Box m="1.5rem 2rem">
      <Header title="GEOGRAPHY" subtitle="Find Where Your Users are Located" />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
        sx={{ background: `${theme.palette.primary[2000]}` }}
      >
        {data ? (
          <ResponsiveChoropleth
            itemWidth="100%"
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary[500],
                },
              },
            }}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".1s"
            projectionScale={130}
            projectionTranslation={[0.5, 0.6]}
            projectionRotation={[-10, 0, 0]}
            borderWidth={1.5}
            borderColor={`${theme.palette.secondary[300]}`}
            legends={[
              {
                itemBackground: theme.palette.primary[100],
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 0,
                translateY: -50,
                itemsSpacing: 4,
                itemWidth: 74,
                itemHeight: 24,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary[900],
                itemOpacity: 0.8,
                symbolSize: 24,
                border: "5px solid black",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.secondary[900],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            colors="PuOr"
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default Geography;
