import React from "react";
import styles from "./style.module.css";
import officeMap from "../../assets/images/Map.png";

const mockData = [
  {
    id: 1,
    name: "Eve Carter",
    address: "Jongno-gu, Seoul, South Korea",
    Branch: "Gwanghwamun Branch",
  },
  {
    id: 2,
    name: "Henry Miller",
    address: "Gangnam-gu, Seoul, South Korea",
    Branch: "City Hall Branch",
  },
  {
    id: 3,
    name: "John Doe",
    address: "Gangnam-gu, Seoul, South Korea",
    Branch: "City Hall Branch",
  },
  {
    id: 4,
    name: "Emily Davis",
    address: "Yongsan-gu, Seoul, South Korea",
    Branch: "Itaewon Branch",
  },
  {
    id: 5,
    name: "Michael Wilson",
    address: "Gangnam-gu, Seoul, South Korea",
    Branch: "City Hall Branch",
  },
  {
    id: 6,
    name: "Bob Park",
    address: "Gangnam-gu, Seoul, South Korea",
    Branch: "City Hall Branch",
  },
  {
    id: 7,
    name: "Liam Walker",
    address: "Gangnam-gu, Seoul, South Korea",
    Branch: "City Hall Branch",
  },
  {
    id: 8,
    name: "Charlie Choi",
    address: "Gangnam-gu, Seoul, South Korea",
    Branch: "Ehwa Branch",
  },
];

export function Main() {
  return (
    <div className={styles.container}>
      <img src={officeMap} alt="Office" className={styles.headerImage} />
      <div className={styles.gridContainer}>
        {mockData.map((employee) => (
          <div key={employee.id} className={styles.card}>
            {/* <img
              src={`https://source.unsplash.com/100x100/?portrait&sig=${employee.id}`}
              alt={employee.name}
              className={styles.profileImage}
            /> */}
            <div>
              <h3 className={styles.name}>{employee.name}</h3>
              <p className={styles.address}>{employee.address}</p>
              <p className={styles.branch}>{employee.Branch}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
