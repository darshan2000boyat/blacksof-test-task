export const DATA = {
    PV: {
      title: "Passenger vehicles",
      desc: "Revving up innovation from interior to exterior.",
      videos: ["pv1.mp4", "pv2.mp4", "pv3.mp4", "pv4.mp4", "pv5.mp4"],
      modules: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
      tabs: [
        "pv1_tab.png",
        "pv2_tab.png",
        "pv3_tab.png",
        "pv4_tab.png",
        "pv5_tab.png",
      ],
    },
    CV: {
      title: "Commercial vehicles",
      desc: "Advancing engineering for heavy-duty vehicles.",
      videos: ["cv1.mp4", "cv2.mp4", "cv3.mp4"],
      modules: ["Complete Body", "Engine", "Cabin"],
      tabs: ["svg/cv1.svg", "svg/cv2.svg", "svg/cv3.svg"],
    },
  } as const;
  
  export type SectionType = keyof typeof DATA;
  