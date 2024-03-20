import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
  // =================================================================
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/shakilahmedatik/stay-vista-resources/main/data/rooms.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  console.log(room);

  if (loading) {
    return <Loader />;
  }
  //   console.log(id);
  // =================================================================
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      Room title:{room?.title}
    </Container>
  );
};

export default RoomDetails;
