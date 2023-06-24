// eslint-disable-next-line import/prefer-default-export
export enum IconType {
  Computer = "Computer",
  Photos = "Photos",
  Calendar = "Calendar",
  About = "About",
  Music = "Music",
  Messages = "Messages",
  Trash = "Trash",
}

export const Applications = [
  {
    id: 0,
    name: "Computer",
    img: "/assets/computer.png",
    type: IconType.Computer,
    position: { x: "10%", y: "10%" },
  },
  {
    id: 1,
    name: "Photos",
    img: "/assets/folder.png",
    type: IconType.Photos,
    position: { x: "30%", y: "45%" },
  },
  {
    id: 2,
    name: "Calendar",
    img: "/assets/calendar.png",
    type: IconType.Calendar,
    position: { x: "20%", y: "25%" },
  },
  {
    id: 3,
    name: "About",
    img: "/assets/doc.png",
    type: IconType.About,
    position: { x: "18%", y: "17%" },
  },
  {
    id: 4,
    name: "Music",
    img: "/assets/soundcloud.png",
    type: IconType.Music,
    position: { x: "45%", y: "50%" },
  },
  {
    id: 5,
    name: "Messages",
    img: "/assets/message.png",
    type: IconType.Messages,
    position: { x: "34%", y: "5%" },
  },
  {
    id: 6,
    name: "Trash",
    img: "/assets/trashcan.png",
    type: IconType.Trash,
    position: { x: "60%", y: "23%" },
  },
];

export enum Themes {
  Default = 0,
}

export type ThemeStyle = {
  id: number;
  primary: string;
  secondary: string;
  background: string;
  gray: string;
  outline: string;
  text: string;
};

export const ThemeStyles = new Map<Themes, ThemeStyle>();

ThemeStyles.set(Themes.Default, {
  id: 0,
  primary: "red.50",
  secondary: "red.100",
  background: "teal.100",
  gray: "gray.50",
  outline: "teal.900",
  text: "gray.100",
});
