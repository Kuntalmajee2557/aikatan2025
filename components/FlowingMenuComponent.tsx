import { FlowingMenu } from "@/components/ui/flowing-menu";
import { div } from "framer-motion/client";


export function FlowingMenuComponent(){
    const demoItems = [
        {
          link: "#",
          text: "Mojave",
          image: "https://picsum.photos/600/400?random=1",
        },
        {
          link: "#",
          text: "Sonoma",
          image: "https://picsum.photos/600/400?random=2",
        },
        {
          link: "#",
          text: "Monterey",
          image: "https://picsum.photos/600/400?random=3",
        },
        {
          link: "#",
          text: "Sequoia",
          image: "https://picsum.photos/600/400?random=4",
        },
      ];
    
    return <FlowingMenu items={demoItems} />
}