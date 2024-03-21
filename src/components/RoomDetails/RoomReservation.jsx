// import { formatDistance } from "date-fns";
import Button from "../Button/Button";
// import Calender from "./Calender";

const RoomReservation = ({ room }) => {
  //   const { to, from, price } = room;

  // ===========price calculation=============

  // total days * price

  //   const totalDays = parseInt(
  //     formatDistance(new Date(to), new Date(from).split(" ")[0])
  //   );
  //   const totalPrice = totalDays * price;

  //   console.log(totalPrice);
  // ========================
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      {/* price */}
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />

      {/* calender */}
      <div className="flex justify-center">{/* <Calender /> */}</div>

      {/* button */}
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>

      <hr />

      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${room?.price}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
