import { back } from ".";

/**
 * 특정 날짜의 키 정보 조회
 * @param date
 * @returns
 */
export const getKeyInfo = async (date: String) => {
  const res = await back.get(`/key?date=${date}`);
  return res.data;
};

/**
 * 특정 날짜의 키 정보 등록
 * @param date
 * @param keyStudent
 * @param subManager
 * @param startTime
 * @param endTime
 * @param amendDate
 * @param isHoliday
 * @returns
 */
export const postKeyInfo = async (
  date: String,
  keyStudent: String,
  subManager: String,
  startTime: String,
  endTime: String,
  amendStudentNumber: String,
  isHoliday: boolean
) => {
  const res = await back.post("/key", {
    date,
    keyStudent,
    subManager,
    startTime,
    endTime,
    amendStudentNumber,
    isHoliday,
  });
  return res.data;
};
