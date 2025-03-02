import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";
import styles from "./Masonry.module.css"; // Import CSS Module

// Define the types for Masonry items and props
interface MasonryItem {
  id: number;
  image: string;
  height: number;
}

interface MasonryProps {
  data: MasonryItem[];
}

const Masonry: React.FC<MasonryProps> = ({ data }) => {
  const [columns, setColumns] = useState(2);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Adjust columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1500) setColumns(5);
      else if (window.innerWidth >= 1000) setColumns(4);
      else if (window.innerWidth >= 600) setColumns(3);
      else setColumns(1);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Measure the container width
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute grid positions
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return { ...child, x, y, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  // Animations with react-spring
  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div ref={ref} className={styles.masonry} style={{ height: Math.max(...heights) }}>
      {transitions((style, item) => (
        <a.div key={item.id} style={style}>
          <div
            style={{
              backgroundColor: "#ffffff",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </a.div>
      ))}
    </div>
  );
};

export default Masonry;
