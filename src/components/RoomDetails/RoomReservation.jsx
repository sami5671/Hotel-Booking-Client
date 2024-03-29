import { useState } from "react";
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";
// import Calender from "./Calender";

const RoomReservation = ({ room }) => {
  const { user } = useAuth();

  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });

  //   Total days * price
  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0]
  );
  // Total Price Calculation
  const totalPrice = totalDays * room?.price;

  // ---------------------For reservation modal-------------------------------------------
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const [bookingInfo, setbookingInfo] = useState({
    guest: {
      name: user?.name || user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: room?.host?.email,
    location: room?.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.image,
  });

  // ----------------------------------------------------------------
  // console.log(value);
  // ========================
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        {/* <Calender value={value} /> */}
        <Calender value={value} />
      </div>
      <hr />
      <div className="p-4">
        <Button
          disabled={room?.host?.email === user?.email || room.booked}
          onClick={() => setIsOpen(true)}
          label={"Reserve"}
        />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>

      {/* modal */}
      <BookingModal
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
      />
    </div>
  );
};

export default RoomReservation;
