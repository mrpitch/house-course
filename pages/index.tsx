import { useQuery, gql } from "@apollo/client";
import { useDebounce } from "use-debounce";
import Layout from "src/components/layout";
import Map from "src/components/map";
import HouseList from "src/components/houseList";
import { MapProvider } from "src/components/mapContext";
import { useLastData } from "src/utils/useLastData";
import { useLocalState } from "src/utils/useLocalState";
import { NoUndefinedVariablesRule } from "graphql";
import { HousesQuery, HousesQueryVariables } from "src/generated/HousesQuery";

const HOUSE_QUERY = gql`
  query HousesQuery($bounds: BoundsInput!) {
    houses(bounds: $bounds) {
      id
      latitude
      longitude
      address
      publicId
      bedrooms
    }
  }
`;

type BoundsArray = [[number, number], [number, number]];

const parseBounds = (boundsString: string) => {
  if (!boundsString) return null;

  const bounds = JSON.parse(boundsString) as BoundsArray;
  return {
    sw: {
      latitude: bounds[0][1],
      longitude: bounds[0][0],
    },
    ne: {
      latitude: bounds[1][1],
      longitude: bounds[1][0],
    },
  };
};

export default function Home() {
  const [dataBounce, setDataBounce] = useLocalState<string>(
    "bounds",
    "[[0,0],[0,0]]"
  );

  const [debouncedDataBounce] = useDebounce(dataBounce, 200);

  const { data, error } = useQuery<HousesQuery, HousesQueryVariables>(
    HOUSE_QUERY,
    {
      variables: { bounds: parseBounds(debouncedDataBounce) },
    }
  );

  const lastData = useLastData(data);
  if (error) return <Layout main={<div>Error loading Houses</div>} />;

  return (
    <Layout
      main={
        <MapProvider>
          <div className="flex">
            <div
              className="w-1/2 pb-4"
              style={{ maxHeight: "calc(100vh - 64px)", overflowX: "scroll" }}
            >
              <HouseList houses={lastData ? lastData.houses : []} />
            </div>
            <div className="w-1/2">
              <Map
                setDataBounds={setDataBounce}
                houses={lastData ? lastData.houses : []}
              />
            </div>
          </div>
        </MapProvider>
      }
    />
  );
}
