import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export const MonsterInfo = () => {
  const location = useLocation();
  const { monster } = location.state || {};
  const [details, setDetails] = useState(null);

    useEffect(() => {
    if (monster && monster.url) {
        axios.get(`https://www.dnd5eapi.co${monster.url}`)
        .then(res => setDetails(res.data))
        .catch(err => console.error(err));
    }
    }, [monster]);


  if (!monster) return <p>Monster not found.</p>;
  if (!details) return <p>Loading monster details...</p>;

  return (
    <>
      <section>
        <h2>{details.name}</h2>
        <p><strong>Size:</strong> {details.size}</p>
        <p><strong>Type:</strong> {details.type}</p>
        <p><strong>Alignment:</strong> {details.alignment}</p>
        <p><strong>Armor Class:</strong> {details.armor_class.map(ac => ac.value).join(", ")}</p>
        <p><strong>Hit Points:</strong> {details.hit_points}</p>
        <p><strong>Hit Dice:</strong> {details.hit_dice}</p>
        <p><strong>Speed:</strong> {Object.entries(details.speed).map(([k, v]) => `${k}: ${v}`).join(", ")}</p>
        <p><strong>Strength:</strong> {details.strength}</p>
        <p><strong>Dexterity:</strong> {details.dexterity}</p>
        <p><strong>Constitution:</strong> {details.constitution}</p>
        <p><strong>Intelligence:</strong> {details.intelligence}</p>
        <p><strong>Wisdom:</strong> {details.wisdom}</p>
        <p><strong>Charisma:</strong> {details.charisma}</p>
        <p><strong>Languages:</strong> {details.languages}</p>
        <p><strong>Challenge Rating:</strong> {details.challenge_rating}</p>
        {/* Outros detalhes que quiser adicionar */}
      </section>

      <Link to={`/monsters`}><button>Go Back</button></Link>
    </>
  );
};
