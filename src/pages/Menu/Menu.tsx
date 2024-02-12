import { useSelector } from "react-redux";
import Heading from "../../components/Menu/Heading";
import MenuPanel from "../../components/Menu/MenuPanel";
import { RootState } from "../../state";
import { createRef, useMemo } from "react";

const Menu = () => {
  const categories = useSelector((state: RootState) => state.menu.categories);

  const mappedCategories = useMemo(() => {
    return categories.map((category) => {
      return {
        ...category,
        sectionRef: createRef<HTMLDivElement>(),
      };
    });
  }, [categories]);

  return (
    <div className="font-plex_sans">
      <Heading categories={mappedCategories} />
      <MenuPanel categories={mappedCategories} />
    </div>
  );
};

export default Menu;
