import { useState, createContext, FunctionComponent } from "react";

interface IMapContext {
  highlightedId: string | null;
  setHighlightedId: (id: string | null) => void;
}

export const MapContext = createContext<IMapContext>({
  highlightedId: null,
  setHighlightedId: () => null,
});

export const MapProvider: FunctionComponent = ({ children }) => {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  return (
    <MapContext.Provider value={{ highlightedId, setHighlightedId }}>
      {children}
    </MapContext.Provider>
  );
};
