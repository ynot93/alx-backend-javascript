import ClassRoom from "./0-classroom";

export default function initializeRooms () {
  classArray = [];
  
  classRoom1 = ClassRoom(19);
  classRoom2 = ClassRoom(20);
  classRoom3 = ClassRoom(34);

  return classArray.push(classRoom1, classRoom2, classRoom3);
}
