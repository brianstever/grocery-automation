import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [mealplan, setMealplan] = useState([]);
  const [mealplan_prompt, setMealplan_prompt] = useState("");
  const [dietary_requirements, setDietary_requirements] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [newNumberOfPeople, setNewNumberOfPeople] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setMealplan(data.mealplan);
      setMealplan_prompt(data.mealplan_prompt);
      setDietary_requirements(data.dietary_requirements);
      setNumberOfPeople(data.number_of_people);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  const updateNumberOfPeople = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const ref = doc.docs[0].ref;
      await ref.update({
        number_of_people: newNumberOfPeople
      });
      setNumberOfPeople(newNumberOfPeople);
    } catch (err) {
      console.error(err);
      alert("An error occured while updating number of people");
    }
  };  

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <div>
          Number of people:
          <input
            type="number"
            value={newNumberOfPeople}
            onChange={e => setNewNumberOfPeople(e.target.value)}
          />
          <button onClick={updateNumberOfPeople}>Update</button>
        </div>
        <div>Mealplan prompt: {mealplan_prompt}</div>
        <div>Mealplan: {mealplan}</div>
        <div>Dietary Requirements: {dietary_requirements}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;

