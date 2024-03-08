import React, { useEffect, useState } from "react";
import PrescriptionCard from "../components/PrescriptionCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`/doctor/getprescriptions`);
    setPrescriptions(data.message);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors">
          <h2 className="page-heading">Prescriptions</h2>
          {prescriptions.length > 0 ? (
            <div className="doctors-card-container">
              {prescriptions.map((ele) => {
                return <PrescriptionCard ele={ele} key={ele._id} />;
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Prescriptions;
