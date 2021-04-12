import { Popover } from "antd";
import CountryEditInfo from "Components/CountryEditModal";
import MapPopoverContent from "Components/MapTooltip";
import { memo, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const WorldMap = () => {
  const [currentInfo, setCurrentInfo] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, index) => (
                <Popover
                  key={index}
                  //   visible={geo.properties.NAME === showPopover}
                  content={
                    <MapPopoverContent
                      country={geo.properties.NAME}
                      population={geo.properties.POP_EST}
                    />
                  }>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      setCurrentInfo({
                        country: geo.properties.NAME,
                        population: geo.properties.POP_EST,
                      });
                      toggleModal();
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                </Popover>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {showModal && (
        <CountryEditInfo
          {...currentInfo}
          visible={showModal}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default memo(WorldMap);
