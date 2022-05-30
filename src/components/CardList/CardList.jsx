import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Loader from "../../UI/Loader/Loader";
import s from "./CardList.module.scss";

export default function CardList({ defaultPage }) {
  const [usersData, setUsersData] = useState({});
  const [offset, setOffset] = useState(1);
  const [count, setCount] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .getAllUsers(offset, count)
      .then((response) => {
        setUsersData(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.toJSON()));
  }, [count, offset]);

  const showMore = () => {
    setCount(count + 6);
  };

  useEffect(() => {
    setCount(6);
  }, [defaultPage]);

  return (
    <div className={s.cards_box} id="cards">
      <div className={s.heading}>Working with GET request</div>

      <div className={s.cards_list}>
        {isLoading ? (
          <>
            <div></div>
            <Loader />
            <div></div>
          </>
        ) : (
          usersData.users &&
          usersData.users.map((user) => {
            return <Card user={user} key={user.id} />;
          })
        )}
      </div>

      <div className={s.btn_container}>
        <Button
          text="Show more"
          disabled={false}
          hidden={usersData.total_users <= count}
          eventFunc={showMore}
        />
      </div>
    </div>
  );
}
