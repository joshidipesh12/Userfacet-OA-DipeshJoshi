import dayjs from "dayjs";
import _ from "lodash";
import config from "../../public/availability.json";
import consts from "../../public/constants.json";

export default function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body) return ResponseError(res, 400, "Invalid Data Recieved");
    const body = JSON.parse(req.body);
    const weekday = body.weekday?.toLowerCase();
    console.log(weekday);
    const dayCheck = Object.keys(config.availability).includes(weekday);
    if (dayCheck) {
      // checking multiple slot existance
      const { start_time, end_time } = body;
      const hasStart = config.availability.monday.reduce(
        (result, slot) => result || slot.start_time === start_time,
        false
      );
      const hasEnd = config.availability.monday.reduce(
        (result, slot) => result || slot.end_time === end_time,
        false
      );

      if (hasStart && hasEnd) {
        let payload = _.cloneDeep(consts.default_payload);
        payload.weekday = body.weekday;
        payload.start_time = start_time;
        payload.end_time = end_time;

        // calculating date on next weekday
        for (let i = 0; i < 7; i++) {
          if (consts.dayMap[dayjs().add(i, "days").day()] === weekday) {
            payload.date = dayjs().add(i, "days").format("d MMMM YYYY");
          }
        }
        console.log(`[LOG] New Slot Booked for ${body.full_name}`);
        return ResponseSuccess(res, 200, payload);
      }
    }
    return ResponseError(res);
  }
  return ResponseError(res, 405, "Method Not Allowed.");
}

// error response generator
const ResponseError = (res, code, message) => {
  return res.status(code ?? 400).json({
    slot_confirmed: "false",
    reason: message ?? "teacher is not available on this day",
  });
};

// success response generator
const ResponseSuccess = (res, code, payload) => {
  return res.status(code ?? 200).json({
    slot_confirmed: "true",
    ...payload,
  });
};
