import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classArray = [];
  const classRoom1 = ClassRoom(19);
  const classRoom2 = ClassRoom(20);
  const classRoom3 = ClassRoom(34);

  return classArray.push(classRoom1, classRoom2, classRoom3);
}
